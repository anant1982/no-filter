import $ from "jquery";
import jQuery from "jquery";
import Swiper from "swiper";

export function swiperInitialize() {
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	window.mousePosition = {};
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	document.addEventListener("mousemove", mouseMoveEventFunc);
	function mouseMoveEventFunc(event) {
		if (!isTouchDevice) {
			window.mousePosition.x = event.pageX;
			window.mousePosition.y = event.pageY;

			if (window.swiper) {
				updateColor(window.swiper);
			}
		}
	}
	function updateColor(swiper) {
		var color = currentColor(swiper);

		var works = $(".swiper-slide.work", swiper.$el);

		for (var i = 0; i < works.length; i++) {
			$(works[i]).css("background-color", color);
		}
	}

	function currentColor(swiper) {
		var current;

		var works = $(".swiper-slide.work", swiper.$el);

		for (var i = 0; i < works.length; i++) {
			var work = works[i];

			if (mouseIsOnWorkImage(work)) {
				current = $(work).data("color");
				swiper.currentColorCache = current;
				break;
			}
		}

		if (!current) {
			if (mouseIsOnAnyWork()) {
				current = swiper.currentColorCache;
			}
		}

		return current ? current : swiper.defaultColor;
	}

	function mouseIsOnAnyWork() {
		var works = $(".swiper-slide.work");

		for (var i = 0; i < works.length; i++) {
			if (mouseIsOnWork(works[i])) {
				return true;
			}
		}

		return false;
	}

	function mouseIsOnWork(work) {
		var offset = $(work).offset();
		var width = $(work).width();
		var height = $(work).height();

		var xIn =
			window.mousePosition.x > offset.left &&
			window.mousePosition.x < offset.left + width;
		var yIn =
			window.mousePosition.y > offset.top &&
			window.mousePosition.y < offset.top + height;

		return xIn && yIn;
	}

	function mouseIsOnWorkImage(work) {
		var inner = $(work).find(".inner")[0];

		var offset = $(inner).offset();
		var width = $(inner).width();

		var xIn =
			window.mousePosition.x > offset.left &&
			window.mousePosition.x < offset.left + width;

		return xIn;
	}
	function isTouchDevice() {
		return (
			"ontouchstart" in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		);
	}
	var mySwiper = new Swiper("#gallery", {
		speed: 700,
		mousewheel: true,
		grabCursor: true,
		on: {
			reachBeginning: function () {
				$(this.$el).addClass("beginning");
			},
			init: function () {
				$(this.$el).addClass("beginning");

				this.defaultColor = $(this.$el)
					.find(".swiper-slide.work")
					.css("background-color");
				this.currentColorCache = undefined;
			},
			transitionStart: function () {
				if (!this.isBeginning) {
					$(this.$el).removeClass("beginning");
				}
				if (!isTouchDevice) {
					this.trigger_mousemove_event = setInterval(function () {
						var event = jQuery.Event("mousemove");
						event.pageX = window.mousePosition.x;
						event.pageY = window.mousePosition.y;
						$(document).trigger(event);
					}, 1000 / 30);
				}
			},
			transitionEnd: function () {
				if (!isTouchDevice) {
					this.visualActiveIndex = this.activeIndex;
					var slide = this.slides[this.activeIndex];
					if ($(slide).offset().left < 0) {
						// this means the slide has visually deactivated
						// only happens when scroll to the end
						this.visualActiveIndex += 1;
					}
					updateColor(this);
				} else {
					clearInterval(this.trigger_mousemove_event);
				}
			},
		},
		breakpoints: {
			2400: {
				slidesPerView: "auto",
				spaceBetween: 0,
				slidesOffsetAfter: 0,
				slidesPerGroup: 1,
			},
			1023: {
				freeMode: true,
				mousewheel: {
					sensitivity: 5,
				},
				slidesPerView: 1,
				spaceBetween: 0,
				slidesOffsetAfter: 0,
				slidesPerGroup: 1,
			},
		},
	});
	window.swiper = mySwiper;

	$(".scroll-to-beginning").on("click", function () {
		var swiper = $(this).closest(".swiper-container")[0].swiper;
		swiper.slideTo(0);
	});

	$(".swiper-container").removeClass("is-invisible");
}
