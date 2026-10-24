(function () {
	"use strict";

	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var headerH = 72;

	function formatNumber(n) {
		return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
	}

	/* Year */
	var yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());

	/* Header background on scroll */
	var header = document.getElementById("siteHeader");
	var toTop = document.getElementById("toTop");

	function onScroll() {
		var y = window.scrollY || window.pageYOffset;
		if (header) header.classList.toggle("is-scrolled", y > 40);
		if (toTop) {
			toTop.hidden = false;
			toTop.classList.toggle("is-visible", y > 700);
		}
	}
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	if (toTop) {
		toTop.addEventListener("click", function () {
			window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
		});
	}

	/* Mobile menu */
	var burger = document.getElementById("burger");
	var mobileMenu = document.getElementById("mobileMenu");

	function closeMenu() {
		if (!burger || !mobileMenu) return;
		burger.classList.remove("is-open");
		burger.setAttribute("aria-expanded", "false");
		mobileMenu.classList.remove("is-open");
		document.documentElement.classList.remove("site-nav-open");
		window.setTimeout(function () {
			if (!mobileMenu.classList.contains("is-open")) mobileMenu.hidden = true;
		}, 350);
	}

	if (burger && mobileMenu) {
		burger.addEventListener("click", function () {
			var open = !burger.classList.contains("is-open");
			burger.classList.toggle("is-open", open);
			burger.setAttribute("aria-expanded", String(open));
			document.documentElement.classList.toggle("site-nav-open", open);
			if (open) {
				mobileMenu.hidden = false;
				requestAnimationFrame(function () {
					mobileMenu.classList.add("is-open");
				});
			} else {
				closeMenu();
			}
		});
	}

	/* Smooth scrolling for elements with data-scroll */
	function scrollToTarget(selector) {
		var el = document.querySelector(selector);
		if (!el) return;
		var top = el.getBoundingClientRect().top + window.scrollY - (headerH - 8);
		window.scrollTo({ top: Math.max(top, 0), behavior: reduceMotion ? "auto" : "smooth" });
	}

	document.querySelectorAll("[data-scroll]").forEach(function (trigger) {
		trigger.addEventListener("click", function (e) {
			var target = trigger.getAttribute("data-target") || trigger.getAttribute("href");
			if (!target) return;
			e.preventDefault();
			closeMenu();
			scrollToTarget(target);
		});
	});

	window.addEventListener("keydown", function (e) {
		if (e.key === "Escape") closeMenu();
	});

	/* Reveal on scroll */
	var revealEls = document.querySelectorAll("[data-reveal]");
	if (reduceMotion || !("IntersectionObserver" in window)) {
		revealEls.forEach(function (el) {
			el.classList.add("is-visible");
		});
	} else {
		var revealObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						revealObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
		);
		revealEls.forEach(function (el) {
			revealObserver.observe(el);
		});
	}

	/* Stat counters */
	function animateCount(el) {
		var target = parseFloat(el.getAttribute("data-count")) || 0;
		var suffix = el.getAttribute("data-suffix") || "";
		if (reduceMotion) {
			el.textContent = formatNumber(target) + suffix;
			return;
		}
		var duration = 1400;
		var start = performance.now();
		function tick(now) {
			var p = Math.min((now - start) / duration, 1);
			var eased = 1 - Math.pow(1 - p, 3);
			el.textContent = formatNumber(Math.round(target * eased)) + suffix;
			if (p < 1) requestAnimationFrame(tick);
		}
		requestAnimationFrame(tick);
	}

	var counters = document.querySelectorAll("[data-count]");
	if ("IntersectionObserver" in window) {
		var countObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						animateCount(entry.target);
						countObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);
		counters.forEach(function (el) {
			countObserver.observe(el);
		});
	}

	/* Scrollspy */
	var spySections = document.querySelectorAll("section[id]");
	var navLinks = document.querySelectorAll(".site-nav__link[data-target]");
	if ("IntersectionObserver" in window && navLinks.length) {
		var spyObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					var id = "#" + entry.target.id;
					navLinks.forEach(function (link) {
						link.classList.toggle("is-active", link.getAttribute("data-target") === id);
					});
				});
			},
			{ rootMargin: "-45% 0px -50% 0px", threshold: 0 }
		);
		spySections.forEach(function (s) {
			spyObserver.observe(s);
		});
	}

	/* Pricing tabs */
	var tabs = document.querySelectorAll(".tab");
	tabs.forEach(function (tab) {
		tab.addEventListener("click", function () {
			var key = tab.getAttribute("data-tab");
			tabs.forEach(function (t) {
				var active = t === tab;
				t.classList.toggle("is-active", active);
				t.setAttribute("aria-selected", String(active));
			});
			document.querySelectorAll(".price-panel").forEach(function (panel) {
				panel.classList.toggle("is-active", panel.getAttribute("data-panel") === key);
			});
		});
	});

	/* Image fallbacks (local photo missing -> stock preview) */
	document.querySelectorAll("img[data-fallback]").forEach(function (img) {
		var fallback = img.getAttribute("data-fallback");
		function useFallback() {
			if (img.getAttribute("src") !== fallback) img.setAttribute("src", fallback);
		}
		img.addEventListener("error", useFallback);
		if (img.complete && img.naturalWidth === 0) useFallback();
	});

	/* Lightbox */
	var lightbox = document.getElementById("lightbox");
	var lightboxImg = document.getElementById("lightboxImg");
	var lightboxCaption = document.getElementById("lightboxCaption");
	var lightboxClose = document.getElementById("lightboxClose");
	var lightboxFallback = "";

	lightboxImg.addEventListener("error", function () {
		if (lightboxFallback && lightboxImg.getAttribute("src") !== lightboxFallback) {
			lightboxImg.setAttribute("src", lightboxFallback);
		}
	});

	function openLightbox(src, caption, fallback) {
		if (!lightbox) return;
		lightboxFallback = fallback || "";
		lightboxImg.src = src;
		lightboxImg.alt = caption || "";
		lightboxCaption.textContent = caption || "";
		lightbox.hidden = false;
		document.body.style.overflow = "hidden";
		requestAnimationFrame(function () {
			lightbox.classList.add("is-open");
		});
	}
	function closeLightbox() {
		if (!lightbox) return;
		lightbox.classList.remove("is-open");
		document.body.style.overflow = "";
		window.setTimeout(function () {
			lightbox.hidden = true;
			lightboxImg.removeAttribute("src");
		}, 350);
	}

	document.querySelectorAll("[data-lightbox]").forEach(function (item) {
		item.addEventListener("click", function () {
			var innerImg = item.querySelector("img");
			var fallback = innerImg ? innerImg.getAttribute("data-fallback") || "" : "";
			openLightbox(
				item.getAttribute("data-lightbox"),
				item.getAttribute("data-caption"),
				fallback
			);
		});
	});
	if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
	if (lightbox) {
		lightbox.addEventListener("click", function (e) {
			if (e.target === lightbox) closeLightbox();
		});
	}
	window.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
	});

	/* Booking form */
	var form = document.getElementById("bookingForm");
	var success = document.getElementById("formSuccess");
	var resetBtn = document.getElementById("formReset");

	if (form && success) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			var valid = true;
			["name", "phone"].forEach(function (id) {
				var input = document.getElementById(id);
				if (!input) return;
				var fieldValid = input.value.trim().length >= 2;
				input.classList.toggle("is-invalid", !fieldValid);
				if (!fieldValid) valid = false;
			});
			if (!valid) {
				var firstInvalid = form.querySelector(".is-invalid");
				if (firstInvalid) firstInvalid.focus();
				return;
			}
			form.hidden = true;
			success.hidden = false;
			success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
		});

		form.querySelectorAll(".field__input").forEach(function (input) {
			input.addEventListener("input", function () {
				if (input.classList.contains("is-invalid") && input.value.trim().length >= 2) {
					input.classList.remove("is-invalid");
				}
			});
		});
	}

	if (resetBtn && form && success) {
		resetBtn.addEventListener("click", function () {
			form.reset();
			form.hidden = false;
			success.hidden = true;
		});
	}
})();
