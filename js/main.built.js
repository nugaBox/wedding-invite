!(function (e) {
    var t = {};
    function i(s) {
        if (t[s]) return t[s].exports;
        var n = (t[s] = { i: s, l: !1, exports: {} });
        return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    (i.m = e),
        (i.c = t),
        (i.d = function (e, t, s) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if ((i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    i.d(
                        s,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return s;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = "/"),
        i((i.s = 155));
})([
    function (e, t) {
        (e.exports = function (e) {
            return e && e.__esModule ? e : { default: e };
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t, i) {
        "use strict";
        var s = i(15);
        e.exports = s.requestAnimationFrame("draw");
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t;
            };
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(8).EventEmitterMicro,
            n = { create: i(14), update: i(9), draw: i(1) },
            r = () => {};
        let a = 0;
        e.exports = class extends s {
            constructor(e) {
                super(), (this.el = e.el), (this.gum = e.gum), (this.componentName = e.componentName), (this._keyframeController = null);
            }
            destroy() {
                (this.el = null), (this.gum = null), (this._keyframeController = null), super.destroy();
            }
            addKeyframe(e) {
                const t = e.el || this.el;
                return (e.group || this.anim).addKeyframe(t, e);
            }
            addDiscreteEvent(e) {
                e.event = e.event || "Generic-Event-Name-" + a++;
                let t = void 0 !== e.end && e.end !== e.start;
                const i = this.addKeyframe(e);
                return (
                    t
                        ? (e.onEnterOnce && i.controller.once(e.event + ":enter", e.onEnterOnce),
                          e.onExitOnce && i.controller.once(e.event + ":exit", e.onExitOnce),
                          e.onEnter && i.controller.on(e.event + ":enter", e.onEnter),
                          e.onExit && i.controller.on(e.event + ":exit", e.onExit))
                        : (e.onEventOnce && i.controller.once(e.event, e.onEventOnce),
                          e.onEventReverseOnce && i.controller.once(e.event + ":reverse", e.onEventReverseOnce),
                          e.onEvent && i.controller.on(e.event, e.onEvent),
                          e.onEventReverse && i.controller.on(e.event + ":reverse", e.onEventReverse)),
                    i
                );
            }
            addRAFLoop(e) {
                let t = ["start", "end"];
                if (!t.every((t) => e.hasOwnProperty(t))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
                const i = new n.create();
                i.on("update", e.onUpdate || r), i.on("draw", e.onDraw || r), i.on("draw", () => i.run());
                const { onEnter: s, onExit: a } = e;
                return (
                    (e.onEnter = () => {
                        i.run(), s && s();
                    }),
                    (e.onExit = () => {
                        i.cancel(), a && a();
                    }),
                    this.addDiscreteEvent(e)
                );
            }
            addContinuousEvent(e) {
                e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), (e.event = e.event || "Generic-Event-Name-" + a++);
                let t = this.addKeyframe(e);
                return t.controller.on(e.event, e.onDraw), t;
            }
            mounted() {}
            onResizeImmediate(e) {}
            onResizeDebounced(e) {}
            onBreakpointChange(e) {}
            get anim() {
                return this.gum.anim;
            }
            get keyframeController() {
                return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el));
            }
            get pageMetrics() {
                return this.anim.model.pageMetrics;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.USE_ANIM_LIFECYCLE_ATTRIB = t.THEME_DEFAULT = t.THEME_CLASSNAME_NAMESPACE = t.THEME_ATTRIB = t.SOSUMI_FOOTNOTE_LINK_SELECTOR = t.SECTION_ENGAGEMENT_TIME = t.SECTION_ENGAGEMENT_ATTRIB = t.SCROLLBAR_BUFFER_CSS_VAR = t.SCRIM = t.MODAL_SELECTOR = t.MODAL_LABELLEDBY_ATTRIB = t.MODAL_L2_CLASSNAME = t.MODAL_ID_ATTRIB = t.MODAL_CUSTOM_CLASSNAME_ATTRIB = t.MODAL_COMPONENT_REF_ATTRIB = t.LIFECYCLE_EVTS = t.GUM_COMPONENT_NAME = t.CONTENT_WRAPPER_ATTRIB = t.BTN_OPEN_ATTRIB = t.BTN_CLOSE_ATTRIB = t.ANIM_SCROLLGROUP_NAME_ATTRIB = t.ANIMATION_EVTS = t.ANALYTICS_REGION_ID_ATTRIB = void 0);
        var n = s(i(112));
        (t.ANALYTICS_REGION_ID_ATTRIB = "data-analytics-activitymap-region-id"),
            (t.ANIMATION_EVTS = { WILLOPEN: n.default.Events.WILLOPEN, OPEN: n.default.Events.OPEN, OPEN_COMPLETE: "open:complete", WILLCLOSE: n.default.Events.WILLCLOSE, CLOSE: n.default.Events.CLOSE, CLOSE_COMPLETE: "close:complete" }),
            (t.ANIM_SCROLLGROUP_NAME_ATTRIB = "data-modal-scroll-group-name"),
            (t.BTN_OPEN_ATTRIB = "data-modal-open"),
            (t.BTN_CLOSE_ATTRIB = "data-modal-close"),
            (t.CONTENT_WRAPPER_ATTRIB = "data-modal-content-wrapper"),
            (t.GUM_COMPONENT_NAME = "L2Modal"),
            (t.LIFECYCLE_EVTS = {
                CREATED: "l2modal:lifecycle:created",
                MOUNTED: "l2modal:lifecycle:mounted",
                WILLOPEN: "l2modal:lifecycle:onwillopen",
                OPEN: "l2modal:lifecycle:onopen",
                WILLCLOSE: "l2modal:lifecycle:onwillclose",
                CLOSE: "l2modal:lifecycle:onclose",
            }),
            (t.MODAL_CUSTOM_CLASSNAME_ATTRIB = "data-modal-class"),
            (t.MODAL_ID_ATTRIB = "data-modal-id");
        const r = (t.MODAL_L2_CLASSNAME = "modal-l2");
        (t.MODAL_LABELLEDBY_ATTRIB = "data-modal-dialog-labelledby"),
            (t.MODAL_COMPONENT_REF_ATTRIB = "data-modal-component-ref"),
            (t.MODAL_SELECTOR = `.${r}`),
            (t.SCRIM = {
                ELEMENT_CLASSNAME: "modal-scrim",
                ELEMENT_ATTRIB: "data-modal-element-scrim",
                BLUR_ATTRIB: "data-modal-scrim-blur",
                BLUR_CLASSNAME: "modal-scrim-blur",
                CSS_VAR_BLUR: "--modal-scrim-blur",
                CSS_VAR_FILL: "--modal-scrim-fill",
            }),
            (t.SCROLLBAR_BUFFER_CSS_VAR = "--modal-scrollbar-buffer"),
            (t.SECTION_ENGAGEMENT_ATTRIB = "data-analytics-section-engagement"),
            (t.SECTION_ENGAGEMENT_TIME = 1e3),
            (t.SOSUMI_FOOTNOTE_LINK_SELECTOR = ".footnote a"),
            (t.THEME_ATTRIB = "data-modal-theme"),
            (t.THEME_CLASSNAME_NAMESPACE = "theme"),
            (t.THEME_DEFAULT = "light"),
            (t.USE_ANIM_LIFECYCLE_ATTRIB = "data-modal-anim-lifecycle");
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            getWindow: function () {
                return window;
            },
            getDocument: function () {
                return document;
            },
            getNavigator: function () {
                return navigator;
            },
        };
    },
    function (e, t, i) {
        "use strict";
        function s() {
            this._events = {};
        }
        let n = s.prototype;
        (n.on = function (e, t) {
            return (this._events[e] = this._events[e] || []), this._events[e].unshift(t), t;
        }),
            (n.once = function (e, t) {
                let i = this;
                return this.on(e, function s(n) {
                    i.off(e, s), void 0 !== n ? t(n) : t();
                });
            }),
            (n.off = function (e, t) {
                if (!this.has(e)) return;
                if (1 === arguments.length) return (this._events[e] = null), void delete this._events[e];
                let i = this._events[e].indexOf(t);
                -1 !== i && this._events[e].splice(i, 1);
            }),
            (n.trigger = function (e, t) {
                if (this.has(e)) for (let i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]();
            }),
            (n.has = function (e) {
                return e in this._events != !1 && 0 !== this._events[e].length;
            }),
            (n.destroy = function () {
                for (let e in this._events) this._events[e] = null;
                this._events = null;
            }),
            (e.exports = s);
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FEATURE_ENHANCED = t.EVT_UNENHANCE_FEATURE = t.EVT_UNENHANCE = t.EVT_TEXT_ZOOM = void 0);
        (t.EVT_UNENHANCE = "pagexp:unenhance"), (t.EVT_UNENHANCE_FEATURE = "pagexp:unenhance:feature"), (t.EVT_TEXT_ZOOM = "text-zoom:engaged"), (t.FEATURE_ENHANCED = "enhanced");
    },
    function (e, t, i) {
        "use strict";
        e.exports = { EventEmitterMicro: i(6) };
    },
    function (e, t, i) {
        "use strict";
        var s = i(15);
        e.exports = s.requestAnimationFrame("update");
    },
    function (e, t, i) {
        "use strict";
        const s = {
            GUI_INSTANCE: null,
            ANIM_INSTANCE: null,
            VIEWPORT_EMITTER_ELEMENT: void 0,
            LOCAL_STORAGE_KEYS: { GuiPosition: "anim-ui.position", GroupCollapsedStates: "anim-ui.group-collapsed-states", scrollY: "anim-ui.scrollY-position", path: "anim-ui.path" },
            RESIZE_TIMEOUT: -1,
            BREAKPOINTS: [
                { name: "S", mediaQuery: "only screen and (max-width: 734px)" },
                { name: "M", mediaQuery: "only screen and (max-width: 1068px)" },
                { name: "L", mediaQuery: "only screen and (min-width: 1069px)" },
            ],
            getBreakpoint: function () {
                for (let e = 0; e < s.BREAKPOINTS.length; e++) {
                    let t = s.BREAKPOINTS[e];
                    if (window.matchMedia(t.mediaQuery).matches) return t.name;
                }
            },
            KeyframeDefaults: { ease: 1, epsilon: 0.05, preserveState: !1, easeFunctionString: "linear", easeFunction: "linear", hold: !1, snapAtCreation: !1, toggle: !1, breakpointMask: "SMLX", event: "", disabledWhen: [], cssClass: "" },
            KeyframeTypes: { Interpolation: 0, InterpolationForward: 1, CSSClass: 2, Event: 3 },
            EVENTS: {
                ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
                ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
                ON_GROUP_CREATED: "ON_GROUP_CREATED",
                ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
                ON_TIMELINE_START: "ON_TIMELINE_START",
                ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
                ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE",
                ON_CHAPTER_INITIATED: "ON_CHAPTER_INITIATED",
                ON_CHAPTER_OCCURRED: "ON_CHAPTER_OCCURRED",
                ON_CHAPTER_COMPLETED: "ON_CHAPTER_COMPLETED",
            },
            PageEvents: { ON_SCROLL: "ON_SCROLL", ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE", ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED", ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE" },
            KeyframeJSONReservedWords: ["event", "cssClass", "style", "anchors", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
            TweenProps: i(98),
            TargetValue: i(22),
            CSSTargetValue: i(72),
            pageMetrics: new (function () {
                (this.scrollX = 0), (this.scrollY = 0), (this.windowWidth = 0), (this.windowHeight = 0), (this.documentOffsetX = 0), (this.documentOffsetY = 0), (this.previousBreakpoint = ""), (this.breakpoint = "");
            })(),
            KeyframeComparison: function (e, t) {
                return e.start < t.start ? -1 : e.start > t.start ? 1 : 0;
            },
        };
        e.exports = s;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(12));
        t.default = class {
            constructor(e) {
                (this.options = e), (this.media = e.media), (this.mounted = this.mounted.bind(this)), this.media.on(n.default.MOUNTED, this.mounted);
            }
            mounted() {}
            static get isSupported() {
                return !0;
            }
            destroy() {}
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            MOUNTED: "MOUNTED",
            MEDIA_LOAD_START: "MEDIA_LOAD_START",
            MEDIA_LOAD_COMPLETE: "MEDIA_LOAD_COMPLETE",
            MEDIA_LOAD_ERROR: "MEDIA_LOAD_ERROR",
            PLAYBACK_STATE_CHANGE: "PLAYBACK_STATE_CHANGE",
            LOADING_STATE_CHANGE: "LOADING_STATE_CHANGE",
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = { PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME: "data-download-area-keyframe", PICTURE_DATA_LAZY: "data-lazy", PICTURE_DATA_EMPTY_SOURCE: "data-empty", PICTURE_DATA_LOADED: "data-picture-loaded", PICTURE_CLASS_LOADED: "loaded" };
    },
    function (e, t, i) {
        "use strict";
        var s,
            n = i(8).EventEmitterMicro,
            r = i(47),
            a = i(65);
        function o(e) {
            (e = e || {}), n.call(this), (this.id = a.getNewID()), (this.executor = e.executor || r), this._reset(), (this._willRun = !1), (this._didDestroy = !1);
        }
        ((s = o.prototype = Object.create(n.prototype)).run = function () {
            return this._willRun || (this._willRun = !0), this._subscribe();
        }),
            (s.cancel = function () {
                this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset();
            }),
            (s.destroy = function () {
                var e = this.willRun();
                return this.cancel(), (this.executor = null), n.prototype.destroy.call(this), (this._didDestroy = !0), e;
            }),
            (s.willRun = function () {
                return this._willRun;
            }),
            (s.isRunning = function () {
                return this._isRunning;
            }),
            (s._subscribe = function () {
                return this.executor.subscribe(this);
            }),
            (s._unsubscribe = function () {
                return this.executor.unsubscribe(this);
            }),
            (s._onAnimationFrameStart = function (e) {
                (this._isRunning = !0), (this._willRun = !1), this._didEmitFrameData || ((this._didEmitFrameData = !0), this.trigger("start", e));
            }),
            (s._onAnimationFrameEnd = function (e) {
                this._willRun || (this.trigger("stop", e), this._reset());
            }),
            (s._reset = function () {
                (this._didEmitFrameData = !1), (this._isRunning = !1);
            }),
            (e.exports = o);
    },
    function (e, t, i) {
        "use strict";
        var s = i(62),
            n = function () {
                this.events = {};
            },
            r = n.prototype;
        (r.requestAnimationFrame = function (e) {
            return this.events[e] || (this.events[e] = new s(e)), this.events[e].requestAnimationFrame;
        }),
            (r.cancelAnimationFrame = function (e) {
                return this.events[e] || (this.events[e] = new s(e)), this.events[e].cancelAnimationFrame;
            }),
            (e.exports = new n());
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Logger = t.DevLogger = void 0);
        const n = s(i(17)).default.browser.safari,
            r = {
                sep: "%s",
                reset: "[0m",
                bold: "[1m",
                dim: "[2m",
                cursive: "[3m",
                underscore: "[4m",
                blink: "[5m",
                reverse: "[7m",
                hidden: "[8m",
                black: "[30m",
                red: "[31m",
                green: "[32m",
                yellow: "[33m",
                blue: "[34m",
                magenta: "[35m",
                cyan: "[36m",
                white: "[37m",
                BGblack: "[40m",
                BGred: "[41m",
                BGgreen: "[42m",
                BGyellow: "[43m",
                BGblue: "[44m",
                BGmagenta: "[45m",
                BGcyan: "[46m",
                BGwhite: "[47m",
            },
            a = (e) => `${r[e]}${r.sep}${r.reset}`,
            o = a("cyan"),
            l = a("green"),
            h = a("yellow"),
            d = a("red");
        class c {
            static get log() {
                return n ? console.log : console.log.bind(console, o);
            }
            static get info() {
                return n ? console.log : console.log.bind(console, l);
            }
            static get warn() {
                return n ? console.log : console.log.bind(console, h);
            }
            static get error() {
                return n ? console.log : console.log.bind(console, d);
            }
        }
        t.Logger = c;
        t.DevLogger = class extends c {
            static get log() {
                return () => {};
            }
            static get info() {
                return () => {};
            }
            static get warn() {
                return () => {};
            }
            static get error() {
                return () => {};
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = { ua: window.navigator.userAgent, platform: window.navigator.platform, vendor: window.navigator.vendor };
        e.exports = i(68)(s);
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.RT_VIEWER_FEATURE_DETECT = t.EVT_RT_VIEWER_TRIGGER_LOAD = t.EVT_RT_VIEWER_TRIGGER_DESTROY = t.EVT_RT_VIEWER_READY = t.EVT_RT_VIEWER_QL_TRIGGERED = t.EVT_RT_VIEWER_ESCAPE = t.EVT_RT_VIEWER_ANIMATION_UPDATE = t.EVT_RT_VIEWER_ANIMATION_START = t.EVT_RT_VIEWER_ANIMATION_ENDED = t.EVT_RT_VIEWER_AAP_TRIGGER = t.EVT_RT_VIEWER_AAP_ENABLE = t.EVT_RT_VIEWER_AAP_DISABLE = t.EVT_RT_BASE_INDEX_CHANGED = t.EVT_AAP_SIZE_CHANGED = t.EVT_AAP_COLOR_CHANGED = void 0);
        (t.EVT_AAP_COLOR_CHANGED = "aap:color-changed"),
            (t.EVT_AAP_SIZE_CHANGED = "aap:size-changed"),
            (t.EVT_RT_BASE_INDEX_CHANGED = "rt-viewer-base:index-changed"),
            (t.EVT_RT_VIEWER_ESCAPE = "rt-viewer:escape"),
            (t.EVT_RT_VIEWER_READY = "rt-viewer:ready"),
            (t.EVT_RT_VIEWER_TRIGGER_LOAD = "rt-viewer:trigger-load"),
            (t.EVT_RT_VIEWER_TRIGGER_DESTROY = "rt-viewer:trigger-destroy"),
            (t.EVT_RT_VIEWER_ANIMATION_START = "rt-viewer:animation:start"),
            (t.EVT_RT_VIEWER_ANIMATION_UPDATE = "rt-viewer:animation:update"),
            (t.EVT_RT_VIEWER_ANIMATION_ENDED = "rt-viewer:animation:ended"),
            (t.EVT_RT_VIEWER_AAP_DISABLE = "rt-viewer:aap:disable"),
            (t.EVT_RT_VIEWER_AAP_ENABLE = "rt-viewer:aap:enable"),
            (t.EVT_RT_VIEWER_AAP_TRIGGER = "rt-viewer:aap:trigger"),
            (t.EVT_RT_VIEWER_QL_TRIGGERED = "rt-viewer:ql:triggered"),
            (t.RT_VIEWER_FEATURE_DETECT = "enhanced-rt");
    },
    function (e, t, i) {
        "use strict";
        e.exports = {};
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            var e = s.getWindow(),
                t = s.getDocument(),
                i = s.getNavigator();
            return !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch) || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0);
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        let s, n;
        try {
            (s = i(39)), (n = s.observer.Event);
        } catch (e) {}
        e.exports = {
            trackPageState: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enhanced";
                if (s && s.passiveTracker) {
                    let t = { eVar70: "enhanced" };
                    document.documentElement.classList.contains(e) || (t = { eVar70: "base", eVar153: document.documentElement.causeForBase }), s.passiveTracker(t);
                }
            },
            trackViewerState: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enhanced-rt";
                if (s && s.passiveTracker) {
                    let t = { eVar158: "realtime viewer - enhanced" };
                    document.documentElement.classList.contains(e) || (t = { eVar158: "realtime viewer - base", eVar152: document.documentElement.causeForViewerBase || document.documentElement.causeForBase }), s.passiveTracker(t);
                }
            },
            trackCustomEvent: function (e, t) {
                if (n) {
                    if (!["events", "title"].every((e) => Object.keys(t).includes(e))) throw new Error(`trackCustomEvent(): invalid options: ${t}`);
                    const i = { interactionEvents: [t.eventKey] },
                        s = new n(e, i);
                    return e.trigger(t.eventKey, { title: t.title, events: t.events }), s;
                }
                return null;
            },
            setCauseForBase: function (e) {
                document.documentElement.causeForBase || (document.documentElement.causeForBase = e);
            },
            setCauseForViewerBase: function (e) {
                document.documentElement.causeForViewerBase || (document.documentElement.causeForViewerBase = e);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = class {
            constructor(e, t, i, s) {
                let n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
                (this.epsilon = parseFloat(t)), (this.snapAtCreation = i), (this.initialValue = e), (this.target = e), (this.current = e), (this.previousValue = e), (this.isActive = !1), (this.key = s), (this.round = n), (this.suffix = r);
            }
            update(e, t, i) {
                (this.target = e[0] + t * (e[1] - e[0])), (this.previousValue = this.current), (this.current += (this.target - this.current) * i);
                let s = this.delta(this.current, this.target);
                return s < this.epsilon && ((this.current = this.target), (s = 0)), s > this.epsilon || (0 === s && this.previousValue !== this.current);
            }
            reconcile(e, t) {
                return (this.initialValue = e[0]), this.update(e, t, 1);
            }
            needsUpdate() {
                return this.delta(this.current, this.target) > this.epsilon;
            }
            delta(e, t) {
                return Math.abs(e - t);
            }
            calculateEpsilon(e, t) {
                if (e.epsilon) return void (this.epsilon = e.epsilon);
                let i = this.delta(t[0], t[1]),
                    s = Math.min(0.001 * i, this.epsilon, 0.05);
                this.epsilon = Math.max(s, 0.001);
            }
            set(e) {
                let t = this.current;
                this.round && (t = Math.round(t)), this.suffix && (t += this.suffix), (e[this.key] = t);
            }
            unset(e) {}
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(1)),
            r = s(i(3)),
            a = i(109),
            o = i(16),
            l = i(7),
            h = (function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var i = d(t);
                if (i && i.has(e)) return i.get(e);
                var s = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        a && (a.get || a.set) ? Object.defineProperty(s, r, a) : (s[r] = e[r]);
                    }
                return (s.default = e), i && i.set(e, s), s;
            })(i(46));
        function d(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
                i = new WeakMap();
            return (d = function (e) {
                return e ? i : t;
            })(e);
        }
        class c extends r.default {
            constructor(e) {
                super(e),
                    (this.unenhanceEventsOccurred = new Set()),
                    this.gum.on(a.EVENTS.DOM_COMPONENTS_MOUNTED, () => {
                        this.pageXp = this.gum.getComponentOfType("PageXpController", document.body);
                    }),
                    (this._onUnenhancePageXp = this._onUnenhancePageXp.bind(this)),
                    (this._onUnenhancePageXpFeature = this._onUnenhancePageXpFeature.bind(this)),
                    this.anim.once(l.EVT_UNENHANCE, this._onUnenhancePageXp),
                    this.anim.on(l.EVT_UNENHANCE_FEATURE, this._onUnenhancePageXpFeature);
            }
            destroy() {
                this.destroyed ||
                    ((this.destroyed = !0),
                    this.unenhanceFeatureClass(),
                    this.enhancedScrollGroup && this.pageXp.scrollGroupPromises.push(this.enhancedScrollGroup.remove().catch(() => {})),
                    (0, n.default)(() => {
                        this.featureDetect && this.featureDetect !== l.FEATURE_ENHANCED && this.gum && this.anim.forceUpdate(), super.destroy();
                    }));
            }
            get logger() {
                return o.DevLogger;
            }
            _onUnenhancePageXp() {
                this.destroyed || this.onUnenhance();
            }
            _onUnenhancePageXpFeature(e) {
                this.destroyed || this.unenhanceEventsOccurred.has(e) || (this.onUnenhanceEvent(e), this.unenhanceEventsOccurred.add(e), this._onUnenhancePageXp());
            }
            onUnenhance() {
                this.destroy();
            }
            onUnenhanceEvent(e) {
                this.logger.info("onUnenhanceEvent", e, this.componentName);
            }
            async unenhanceFeatureClass() {
                this.featureDetect && this.featureDetect !== l.FEATURE_ENHANCED && (await h.removeFeatureDetectClass(this.featureDetect)), (0, n.default)(() => this.gum && this.anim.forceUpdate());
            }
            setUnenhanceViewports() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { overwriteDefaults: !1, excludeMatches: !1 };
                h.setupViewportTracker({ viewports: e, defaultViewports: this.pageXp.defaultEnhancedViewports, onVpChanged: this._unenhanceViewportHandler, overwriteDefaults: t.overwriteDefaults, excludeMatches: t.excludeMatches }).then(
                    () => {
                        this.pageXp ? this._onUnenhancePageXpFeature("enhanced-xp:invalid-vp") : this.destroy(), this.logger.info("unenhanceViewports", this.componentName);
                    }
                );
            }
        }
        t.default = c;
    },
    function (e, t, i) {
        "use strict";
        var s = i(15);
        e.exports = s.cancelAnimationFrame("draw");
    },
    function (e, t, i) {
        "use strict";
        e.exports = { RAFEmitter: i(14), ThrottledRAFEmitter: i(231), update: i(9), external: i(77), draw: i(1), cancelUpdate: i(78), cancelExternal: i(232), cancelDraw: i(24), RAFExecutor: i(48), sharedRAFExecutorInstance: i(47) };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(1)),
            r = s(i(9)),
            a = i(7);
        t.default = class {
            constructor(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base",
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "true";
                (this.aapController = e),
                    (this.anim = this.aapController.anim),
                    (this.aap = t),
                    (this.type = i),
                    (this.preload = s),
                    (this.isAnimating = !1),
                    (this.isActive = !1),
                    (this.isEnabled = !0),
                    (this.keyframeOptions = JSON.parse(this.aap.dataset.aapKf)),
                    (this.introduce = this.anim.createTimeGroup()),
                    (this.dismiss = this.anim.createTimeGroup()),
                    this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, (e) => {
                        this.isEnabled && this.isEnhanced() && this.onResizeDebounced(e);
                    });
            }
            mounted() {
                this.setupEvents(), this.anim.trigger(`aap-mounted--${this.aap.id}`, this);
            }
            setupEvents() {
                this.anim.once("enhanced-destroy", this.destroy);
            }
            introduceTimeline() {
                (this.aap.style.opacity = "1"), this.aap.classList.remove("inactive"), this.introduce.progress(0), this.introduce.play();
            }
            dismissTimeline() {
                this.dismiss.progress(0), this.dismiss.play();
            }
            _setupScrollGroup() {
                (this.resetKeyframe = this.aapController.scrollGroup.addEvent(this.aap, {
                    start: "a0t - 100vh",
                    end: "a0b",
                    event: `${this.aap.id} - reset`,
                    onExit: () => {
                        (this.inRange = !1), (this.isAnimating = !1), this.introduce.pause(), this.dismiss.pause(), this.introduce.progress(0), this.dismiss.progress(1);
                    },
                    anchors: [this.aap.parentNode],
                })),
                    (this.keyFrame = this.aapController.scrollGroup.addEvent(this.aap, {
                        ...this.keyframeOptions,
                        event: `${this.aap.id} - animate`,
                        onEnter: () => {
                            (this.inRange = !0), this.isAnimating || ((this.isAnimating = !0), this.introduceTimeline());
                        },
                        onExit: () => {
                            (this.inRange = !1), this.isAnimating || ((this.isAnimating = !0), this.dismissTimeline());
                        },
                    }));
            }
            destroy() {
                this.aap.classList.remove("inactive"), (this.aap.style.opacity = "");
                const e = this.introduce && this.introduce.isEnabled ? this.introduce.remove() : Promise.resolve(),
                    t = this.dismiss && this.dismiss.isEnabled ? this.dismiss.remove() : Promise.resolve(),
                    i = this.keyFrame && this.keyFrame.isEnabled ? this.keyFrame.remove() : Promise.resolve(),
                    s = this.resetKeyframe && this.resetKeyframe.isEnabled ? this.resetKeyframe.remove() : Promise.resolve();
                return Promise.all([e, t, i, s]);
            }
            onResizeDebounced(e) {
                if ("S" !== e.breakpoint && "S" !== e.previousBreakpoint)
                    this.inRange &&
                        requestAnimationFrame(() => {
                            this.dismiss.progress(0), this.dismiss.pause(), this.introduce.progress(1);
                        });
                else {
                    if ("textDriven" !== this.type)
                        return void (
                            this.inRange &&
                            requestAnimationFrame(() => {
                                this.dismiss.progress(0), this.dismiss.pause(), this.introduce.progress(1);
                            })
                        );
                    new Promise((e, t) => {
                        (0, r.default)(() => {
                            this.aap.classList.remove("inactive"),
                                this._getBounds(),
                                (0, n.default)(() => {
                                    Promise.all([this.introduce.remove(), this.dismiss.remove()]).then(() => {
                                        (this.introduce = this.anim.createTimeGroup()), (this.dismiss = this.anim.createTimeGroup()), this._setupTimeGroups(), e();
                                    });
                                }, !0);
                        }, !0);
                    }).then(() => {
                        this.inRange
                            ? requestAnimationFrame(() => {
                                  this.dismiss.progress(0), this.dismiss.pause(), this.introduce.progress(1), (this.isAnimating = !1);
                              })
                            : (this.isAnimating = !1);
                    });
                }
            }
            isEnhanced() {
                return document.documentElement.classList.contains(a.FEATURE_ENHANCED);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.AAP_EASE_FUNCTIONS = void 0),
            (t.setDefaultDismissKeyframes = function (e, t, i) {
                e.addKeyframe(t, { start: 0.25, end: 0.5, width: [`${i.width}px`, "css(--aap-min-height)"], height: [`${i.height}px`, "css(--aap-min-height)"], easeFunction: s.CUBIC_BEZIER }),
                    e.addKeyframe(t, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: s.CUBIC_BEZIER });
            }),
            (t.setDefaultIntroduceKeyframes = function (e, t, i) {
                e.addKeyframe(t, { start: 0, end: 0.8, y: ["100h + css(--aap-margin)", 0], easeFunction: s.SPRING }),
                    e.addKeyframe(t, { start: 0.1, end: 0.5, "--aap-hint-opacity": [0, 1], "--aap-hint-scale": [0, 1.75], easeFunction: s.SPRING_ALT }),
                    e.addKeyframe(t, { start: 0.5, end: 0.8, "--aap-hint-scale": [1.75, 0], easeFunction: s.CUBIC_BEZIER }),
                    i && e.addKeyframe(i, { start: 0, end: 0.8, scale: [0.01, 1], easeFunction: s.SPRING });
            });
        const s = (t.AAP_EASE_FUNCTIONS = { SPRING: "spring(100, 1, 15, 0)", SPRING_ALT: "spring(100, 1, 20, 0)", CUBIC_BEZIER: "cubic-bezier(0.8, 0, 0.4, 1)" });
    },
    function (e, t, i) {
        "use strict";
        var s = i(34),
            n = i(60),
            r = i(29),
            a = i(19),
            o = {},
            l = /(\([^\)]+\))/gi,
            h = /([^ ,;\(]+(\([^\)]+\))?)/gi;
        e.exports = function (e, t) {
            var i;
            return (
                (t += ""),
                !!(e = s(e)) &&
                    (n(e, t)
                        ? t
                        : ((i = a[e].css),
                          "" !==
                              (t = (t = t.replace(h, function (t) {
                                  var s, a, h, d;
                                  if ("#" === t[0] || !isNaN(t[0])) return t;
                                  if (((a = t.replace(l, "")), (h = i + ":" + a) in o)) return !1 === o[h] ? "" : t.replace(a, o[h]);
                                  for (
                                      s = r.css.map(function (e) {
                                          return e + t;
                                      }),
                                          s = [t].concat(s),
                                          d = 0;
                                      d < s.length;
                                      d++
                                  )
                                      if (n(e, s[d])) return 0 !== d && r.reduce(d - 1), (o[h] = s[d].replace(l, "")), s[d];
                                  return (o[h] = !1), "";
                              })).trim()) && t))
            );
        };
    },
    function (e, t, i) {
        "use strict";
        var s = ["-webkit-", "-moz-", "-ms-"],
            n = ["Webkit", "Moz", "ms"],
            r = ["webkit", "moz", "ms"],
            a = function () {
                this.initialize();
            },
            o = a.prototype;
        (o.initialize = function () {
            (this.reduced = !1), (this.css = s), (this.dom = n), (this.evt = r);
        }),
            (o.reduce = function (e) {
                this.reduced || ((this.reduced = !0), (this.css = [this.css[e]]), (this.dom = [this.dom[e]]), (this.evt = [this.evt[e]]));
            }),
            (e.exports = new a());
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SELECTOR_COMPONENT_CONTAINER = t.FEATURE_INLINE_MEDIA = t.FALLBACK_CLASSNAME = t.EVT_UNLOAD = t.EVT_TIMEOUT = void 0);
        (t.FEATURE_INLINE_MEDIA = "inline-media-component"),
            (t.SELECTOR_COMPONENT_CONTAINER = ".inline-media-component-container"),
            (t.FALLBACK_CLASSNAME = "fallback"),
            (t.EVT_TIMEOUT = "inline-media-timeout"),
            (t.EVT_UNLOAD = "inline-media-unload");
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            lerp: function (e, t, i) {
                return t + (i - t) * e;
            },
            map: function (e, t, i, s, n) {
                return s + ((n - s) * (e - t)) / (i - t);
            },
            mapClamp: function (e, t, i, s, n) {
                var r = s + ((n - s) * (e - t)) / (i - t);
                return Math.max(s, Math.min(n, r));
            },
            norm: function (e, t, i) {
                return (e - t) / (i - t);
            },
            clamp: function (e, t, i) {
                return Math.max(t, Math.min(i, e));
            },
            randFloat: function (e, t) {
                return Math.random() * (t - e) + e;
            },
            randInt: function (e, t) {
                return Math.floor(Math.random() * (t - e) + e);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize",
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(114),
            n = function () {
                this.focusableSelectors = s.selectors;
            },
            r = n.prototype;
        (r.isFocusableElement = function (e, t, i) {
            return !(t && !this._isDisplayed(e)) && (s.nodeName[e.nodeName] ? !e.disabled : !e.contentEditable || ((i = i || parseFloat(e.getAttribute("tabindex"))), !isNaN(i)));
        }),
            (r.isTabbableElement = function (e, t) {
                if (t && !this._isDisplayed(e)) return !1;
                var i = e.getAttribute("tabindex");
                return (i = parseFloat(i)), isNaN(i) ? this.isFocusableElement(e, t, i) : i >= 0;
            }),
            (r._isDisplayed = function (e) {
                var t = e.getBoundingClientRect();
                return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility;
            }),
            (r.getTabbableElements = function (e, t) {
                for (var i = e.querySelectorAll(this.focusableSelectors), s = i.length, n = [], r = 0; r < s; r++) this.isTabbableElement(i[r], t) && n.push(i[r]);
                return n;
            }),
            (r.getFocusableElements = function (e, t) {
                for (var i = e.querySelectorAll(this.focusableSelectors), s = i.length, n = [], r = 0; r < s; r++) this.isFocusableElement(i[r], t) && n.push(i[r]);
                return n;
            }),
            (e.exports = new n());
    },
    function (e, t, i) {
        "use strict";
        var s = i(19),
            n = i(35),
            r = i(58),
            a = i(59),
            o = i(29),
            l = function (e, t) {
                var i = r(e),
                    n = !1 !== t && r(t);
                return (s[e] = s[t] = s[i] = s[n] = { dom: t, css: n }), t;
            };
        e.exports = function (e) {
            var t, i, r, h;
            if ((e += "") in s) return s[e].dom;
            for (r = n(), i = (e = a(e)).charAt(0).toUpperCase() + e.substring(1), t = "filter" === e ? ["WebkitFilter", "filter"] : (e + " " + o.dom.join(i + " ") + i).split(" "), h = 0; h < t.length; h++)
                if (void 0 !== r.style[t[h]]) return 0 !== h && o.reduce(h - 1), l(e, t[h]);
            return l(e, !1);
        };
    },
    function (e, t, i) {
        "use strict";
        var s;
        (e.exports = function () {
            return s ? ((s.style.cssText = ""), s.removeAttribute("style")) : (s = document.createElement("_")), s;
        }),
            (e.exports.resetElement = function () {
                s = null;
            });
    },
    function (e, t, i) {
        "use strict";
        var s = function () {
            var e,
                t = "";
            for (e = 0; e < arguments.length; e++) e > 0 && (t += ","), (t += arguments[e]);
            return t;
        };
        e.exports = function (e, t) {
            t = t || s;
            var i = function () {
                var s = arguments,
                    n = t.apply(this, s);
                return n in i.cache || (i.cache[n] = e.apply(this, s)), i.cache[n];
            };
            return (i.cache = {}), i;
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = { SharedInstance: i(64) };
    },
    function (e, t, i) {
        "use strict";
        e.exports = { majorVersionNumber: "3.x" };
    },
    function (e, t) {
        e.exports = require("@marcom/ac-analytics");
    },
    function (e, t, i) {
        "use strict";
        const s = i(71),
            n = i(10),
            r = i(51),
            a = i(75),
            o = i(103),
            l = i(76),
            h = i(175),
            d = i(176),
            c = i(177),
            u = {};
        "undefined" != typeof window && ((u.update = i(9)), (u.cancelUpdate = i(78)), (u.external = i(77)), (u.draw = i(1)));
        let m = null;
        class p extends s {
            constructor() {
                if ((super(), m)) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
                (m = this),
                    (this.groups = []),
                    (this.scrollSystems = []),
                    (this.timeSystems = []),
                    (this.tweenGroup = null),
                    (this._forceUpdateRAFId = -1),
                    (this.initialized = !1),
                    (this.model = n),
                    (this.plugins = { keyframe: [], parser: [] }),
                    (this.version = c.version),
                    (this._resolveReady = () => {}),
                    (this.ready = new Promise((e) => (this._resolveReady = e))),
                    (this.onScroll = this.onScroll.bind(this)),
                    (this.onResizedDebounced = this.onResizedDebounced.bind(this)),
                    (this.onResizeImmediate = this.onResizeImmediate.bind(this));
            }
            initialize() {
                return (
                    this.initialized ||
                        "undefined" == typeof window ||
                        ((this.initialized = !0),
                        (this.timeSystems = []),
                        (this.scrollSystems = []),
                        (this.groups = []),
                        this.setupEvents(),
                        this.initializeResizeFilter(),
                        this.initializeModel(),
                        this.createDOMGroups(),
                        this.createDOMKeyframes(),
                        (this.tweenGroup = new d(null, this)),
                        this.groups.unshift(this.tweenGroup),
                        this._resolveReady()),
                    this.ready
                );
            }
            use(e, t) {
                e.install(this, t);
            }
            remove() {
                return this.initialized
                    ? Promise.all(this.groups.map((e) => e.remove())).then(() => {
                          (this.groups = null),
                              (this.scrollSystems = null),
                              (this.timeSystems = null),
                              window.clearTimeout(n.RESIZE_TIMEOUT),
                              window.removeEventListener("scroll", this.onScroll),
                              window.removeEventListener("resize", this.onResizeImmediate),
                              (this._events = {}),
                              (this.initialized = !1),
                              (this.ready = new Promise((e) => (this._resolveReady = e)));
                      })
                    : ((this.ready = new Promise((e) => (this._resolveReady = e))), Promise.resolve());
            }
            destroy() {
                return this.remove();
            }
            createTimeGroup(e, t) {
                e instanceof HTMLElement || (e = (t = e || {}).el);
                let i = new h(e, this);
                return t && t.name && (i.name = t.name), this.groups.push(i), this.timeSystems.push(i), this.trigger(n.EVENTS.ON_GROUP_CREATED, i), i;
            }
            createScrollGroup(e, t) {
                if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
                let i = new l(e, this);
                return (
                    (t = t || {}).name && (i.name = t.name),
                    t.getPosition && t.getMaxPosition && ((i.getPosition = t.getPosition), (i.createViewableRange = () => ({ a: 0, d: t.getMaxPosition() }))),
                    (i.getPosition = t.getPosition || i.getPosition),
                    (i.getPosition = t.getPosition || i.getPosition),
                    this.groups.push(i),
                    this.scrollSystems.push(i),
                    this.trigger(n.EVENTS.ON_GROUP_CREATED, i),
                    i
                );
            }
            removeGroup(e) {
                return e.destroyed || e.anim !== this
                    ? Promise.resolve()
                    : Promise.all(e.keyframeControllers.map((t) => e.removeKeyframeController(t))).then(() => {
                          let t = this.groups.indexOf(e);
                          -1 !== t && this.groups.splice(t, 1),
                              (t = this.scrollSystems.indexOf(e)),
                              -1 !== t && this.scrollSystems.splice(t, 1),
                              (t = this.timeSystems.indexOf(e)),
                              -1 !== t && this.timeSystems.splice(t, 1),
                              e.destroyed || e.destroy();
                      });
            }
            createDOMGroups() {
                document.body.setAttribute("data-anim-scroll-group", "body"),
                    document.querySelectorAll("[data-anim-scroll-group]").forEach((e) => this.createScrollGroup(e)),
                    document.querySelectorAll("[data-anim-time-group]").forEach((e) => this.createTimeGroup(e)),
                    this.trigger(n.EVENTS.ON_DOM_GROUPS_CREATED, this.groups);
            }
            createDOMKeyframes() {
                let e = [];
                ["data-anim-keyframe", r.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach(function (t) {
                    for (let i = 0; i < 12; i++) e.push(t + (0 === i ? "" : "-" + (i - 1)));
                });
                for (let t = 0; t < e.length; t++) {
                    let i = e[t],
                        s = document.querySelectorAll("[" + i + "]");
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e],
                            n = JSON.parse(t.getAttribute(i));
                        this.addKeyframe(t, n);
                    }
                }
                u.update(() => {
                    null !== this.groups &&
                        (this.groups.forEach((e) => e.onKeyframesDirty({ silent: !0 })),
                        this.groups.forEach((e) => e.trigger(n.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)),
                        this.trigger(n.EVENTS.ON_DOM_KEYFRAMES_CREATED, this),
                        this.groups.forEach((e) => {
                            e.forceUpdate({ waitForNextUpdate: !1, silent: !0 }), e.reconcile();
                        }),
                        this.onScroll());
                }, !0);
            }
            initializeResizeFilter() {
                if (n.cssDimensionsTracker) return;
                const e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
                e.setAttribute("cssDimensionsTracker", "true"),
                    (e.style.position = "fixed"),
                    (e.style.top = "0"),
                    (e.style.width = "100%"),
                    (e.style.height = "100vh"),
                    (e.style.pointerEvents = "none"),
                    (e.style.visibility = "hidden"),
                    (e.style.zIndex = "-1"),
                    document.documentElement.appendChild(e),
                    (n.cssDimensionsTracker = e);
            }
            initializeModel() {
                (n.pageMetrics.windowHeight = n.cssDimensionsTracker.clientHeight),
                    (n.pageMetrics.windowWidth = n.cssDimensionsTracker.clientWidth),
                    (n.pageMetrics.scrollY = window.scrollY || window.pageYOffset),
                    (n.pageMetrics.scrollX = window.scrollX || window.pageXOffset),
                    (n.pageMetrics.breakpoint = n.getBreakpoint());
                let e = document.documentElement.getBoundingClientRect();
                (n.pageMetrics.documentOffsetX = e.left + n.pageMetrics.scrollX), (n.pageMetrics.documentOffsetY = e.top + n.pageMetrics.scrollY);
            }
            setupEvents() {
                window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate);
            }
            onScroll() {
                (n.pageMetrics.scrollY = window.scrollY || window.pageYOffset), (n.pageMetrics.scrollX = window.scrollX || window.pageXOffset);
                for (let e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e].updateTimeline();
                this.trigger(n.PageEvents.ON_SCROLL, n.pageMetrics);
            }
            onResizeImmediate() {
                let e = n.cssDimensionsTracker.clientWidth,
                    t = n.cssDimensionsTracker.clientHeight;
                if (e === n.pageMetrics.windowWidth && t === n.pageMetrics.windowHeight) return;
                (n.pageMetrics.windowWidth = e), (n.pageMetrics.windowHeight = t), (n.pageMetrics.scrollY = window.scrollY || window.pageYOffset), (n.pageMetrics.scrollX = window.scrollX || window.pageXOffset);
                let i = document.documentElement.getBoundingClientRect();
                (n.pageMetrics.documentOffsetX = i.left + n.pageMetrics.scrollX),
                    (n.pageMetrics.documentOffsetY = i.top + n.pageMetrics.scrollY),
                    window.clearTimeout(n.RESIZE_TIMEOUT),
                    (n.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250)),
                    this.trigger(n.PageEvents.ON_RESIZE_IMMEDIATE, n.pageMetrics);
            }
            onResizedDebounced() {
                u.update(() => {
                    let e = n.pageMetrics.breakpoint,
                        t = n.getBreakpoint();
                    if (t !== e) {
                        (n.pageMetrics.previousBreakpoint = e), (n.pageMetrics.breakpoint = t);
                        for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e]._onBreakpointChange();
                        this.trigger(n.PageEvents.ON_BREAKPOINT_CHANGE, n.pageMetrics);
                    }
                    for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e].forceUpdate({ waitForNextUpdate: !1 });
                    this.trigger(n.PageEvents.ON_RESIZE_DEBOUNCED, n.pageMetrics);
                }, !0);
            }
            forceUpdate() {
                let { waitForNextUpdate: e = !0, silent: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                -1 !== this._forceUpdateRAFId && u.cancelUpdate(this._forceUpdateRAFId);
                let i = () => {
                    for (let e = 0, i = this.groups.length; e < i; e++) {
                        this.groups[e].forceUpdate({ waitForNextUpdate: !1, silent: t });
                    }
                    return -1;
                };
                this._forceUpdateRAFId = e ? u.update(i, !0) : i();
            }
            addKeyframe(e, t) {
                let i = this.getGroupForTarget(e);
                return (i = i || this.getGroupForTarget(document.body)), i.addKeyframe(e, t);
            }
            addEvent(e, t) {
                let i = this.getGroupForTarget(e);
                return (i = i || this.getGroupForTarget(document.body)), i.addEvent(e, t);
            }
            getTimeGroupForTarget(e) {
                return this._getGroupForTarget(e, (e) => e instanceof h);
            }
            getScrollGroupForTarget(e) {
                return this._getGroupForTarget(e, (e) => !(e instanceof h));
            }
            getGroupForTarget(e) {
                return this._getGroupForTarget(e, () => !0);
            }
            getGroupByName(e) {
                return this.groups.find((t) => t.name === e);
            }
            _getGroupForTarget(e, t) {
                if (e._animInfo && e._animInfo.group && t(e._animInfo.group)) return e._animInfo.group;
                let i = e;
                for (; i; ) {
                    if (i._animInfo && i._animInfo.isGroup && t(i._animInfo.group)) return i._animInfo.group;
                    i = i.parentElement;
                }
            }
            getControllerForTarget(e) {
                return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null;
            }
            addTween(e, t) {
                return this.tweenGroup.addKeyframe(e, t);
            }
        }
        (e.exports = "undefined" == typeof window ? new p() : window.AC.SharedInstance.share("AnimSystem", c.major, p)), (e.exports.default = e.exports);
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e, t, i, n) {
                const r = i[0].toUpperCase() + i.slice(1),
                    a = e[s + r];
                if (void 0 !== a)
                    switch (typeof n) {
                        case "boolean":
                            return "false" !== a;
                        case "object":
                            return JSON.parse(a);
                        case "number":
                            return Number(a);
                        default:
                            return a;
                    }
                else if (void 0 !== t[i]) {
                    const e = t[i];
                    return "boolean" != typeof n || ("false" !== e && "true" !== e) ? e : "false" !== e;
                }
                return n;
            });
        const s = "inlineMedia";
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = { EMPTY: "loading-empty", LOADING: "loading", LOADED: "loaded", ERROR: "loading-error", DISABLED: "loading-disabled" };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = { IDLE: "idle", PLAYING: "playing", PAUSED: "paused", ENDED: "ended" };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "createCustomAnimScrollGroup", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(t, "getFriendlyName", {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            }),
            Object.defineProperty(t, "getModalComponentRef", {
                enumerable: !0,
                get: function () {
                    return a.default;
                },
            });
        var n = s(i(233)),
            r = s(i(234)),
            a = s(i(235));
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "Close", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(t, "CloseBundle", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            }),
            Object.defineProperty(t, "CloseButton", {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            }),
            Object.defineProperty(t, "Focus", {
                enumerable: !0,
                get: function () {
                    return a.default;
                },
            }),
            Object.defineProperty(t, "FullBleed", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
            Object.defineProperty(t, "FullBleedBundle", {
                enumerable: !0,
                get: function () {
                    return m.default;
                },
            }),
            Object.defineProperty(t, "Keyboard", {
                enumerable: !0,
                get: function () {
                    return l.default;
                },
            }),
            Object.defineProperty(t, "Open", {
                enumerable: !0,
                get: function () {
                    return h.default;
                },
            }),
            Object.defineProperty(t, "PageOverlay", {
                enumerable: !0,
                get: function () {
                    return d.default;
                },
            }),
            Object.defineProperty(t, "PageOverlayBundle", {
                enumerable: !0,
                get: function () {
                    return p.default;
                },
            }),
            Object.defineProperty(t, "ScrollPosition", {
                enumerable: !0,
                get: function () {
                    return c.default;
                },
            });
        var n = s(i(243)),
            r = s(i(244)),
            a = s(i(245)),
            o = s(i(246)),
            l = s(i(247)),
            h = s(i(252)),
            d = s(i(253)),
            c = s(i(254)),
            u = s(i(255)),
            m = s(i(256)),
            p = s(i(257));
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupViewportTracker = t.removeFeatureDetectClass = t.isSmallOnDesktop = t.detectTextZoom = t.checkEnhancedFeatures = t.addFeatureDetectClass = void 0);
        var n = s(i(1)),
            r = s(i(20)),
            a = (function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var i = l(t);
                if (i && i.has(e)) return i.get(e);
                var s = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        a && (a.get || a.set) ? Object.defineProperty(s, r, a) : (s[r] = e[r]);
                    }
                return (s.default = e), i && i.set(e, s), s;
            })(i(66)),
            o = i(49);
        function l(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
                i = new WeakMap();
            return (l = function (e) {
                return e ? i : t;
            })(e);
        }
        t.addFeatureDetectClass = (e) =>
            new Promise((t, i) => {
                (0, n.default)(() => {
                    document.documentElement.classList.add(e), document.documentElement.classList.remove(`no-${e}`), t();
                });
            });
        t.removeFeatureDetectClass = (e) =>
            new Promise((t, i) => {
                (0, n.default)(() => {
                    document.documentElement.classList.remove(e), document.documentElement.classList.add(`no-${e}`), t();
                });
            });
        t.setupViewportTracker = (e) => {
            const t = { ...(!(e = { viewports: {}, defaultViewports: {}, onVpChanged: () => {}, overwriteDefaults: !1, excludeMatches: !1, ...e }).overwriteDefaults && !e.excludeMatches && e.defaultViewports), ...e.viewports };
            let i = null;
            const s = new Promise((e, t) => {
                    i = e;
                }),
                n = (t) => {
                    (!!t && t.isMatch) || (i(), t && t.destroy()), e.onVpChanged && e.onVpChanged();
                },
                r = new a.default(t, { excludeMatches: e.excludeMatches });
            return r.on(a.EVT_VIEWPORT_GROUP_CHANGED, n), n(r), s;
        };
        const h = () => !(0, r.default)() && window.matchMedia("(max-width: 734px)").matches;
        t.isSmallOnDesktop = h;
        const d = () => parseFloat(window.getComputedStyle(document.documentElement)["font-size"]) > 17;
        t.detectTextZoom = d;
        t.checkEnhancedFeatures = () => {
            const e = new a.default(o.ENHANCED_VIEWPORTS),
                t = { "text-zoom": d(), "small-desktop": h(), "invalid-viewport": !e.isMatch };
            for (const e in t) if (!0 === t[e]) return { enhanced: !1, feature: e };
            return { enhanced: !0 };
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(37).SharedInstance,
            n = i(38).majorVersionNumber,
            r = i(48);
        e.exports = s.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", n, r);
    },
    function (e, t, i) {
        "use strict";
        var s,
            n = i(6);
        function r(e) {
            (e = e || {}), this._reset(), this.updatePhases(), (this.eventEmitter = new n()), (this._willRun = !1), (this._totalSubscribeCount = -1);
            var t = null,
                i = null;
            "undefined" != typeof window ? ((t = window.requestAnimationFrame), (i = window.cancelAnimationFrame)) : (t = i = function () {}),
                (this._requestAnimationFrame = t),
                (this._cancelAnimationFrame = i),
                (this._boundOnAnimationFrame = this._onAnimationFrame.bind(this)),
                (this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this));
        }
        ((s = r.prototype).frameRequestedPhase = "requested"),
            (s.startPhase = "start"),
            (s.runPhases = ["update", "external", "draw"]),
            (s.endPhase = "end"),
            (s.disabledPhase = "disabled"),
            (s.beforePhaseEventPrefix = "before:"),
            (s.afterPhaseEventPrefix = "after:"),
            (s.subscribe = function (e, t) {
                return (
                    this._totalSubscribeCount++,
                    this._nextFrameSubscribers[e.id] ||
                        (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id),
                        (this._nextFrameSubscribers[e.id] = e),
                        this._nextFrameSubscriberArrayLength++,
                        this._nextFrameSubscriberCount++,
                        this._run()),
                    this._totalSubscribeCount
                );
            }),
            (s.subscribeImmediate = function (e, t) {
                return (
                    this._totalSubscribeCount++,
                    this._subscribers[e.id] ||
                        (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), (this._subscribers[e.id] = e), this._subscriberArrayLength++, this._subscriberCount++),
                    this._totalSubscribeCount
                );
            }),
            (s.unsubscribe = function (e) {
                return !!this._nextFrameSubscribers[e.id] && ((this._nextFrameSubscribers[e.id] = null), this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0);
            }),
            (s.getSubscribeID = function () {
                return (this._totalSubscribeCount += 1);
            }),
            (s.destroy = function () {
                var e = this._cancel();
                return (
                    this.eventEmitter.destroy(),
                    (this.eventEmitter = null),
                    (this.phases = null),
                    (this._subscribers = null),
                    (this._subscribersOrder = null),
                    (this._nextFrameSubscribers = null),
                    (this._nextFrameSubscribersOrder = null),
                    (this._rafData = null),
                    (this._boundOnAnimationFrame = null),
                    (this._onExternalAnimationFrame = null),
                    e
                );
            }),
            (s.useExternalAnimationFrame = function (e) {
                if ("boolean" == typeof e) {
                    var t = this._isUsingExternalAnimationFrame;
                    return (
                        e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), (this._animationFrame = null)),
                        !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
                        (this._isUsingExternalAnimationFrame = e),
                        e ? this._boundOnExternalAnimationFrame : t || !1
                    );
                }
            }),
            (s.updatePhases = function () {
                this.phases || (this.phases = []),
                    (this.phases.length = 0),
                    this.phases.push(this.frameRequestedPhase),
                    this.phases.push(this.startPhase),
                    Array.prototype.push.apply(this.phases, this.runPhases),
                    this.phases.push(this.endPhase),
                    (this._runPhasesLength = this.runPhases.length),
                    (this._phasesLength = this.phases.length);
            }),
            (s._run = function () {
                if (!this._willRun)
                    return (
                        (this._willRun = !0),
                        0 === this.lastFrameTime && (this.lastFrameTime = performance.now()),
                        (this._animationFrameActive = !0),
                        this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
                        this.phase === this.disabledPhase && ((this.phaseIndex = 0), (this.phase = this.phases[this.phaseIndex])),
                        !0
                    );
            }),
            (s._cancel = function () {
                var e = !1;
                return (
                    this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), (this._animationFrame = null)), (this._animationFrameActive = !1), (this._willRun = !1), (e = !0)),
                    this._isRunning || this._reset(),
                    e
                );
            }),
            (s._onAnimationFrame = function (e) {
                for (
                    this._subscribers = this._nextFrameSubscribers,
                        this._subscribersOrder = this._nextFrameSubscribersOrder,
                        this._subscriberArrayLength = this._nextFrameSubscriberArrayLength,
                        this._subscriberCount = this._nextFrameSubscriberCount,
                        this._nextFrameSubscribers = {},
                        this._nextFrameSubscribersOrder = [],
                        this._nextFrameSubscriberArrayLength = 0,
                        this._nextFrameSubscriberCount = 0,
                        this.phaseIndex = 0,
                        this.phase = this.phases[this.phaseIndex],
                        this._isRunning = !0,
                        this._willRun = !1,
                        this._didRequestNextRAF = !1,
                        this._rafData.delta = e - this.lastFrameTime,
                        this.lastFrameTime = e,
                        this._rafData.fps = 0,
                        this._rafData.delta >= 1e3 && (this._rafData.delta = 0),
                        0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta),
                        this._rafData.time = e,
                        this._rafData.naturalFps = this._rafData.fps,
                        this._rafData.timeNow = Date.now(),
                        this.phaseIndex++,
                        this.phase = this.phases[this.phaseIndex],
                        this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
                        this._currentSubscriberIndex = 0;
                    this._currentSubscriberIndex < this._subscriberArrayLength;
                    this._currentSubscriberIndex++
                )
                    null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] &&
                        !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy &&
                        this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
                for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                    for (
                        this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0;
                        this._currentSubscriberIndex < this._subscriberArrayLength;
                        this._currentSubscriberIndex++
                    )
                        null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] &&
                            !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy &&
                            this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                    this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase);
                }
                for (
                    this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0;
                    this._currentSubscriberIndex < this._subscriberArrayLength;
                    this._currentSubscriberIndex++
                )
                    null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] &&
                        !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy &&
                        this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? ((this.phaseIndex = 0), (this.phaseIndex = this.phases[this.phaseIndex])) : this._reset();
            }),
            (s._onExternalAnimationFrame = function (e) {
                this._isUsingExternalAnimationFrame && this._onAnimationFrame(e);
            }),
            (s._reset = function () {
                this._rafData || (this._rafData = {}),
                    (this._rafData.time = 0),
                    (this._rafData.delta = 0),
                    (this._rafData.fps = 0),
                    (this._rafData.naturalFps = 0),
                    (this._rafData.timeNow = 0),
                    (this._subscribers = {}),
                    (this._subscribersOrder = []),
                    (this._currentSubscriberIndex = -1),
                    (this._subscriberArrayLength = 0),
                    (this._subscriberCount = 0),
                    (this._nextFrameSubscribers = {}),
                    (this._nextFrameSubscribersOrder = []),
                    (this._nextFrameSubscriberArrayLength = 0),
                    (this._nextFrameSubscriberCount = 0),
                    (this._didEmitFrameData = !1),
                    (this._animationFrame = null),
                    (this._animationFrameActive = !1),
                    (this._isRunning = !1),
                    (this._shouldReset = !1),
                    (this.lastFrameTime = 0),
                    (this._runPhaseIndex = -1),
                    (this.phaseIndex = -1),
                    (this.phase = this.disabledPhase);
            }),
            (e.exports = r);
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ENHANCED_VIEWPORTS = void 0);
        t.ENHANCED_VIEWPORTS = {
            S: { alias: "small", width: [315, 734], height: [480, 850] },
            M: { alias: "medium", width: [735, 1068], height: [550, 1500] },
            L: { alias: "large", width: [1069, 1440], height: [550, 2880] },
            X: { alias: "xlarge", width: [1441, 5120], height: [550, 2880] },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = t.CLASS_HIDE_LOCALNAV = void 0);
        var n = s(i(3));
        const r = (t.CLASS_HIDE_LOCALNAV = "hide-localnav"),
            a = "150px";
        class o extends n.default {
            constructor(e) {
                super(e), (this._els = { htmlEl: document.documentElement, el: e.el, lockup: e.el.querySelector(".welcome__lockup") }), (this.enhancedScrollGroup = this.anim.createScrollGroup(this.el));
            }
            mounted() {
                this._setupLocalnavAnimation();
            }
            _setupLocalnavAnimation() {
                this._els.lockup
                    ? this.enhancedScrollGroup.addKeyframe(this._els.htmlEl, { start: "t - 150vh", end: `a0t - ${a}`, cssClass: r, anchors: [this._els.lockup], toggle: !0 })
                    : this.enhancedScrollGroup.addKeyframe(this._els.htmlEl, { start: "t - 150vh", end: `a0b - ${a}`, cssClass: r, anchors: [this._els.el], toggle: !0 });
            }
            static IS_SUPPORTED() {
                return !0;
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        const s = i(10),
            n = i(22),
            r = i(72),
            a = i(31),
            o = i(73),
            l = i(100),
            h = i(157),
            d = i(74),
            c = i(158),
            u = i(99),
            m = i(101),
            { cssAttributes: p, suffixFreeAttributes: f, domAttributes: _ } = i(102);
        class g {
            constructor(e, t) {
                (this.controller = e),
                    (this.anchors = []),
                    (this.jsonProps = t),
                    (this.ease = e.group.defaultEase),
                    (this.easeFunction = o.linear),
                    (this.start = 0),
                    (this.end = 0),
                    (this.localT = 0),
                    (this.curvedT = 0),
                    (this.id = 0),
                    (this.event = ""),
                    (this.needsEventDispatch = !1),
                    (this.snapAtCreation = !1),
                    (this.isEnabled = !1),
                    (this.animValues = {}),
                    (this.breakpointMask = s.KeyframeDefaults.breakpointMask),
                    (this.disabledWhen = []),
                    (this.keyframeType = s.KeyframeTypes.Interpolation),
                    (this.hold = !1),
                    (this.preserveState = !1),
                    (this.markedForRemoval = !1);
                let i = !1;
                Object.defineProperty(this, "hidden", {
                    get: () => i,
                    set(t) {
                        (i = t), (e.group.keyframesDirty = !0);
                    },
                }),
                    (this.uuid = m()),
                    (this.destroyed = !1);
            }
            destroy() {
                (this.destroyed = !0), (this.controller = null), (this.disabledWhen = null), (this.anchors = null), (this.jsonProps = null), (this.easeFunction = null), (this.animValues = null);
            }
            remove() {
                return this.controller && this.controller.removeKeyframe(this);
            }
            parseOptions(e) {
                (this.jsonProps = e),
                    e.relativeTo && console.error(`KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':"${e.relativeTo}"`),
                    void 0 === e.end && void 0 === e.duration && (e.end = e.start),
                    "" !== e.anchors && e.anchors
                        ? ((this.anchors = []),
                          (e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors]),
                          e.anchors.forEach((t, i) => {
                              let s = c(t, this.controller.group.element);
                              if (!s) {
                                  let s = "";
                                  return (
                                      "string" == typeof t && (s = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."),
                                      void console.warn(
                                          "Keyframe on",
                                          this.controller.element,
                                          ` failed to find anchor at index ${i} in array`,
                                          e.anchors,
                                          `. Anchors must be JS Object references, Elements references, or valid query selector strings. ${s}`
                                      )
                                  );
                              }
                              this.anchors.push(s), this.controller.group.metrics.add(s);
                          }))
                        : ((this.anchors = []), (e.anchors = [])),
                    e.ease ? (this.ease = parseFloat(e.ease)) : (e.ease = this.ease),
                    e.hasOwnProperty("snapAtCreation") ? (this.snapAtCreation = e.snapAtCreation) : (e.snapAtCreation = this.snapAtCreation),
                    e.easeFunction || (e.easeFunction = s.KeyframeDefaults.easeFunctionString),
                    e.breakpointMask ? (this.breakpointMask = e.breakpointMask) : (e.breakpointMask = this.breakpointMask),
                    e.disabledWhen ? (this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen]) : (e.disabledWhen = this.disabledWhen),
                    e.hasOwnProperty("hold") ? (this.hold = e.hold) : (e.hold = this.hold),
                    e.hasOwnProperty("preserveState") ? (this.preserveState = e.preserveState) : (e.preserveState = s.KeyframeDefaults.preserveState),
                    (this.easeFunction = o[e.easeFunction]),
                    o.hasOwnProperty(e.easeFunction) ||
                        (e.easeFunction.includes("bezier")
                            ? (this.easeFunction = l.fromCSSString(e.easeFunction))
                            : e.easeFunction.includes("spring")
                            ? (this.easeFunction = h.fromCSSString(e.easeFunction))
                            : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
                for (let t in e) {
                    if (-1 !== s.KeyframeJSONReservedWords.indexOf(t)) continue;
                    let i = e[t];
                    if (Array.isArray(i)) {
                        if ((1 === i.length && ((i[1] = i[0]), (i[0] = null)), void 0 === this.controller.tweenProps[t] || !this.controller._ownerIsElement)) {
                            let a = 0;
                            this.controller._ownerIsElement || (a = this.controller.element[t] || 0);
                            const o = t.startsWith("--");
                            let l = i[2] || (o || f.includes(t) ? void 0 : "px"),
                                h = this.controller.group.anim.plugins.keyframe.reduce((i, s) => i || s.parseProp.call(this, e, t), null);
                            if (!h && this.controller._ownerIsElement)
                                if (o || p.includes(t)) {
                                    let i = u(t),
                                        n = e.round || ["zIndex"].includes(i);
                                    (a = parseFloat(this.controller.getTargetComputedStyle().getPropertyValue(i))),
                                        isNaN(a) && (a = 0),
                                        (h = new r(a, s.KeyframeDefaults.epsilon, this.snapAtCreation, t, n, l)),
                                        this.controller.cssAttributes.push(h);
                                } else _.includes(t) && ((h = new n(a, s.KeyframeDefaults.epsilon, this.snapAtCreation, t, e.round, l)), this.controller.domAttributes.push(h));
                            h || (h = new n(a, s.KeyframeDefaults.epsilon, this.snapAtCreation, t, e.round, l)), (this.controller.tweenProps[t] = h);
                        }
                        (this.animValues[t] = this.controller.group.expressionParser.parseArray(this, i)), this.controller.tweenProps[t].calculateEpsilon(e, this.animValues[t]);
                    }
                }
                (this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation), e.event && (this.event = e.event);
            }
            overwriteProps(e) {
                this.animValues = {};
                let t = Object.assign({}, this.jsonProps, e);
                this.controller.updateKeyframe(this, t);
            }
            updateLocalProgress(e) {
                if (this.start === this.end || e < this.start || e > this.end) return (this.localT = e < this.start ? (this.hold ? this.localT : 0) : e > this.end ? 1 : 0), void (this.curvedT = this.easeFunction(this.localT));
                const t = (e - this.start) / (this.end - this.start),
                    i = this.hold ? this.localT : 0;
                (this.localT = a.clamp(t, i, 1)), (this.curvedT = this.easeFunction(this.localT));
            }
            reconcile(e) {
                this.controller.tweenProps[e].reconcile(this.animValues[e], this.curvedT) && (this.needsEventDispatch || ((this.needsEventDispatch = !0), this.controller.keyframesRequiringDispatch.push(this)));
            }
            reset(e) {
                this.localT = e || 0;
                let t = this.ease;
                this.ease = 1;
                for (let e in this.animValues) this.reconcile(e);
                this.ease = t;
            }
            onDOMRead(e) {
                let t = this.controller.tweenProps[e].update(this.animValues[e], this.curvedT, this.ease);
                return "" === this.event || this.needsEventDispatch || (t && ((this.needsEventDispatch = !0), this.controller.keyframesRequiringDispatch.push(this))), t;
            }
            isInRange(e) {
                return e >= this.start && e <= this.end;
            }
            setEnabled(e) {
                e = e || d(Array.from(document.documentElement.classList));
                let t = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint),
                    i = !1;
                return this.disabledWhen.length > 0 && (i = this.disabledWhen.some((t) => void 0 !== e[t])), (this.isEnabled = t && !i), this.isEnabled;
            }
            evaluateConstraints() {
                (this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start)),
                    (this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end)),
                    this.evaluateInterpolationConstraints();
            }
            evaluateInterpolationConstraints() {
                for (let e in this.animValues) {
                    let t = this.jsonProps[e];
                    this.animValues[e] = this.controller.group.expressionParser.parseArray(this, t);
                }
            }
        }
        (g.DATA_ATTRIBUTE = "data-anim-tween"), (e.exports = g);
    },
    function (e, t, i) {
        "use strict";
        const s = i(6),
            n = i(191),
            r = i(193),
            a = i(194),
            o = i(195),
            l = i(196),
            h = i(197),
            d = i(198),
            c = i(81),
            u = i(84),
            m = [
                "beforeCreate",
                "created",
                "beforeMount",
                "createItems",
                "itemsCreated",
                "mounted",
                "animateToItem",
                "onItemChangeInitiated",
                "onItemChangeOccurred",
                "onItemChangeCompleted",
                "onResizeImmediate",
                "onBreakpointChange",
                "onResizeDebounced",
                "destroy",
            ];
        class p extends s {
            constructor(e) {
                var t;
                super(e),
                    (t = this),
                    (this.el = e.el),
                    (this.model = Object.assign({ options: e }, JSON.parse(JSON.stringify(n)))),
                    (this.model.Item.ConstructorFunction = n.Item.ConstructorFunction),
                    (this._items = []),
                    (this.currentIndex = 0),
                    m.forEach((e) => {
                        this[e] = function () {
                            for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                            t[`__${e}`] && t[`__${e}`].forEach((e) => e.apply(t, s));
                        };
                    });
                const i = this.destroy;
                (this.destroy = function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    i.apply(t, n), s.prototype.destroy.call(t);
                }),
                    this.on(n.Events.ITEM_CHANGE_INITIATED, this.onItemChangeInitiated),
                    this.on(n.Events.ITEM_CHANGE_OCCURRED, this.onItemChangeOccurred),
                    this.on(n.Events.ITEM_CHANGE_COMPLETED, this.onItemChangeCompleted),
                    ["beforeCreate", "created", "beforeMount", "createItems"].forEach((t) => this[t](e));
            }
        }
        (p.withMixins = function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            const s = t.findIndex((e) => "excluding" in e);
            let n = new Set();
            s >= 0 && (t[s].excluding.forEach((e) => n.add(e)), t.splice(s));
            const f = class extends p {},
                _ = f.prototype;
            let g = [r, l, o, u].filter((e) => !n.has(e)),
                E = [h, c, a, d].filter((e) => !n.has(e));
            return (
                t.unshift(...g),
                t.push(...E),
                t.forEach((e) => {
                    for (const t in e) m.includes(t) ? ((_[`__${t}`] = _[`__${t}`] || []), _[`__${t}`].push(e[t])) : (_[t] = e[t]);
                }),
                f
            );
        }),
            (e.exports = p);
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "Media", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(t, "Plugin", {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            }),
            (t.autoInit = void 0),
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = s(i(121)),
            r = s(i(11));
        t.autoInit = n.default.autoInitialize;
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeCreate() {
                this.clampedIndex = !0;
            },
            wrappedIndex(e) {
                return Math.max(0, Math.min(e, this._items.length - 1));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(12)),
            r = s(i(124)),
            a = i(30);
        class o extends r.default {
            constructor(e) {
                super(e), (this.componentEl = e.componentEl);
            }
            async _onPlayKeyframeEnter(e) {
                if (((this._inFrame = !0), !this._paused && (this._loaded || (await this.media.load(), (this._loaded = !0)), this._inFrame)))
                    try {
                        await this.media.play();
                    } catch (e) {
                        this.media.el.error || this.media.el.readyState === HTMLMediaElement.HAVE_NOTHING || (this.componentEl.classList.add(a.FALLBACK_CLASSNAME), this.destroy());
                    }
            }
            destroy() {
                this._playKeyframe &&
                    !this._playKeyframe.destroyed &&
                    (this._playKeyframe.controller.off(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.off(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit)),
                    this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart);
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        const s = i(13).PICTURE_CLASS_LOADED,
            n = i(13).PICTURE_DATA_LOADED,
            r = i(13).PICTURE_DATA_EMPTY_SOURCE;
        e.exports =
            ((window.__pictureElementInstancesLoaded = new Map()),
            void (window.__lp = function (e) {
                const t = e.target.parentElement;
                t.querySelector(`[${r}]`) ? e.stopImmediatePropagation() : (t.classList.add(`${s}`), t.setAttribute(`${n}`, ""), window.__pictureElementInstancesLoaded.set(t.id, t), (e.target.onload = null));
            }));
    },
    function (e, t, i) {
        "use strict";
        var s = i(28),
            n = i(34),
            r = i(36);
        function a(e, t) {
            return void 0 !== t ? !!s(e, t) : !!n(e);
        }
        (e.exports = r(a)), (e.exports.original = a);
    },
    function (e, t, i) {
        "use strict";
        var s = /^(webkit|moz|ms)/gi;
        e.exports = function (e) {
            return "cssfloat" === e.toLowerCase()
                ? "float"
                : (s.test(e) && (e = "-" + e),
                  e
                      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
                      .replace(/([a-z\d])([A-Z])/g, "$1-$2")
                      .toLowerCase());
        };
    },
    function (e, t, i) {
        "use strict";
        var s = /-([a-z])/g;
        e.exports = function (e) {
            return "float" === e.toLowerCase()
                ? "cssFloat"
                : ("Ms" ===
                      (e = e.replace(s, function (e, t) {
                          return t.toUpperCase();
                      })).substr(0, 2) && (e = "ms" + e.substring(2)),
                  e);
        };
    },
    function (e, t, i) {
        "use strict";
        var s,
            n,
            r = i(19),
            a = i(35),
            o = !1;
        (e.exports = function (e, t) {
            var i, l;
            if (
                ((function () {
                    var e;
                    if (!o) {
                        (o = !0), (s = "CSS" in window && "supports" in window.CSS), (n = !1), (e = a());
                        try {
                            e.style.width = "invalid";
                        } catch (e) {
                            n = !0;
                        }
                    }
                })(),
                s)
            )
                return (e = r[e].css), CSS.supports(e, t);
            if (((i = (l = a()).style[e]), n))
                try {
                    l.style[e] = t;
                } catch (e) {
                    return !1;
                }
            else l.style[e] = t;
            return l.style[e] && l.style[e] !== i;
        }),
            (e.exports.resetFlags = function () {
                o = !1;
            });
    },
    function (e, t, i) {
        "use strict";
        var s = i(5);
        e.exports = function () {
            var e = s.getWindow().matchMedia("(prefers-reduced-motion)");
            return !(!e || !e.matches);
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(63),
            n = function (e) {
                (this.phase = e),
                    (this.rafEmitter = new s()),
                    this._cachePhaseIndex(),
                    (this.requestAnimationFrame = this.requestAnimationFrame.bind(this)),
                    (this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this)),
                    (this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this)),
                    (this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this)),
                    (this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this)),
                    this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)),
                    this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart),
                    this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase),
                    this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase),
                    (this._frameCallbacks = []),
                    (this._currentFrameCallbacks = []),
                    (this._nextFrameCallbacks = []),
                    (this._phaseActive = !1),
                    (this._currentFrameID = -1),
                    (this._cancelFrameIdx = -1),
                    (this._frameCallbackLength = 0),
                    (this._currentFrameCallbacksLength = 0),
                    (this._nextFrameCallbacksLength = 0),
                    (this._frameCallbackIteration = 0);
            },
            r = n.prototype;
        (r.requestAnimationFrame = function (e, t) {
            return (
                !0 === t && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex
                    ? this._phaseActive
                        ? ((this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0)), this._frameCallbacks.push(this._currentFrameID, e), (this._frameCallbackLength += 2))
                        : ((this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1)), this._currentFrameCallbacks.push(this._currentFrameID, e), (this._currentFrameCallbacksLength += 2))
                    : ((this._currentFrameID = this.rafEmitter.run()), this._nextFrameCallbacks.push(this._currentFrameID, e), (this._nextFrameCallbacksLength += 2)),
                this._currentFrameID
            );
        }),
            (r.cancelAnimationFrame = function (e) {
                (this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e)),
                    this._cancelFrameIdx > -1
                        ? this._cancelNextAnimationFrame()
                        : ((this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e)),
                          this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : ((this._cancelFrameIdx = this._frameCallbacks.indexOf(e)), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()));
            }),
            (r._onRAFExecuted = function (e) {
                for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
                (this._frameCallbacks.length = 0), (this._frameCallbackLength = 0);
            }),
            (r._onBeforeRAFExecutorStart = function () {
                Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)),
                    (this._currentFrameCallbacksLength = this._nextFrameCallbacksLength),
                    (this._nextFrameCallbacks.length = 0),
                    (this._nextFrameCallbacksLength = 0);
            }),
            (r._onBeforeRAFExecutorPhase = function () {
                (this._phaseActive = !0),
                    Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)),
                    (this._frameCallbackLength = this._currentFrameCallbacksLength),
                    (this._currentFrameCallbacks.length = 0),
                    (this._currentFrameCallbacksLength = 0);
            }),
            (r._onAfterRAFExecutorPhase = function () {
                this._phaseActive = !1;
            }),
            (r._cachePhaseIndex = function () {
                this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase);
            }),
            (r._cancelRunningAnimationFrame = function () {
                this._frameCallbacks.splice(this._cancelFrameIdx, 2), (this._frameCallbackLength -= 2);
            }),
            (r._cancelCurrentAnimationFrame = function () {
                this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), (this._currentFrameCallbacksLength -= 2);
            }),
            (r._cancelNextAnimationFrame = function () {
                this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), (this._nextFrameCallbacksLength -= 2), 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel();
            }),
            (e.exports = n);
    },
    function (e, t, i) {
        "use strict";
        var s = i(14),
            n = function (e) {
                s.call(this, e);
            };
        ((n.prototype = Object.create(s.prototype))._subscribe = function () {
            return this.executor.subscribe(this, !0);
        }),
            (e.exports = n);
    },
    function (e, t, i) {
        "use strict";
        var s,
            n = "undefined" != typeof window ? window : {},
            r = "SharedInstance",
            a = n.AC,
            o =
                ((s = {}),
                {
                    get: function (e, t) {
                        var i = null;
                        return s[e] && s[e][t] && (i = s[e][t]), i;
                    },
                    set: function (e, t, i) {
                        return s[e] || (s[e] = {}), (s[e][t] = "function" == typeof i ? new i() : i), s[e][t];
                    },
                    share: function (e, t, i) {
                        var s = this.get(e, t);
                        return s || (s = this.set(e, t, i)), s;
                    },
                    remove: function (e, t) {
                        var i = typeof t;
                        if ("string" !== i && "number" !== i) s[e] && (s[e] = null);
                        else {
                            if (!s[e] || !s[e][t]) return;
                            s[e][t] = null;
                        }
                    },
                });
        a || (a = n.AC = {}), a[r] || (a[r] = o), (e.exports = a[r]);
    },
    function (e, t, i) {
        "use strict";
        var s = i(37).SharedInstance,
            n = i(38).majorVersionNumber,
            r = function () {
                this._currentID = 0;
            };
        (r.prototype.getNewID = function () {
            return this._currentID++, "raf:" + this._currentID;
        }),
            (e.exports = s.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", n, r));
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = t.EVT_VIEWPORT_GROUP_EXITED = t.EVT_VIEWPORT_GROUP_ENTERED = t.EVT_VIEWPORT_GROUP_CHANGED = void 0);
        var n = s(i(6)),
            r = i(67);
        const a = "EVT_VIEWPORT_CHANGED";
        class o extends n.default {
            constructor(e) {
                super(),
                    (this.label = e.name),
                    (this._mql = window.matchMedia(e.mediaQuery)),
                    (this.active = this._mql.matches),
                    (this._onMatch = this._onMatch.bind(this)),
                    this._mql.addEventListener ? this._mql.addEventListener("change", this._onMatch) : this._mql.addListener(this._onMatch);
            }
            _onMatch(e) {
                (this.active = e.matches), this._events && this.trigger(a, this);
            }
            destroy() {
                this._mql.removeEventListener ? this._mql.removeEventListener("change", this._onMatch) : this._mql.removeListener(this._onMatch), super.destroy();
            }
        }
        const l = (t.EVT_VIEWPORT_GROUP_CHANGED = "EVT_VIEWPORT_GROUP_CHANGED"),
            h = (t.EVT_VIEWPORT_GROUP_EXITED = "EVT_VIEWPORT_GROUP_EXITED"),
            d = (t.EVT_VIEWPORT_GROUP_ENTERED = "EVT_VIEWPORT_GROUP_ENTERED");
        class c extends n.default {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { excludeMatches: !1 };
                super(),
                    (this._viewports = e),
                    (this._viewportQueries = (0, r.translateToMediaQuery)(e)),
                    (this._excludeMatches = t.excludeMatches),
                    (this.active = new Set()),
                    (this.inactive = new Set()),
                    (this._onGroupMatch = this._onGroupMatch.bind(this)),
                    (this._onGroupMatchDebounced = (0, r.debounce)(() => {
                        this._safeTrigger(l, this);
                        const e = this.isMatch ? d : h;
                        this._safeTrigger(e, this);
                    }, 50)),
                    (this._listeners = this._viewportQueries.map((e) => {
                        const t = new o(e);
                        t.on(a, this._onGroupMatch);
                        return (t.active ? this.active : this.inactive).add(t.label), t;
                    }));
            }
            get viewports() {
                return this._viewports;
            }
            set viewports(e) {
                this._viewports = e;
            }
            get excludeMatches() {
                return this._excludeMatches;
            }
            set excludeMatches(e) {
                this._excludeMatches = e;
            }
            get isMatch() {
                return this.validateViewport();
            }
            get current() {
                return [...this.active][0];
            }
            destroy() {
                this._listeners.forEach((e) => e.destroy()), this.active.clear(), this.inactive.clear(), (this.destroyed = !0), super.destroy();
            }
            validateViewport(e) {
                e || (e = Object.keys(this._viewports));
                const t = e.filter((e) => this.active.has(e)).length > 0;
                return this.excludeMatches ? !t : t;
            }
            _safeTrigger(e, t) {
                this._events && !this.destroyed && this.trigger(e, t);
            }
            _onGroupMatch(e) {
                const { active: t, label: i } = e;
                t ? (this.active.add(i), this.inactive.delete(i)) : (this.inactive.add(i), this.active.delete(i)), this._onGroupMatchDebounced();
            }
        }
        t.default = c;
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.translateToMediaQuery = t.setMediaQueryCssVars = t.debounce = t.composeMediaQuery = void 0);
        t.debounce = (e, t) => {
            let i;
            return function () {
                clearTimeout(i), (i = setTimeout(() => e.apply(this, arguments), t));
            };
        };
        const s = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e) return;
            if (e.hasOwnProperty("query")) return e.query;
            const t = ["only screen"],
                i = Object.keys(e)
                    .filter((e) => "alias" !== e)
                    .map((t) => {
                        const i = e[t],
                            s = [];
                        for (let e = 0; e < i.length; e++) {
                            const n = i[e];
                            if (n) {
                                const i = 0 === e ? "min" : "max";
                                s.push(`(${i}-${t}: ${n}px)`);
                            }
                        }
                        return s;
                    })
                    .flat();
            return t.push(i), t.flat().join(" and ");
        };
        t.composeMediaQuery = s;
        t.translateToMediaQuery = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Object.keys(e).map((t) => ({ name: t, mediaQuery: s(e[t]) }));
        };
        t.setMediaQueryCssVars = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement,
                t = arguments.length > 1 ? arguments[1] : void 0;
            Object.keys(t).forEach((i) => {
                const n = t[i],
                    r = s(n);
                e.style.setProperty(`--vp-mq-${i}`, r);
            });
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(69),
            n = i(70);
        function r(e, t) {
            if ("function" == typeof e.parseVersion) return e.parseVersion(t);
            var i,
                s = e.version || e.userAgent;
            "string" == typeof s && (s = [s]);
            for (var n, r = s.length, a = 0; a < r; a++) if ((n = t.match(((i = s[a]), new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && n.length > 1) return n[1].replace(/_/g, ".");
            return !1;
        }
        function a(e, t, i) {
            for (var s, n, a = e.length, o = 0; o < a; o++)
                if (("function" == typeof e[o].test ? !0 === e[o].test(i) && (s = e[o].name) : i.ua.indexOf(e[o].userAgent) > -1 && (s = e[o].name), s)) {
                    if (((t[s] = !0), "string" == typeof (n = r(e[o], i.ua)))) {
                        var l = n.split(".");
                        (t.version.string = n), l && l.length > 0 && ((t.version.major = parseInt(l[0] || 0)), (t.version.minor = parseInt(l[1] || 0)), (t.version.patch = parseInt(l[2] || 0)));
                    } else "edge" === s && ((t.version.string = "12.0.0"), (t.version.major = "12"), (t.version.minor = "0"), (t.version.patch = "0"));
                    return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t;
                }
            return t;
        }
        e.exports = function (e) {
            var t = {};
            return (t.browser = a(n.browser, s.browser, e)), (t.os = a(n.os, s.os, e)), t;
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            browser: { safari: !1, chrome: !1, firefox: !1, ie: !1, opera: !1, android: !1, edge: !1, edgeChromium: !1, samsung: !1, version: { string: "", major: 0, minor: 0, patch: 0, documentMode: !1 } },
            os: { osx: !1, ios: !1, android: !1, windows: !1, linux: !1, fireos: !1, chromeos: !1, version: { string: "", major: 0, minor: 0, patch: 0 } },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            browser: [
                {
                    name: "edge",
                    userAgent: "Edge",
                    version: ["rv", "Edge"],
                    test: function (e) {
                        return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua;
                    },
                },
                {
                    name: "edgeChromium",
                    userAgent: "Edge",
                    version: ["rv", "Edg"],
                    test: function (e) {
                        return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge");
                    },
                },
                { name: "chrome", userAgent: "Chrome" },
                {
                    name: "firefox",
                    test: function (e) {
                        return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera");
                    },
                    version: "Firefox",
                },
                { name: "android", userAgent: "Android" },
                {
                    name: "safari",
                    test: function (e) {
                        return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1;
                    },
                    version: "Version",
                },
                {
                    name: "ie",
                    test: function (e) {
                        return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1;
                    },
                    version: ["MSIE", "rv"],
                    parseDocumentMode: function () {
                        var e = !1;
                        return document.documentMode && (e = parseInt(document.documentMode, 10)), e;
                    },
                },
                { name: "opera", userAgent: "Opera", version: ["Version", "Opera"] },
                { name: "samsung", userAgent: "SamsungBrowser" },
            ],
            os: [
                {
                    name: "windows",
                    test: function (e) {
                        return e.ua.indexOf("Windows") > -1;
                    },
                    version: "Windows NT",
                },
                {
                    name: "osx",
                    userAgent: "Mac",
                    test: function (e) {
                        return e.ua.indexOf("Macintosh") > -1;
                    },
                },
                {
                    name: "ios",
                    test: function (e) {
                        return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1;
                    },
                    version: ["iPhone OS", "CPU OS"],
                },
                {
                    name: "linux",
                    userAgent: "Linux",
                    test: function (e) {
                        return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android");
                    },
                },
                {
                    name: "fireos",
                    test: function (e) {
                        return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1;
                    },
                    version: "rv",
                },
                {
                    name: "android",
                    userAgent: "Android",
                    test: function (e) {
                        return e.ua.indexOf("Android") > -1;
                    },
                },
                { name: "chromeos", userAgent: "CrOS" },
            ],
        };
    },
    function (e, t, i) {
        "use strict";
        class s {
            constructor() {
                this._events = {};
            }
            on(e, t) {
                return (this._events[e] = this._events[e] || []), this._events[e].unshift(t), t;
            }
            once(e, t) {
                const i = (s) => {
                    this.off(e, i), void 0 !== s ? t(s) : t();
                };
                return this.on(e, i);
            }
            off(e, t) {
                if (!this.has(e)) return;
                if (!t) return void delete this._events[e];
                const i = this._events[e].indexOf(t);
                -1 !== i && this._events[e].splice(i, 1);
            }
            trigger(e, t) {
                if (this.has(e)) for (let i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]();
            }
            has(e) {
                return e in this._events && 0 !== this._events[e].length;
            }
            destroy() {
                this._events = null;
            }
        }
        (s.EventEmitterMicro = s), (e.exports = s);
    },
    function (e, t, i) {
        "use strict";
        const s = i(22),
            n = i(99);
        e.exports = class extends s {
            constructor(e, t, i, s) {
                let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
                super(e, t, i, (s = n(s)), r, a);
            }
            set(e) {
                let t = this.current;
                this.round && (t = Math.round(t)), this.suffix && (t += this.suffix), e.setProperty(this.key, t);
            }
            unset(e) {
                e.removeProperty(this.key);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = new (class {
            constructor() {
                (this.linear = function (e) {
                    return e;
                }),
                    (this.easeInQuad = function (e) {
                        return e * e;
                    }),
                    (this.easeOutQuad = function (e) {
                        return e * (2 - e);
                    }),
                    (this.easeInOutQuad = function (e) {
                        return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
                    }),
                    (this.easeInSin = function (e) {
                        return 1 + Math.sin((Math.PI / 2) * e - Math.PI / 2);
                    }),
                    (this.easeOutSin = function (e) {
                        return Math.sin((Math.PI / 2) * e);
                    }),
                    (this.easeInOutSin = function (e) {
                        return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
                    }),
                    (this.easeInElastic = function (e) {
                        return 0 === e ? e : (0.04 - 0.04 / e) * Math.sin(25 * e) + 1;
                    }),
                    (this.easeOutElastic = function (e) {
                        return ((0.04 * e) / --e) * Math.sin(25 * e);
                    }),
                    (this.easeInOutElastic = function (e) {
                        return (e -= 0.5) < 0 ? (0.02 + 0.01 / e) * Math.sin(50 * e) : (0.02 - 0.01 / e) * Math.sin(50 * e) + 1;
                    }),
                    (this.easeOutBack = function (e) {
                        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
                    }),
                    (this.easeInCubic = function (e) {
                        return e * e * e;
                    }),
                    (this.easeOutCubic = function (e) {
                        return --e * e * e + 1;
                    }),
                    (this.easeInOutCubic = function (e) {
                        return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                    }),
                    (this.easeInQuart = function (e) {
                        return e * e * e * e;
                    }),
                    (this.easeOutQuart = function (e) {
                        return 1 - --e * e * e * e;
                    }),
                    (this.easeInOutQuart = function (e) {
                        return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
                    }),
                    (this.easeInQuint = function (e) {
                        return e * e * e * e * e;
                    }),
                    (this.easeOutQuint = function (e) {
                        return 1 + --e * e * e * e * e;
                    }),
                    (this.easeInOutQuint = function (e) {
                        return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
                    });
            }
        })();
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            return e.reduce((e, t) => ((e[t] = t), e), {});
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(51),
            n = i(10),
            r = i(22);
        class a extends s {
            constructor(e, t) {
                super(e, t),
                    (this.keyframeType = n.KeyframeTypes.CSSClass),
                    (this._triggerType = a.TRIGGER_TYPE_CSS_CLASS),
                    (this.cssClass = ""),
                    (this.friendlyName = ""),
                    (this.style = { on: null, off: null }),
                    (this.toggle = n.KeyframeDefaults.toggle),
                    (this.isApplied = !1);
            }
            parseOptions(e) {
                if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
                if (
                    ((e.x = void 0),
                    (e.y = void 0),
                    (e.z = void 0),
                    (e.scale = void 0),
                    (e.scaleX = void 0),
                    (e.scaleY = void 0),
                    (e.rotationX = void 0),
                    (e.rotationY = void 0),
                    (e.rotationZ = void 0),
                    (e.rotation = void 0),
                    (e.opacity = void 0),
                    (e.hold = void 0),
                    void 0 !== e.toggle && (this.toggle = e.toggle),
                    void 0 !== e.cssClass)
                )
                    (this._triggerType = a.TRIGGER_TYPE_CSS_CLASS),
                        (this.cssClass = e.cssClass),
                        (this.friendlyName = "." + this.cssClass),
                        void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = { add: [], remove: [] });
                else {
                    if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
                    if (((this._triggerType = a.TRIGGER_TYPE_STYLE_PROPERTY), (this.style = e.style), (this.friendlyName = "style"), (this.toggle = void 0 !== this.style.off || this.toggle), this.toggle && void 0 === this.style.off)) {
                        this.style.off = {};
                        for (let e in this.style.on) this.style.off[e] = "";
                    }
                    void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {});
                }
                if ((void 0 === e.end && (e.end = e.start), (e.toggle = this.toggle), this._triggerType === a.TRIGGER_TYPE_CSS_CLASS)) this.isApplied = this.controller.element.classList.contains(this.cssClass);
                else {
                    let e = getComputedStyle(this.controller.element);
                    this.isApplied = !0;
                    for (let t in this.style.on)
                        if (e[t] !== this.style.on[t]) {
                            this.isApplied = !1;
                            break;
                        }
                }
                s.prototype.parseOptions.call(this, e),
                    (this.animValues[this.friendlyName] = [0, 0]),
                    void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new r(0, 1, !1, this.friendlyName)),
                    (this.keyframeType = n.KeyframeTypes.CSSClass);
            }
            updateLocalProgress(e) {
                (this.isApplied && !this.toggle) ||
                    (this.start !== this.end
                        ? !this.isApplied && e >= this.start && e <= this.end
                            ? this._apply()
                            : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply()
                        : !this.isApplied && e >= this.start
                        ? this._apply()
                        : this.isApplied && this.toggle && e < this.start && this._unapply());
            }
            _apply() {
                if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), (this.controller.needsClassUpdate = !0);
                else {
                    for (let e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
                    this.controller.needsStyleUpdate = !0;
                }
                this.isApplied = !0;
            }
            _unapply() {
                if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), (this.controller.needsClassUpdate = !0);
                else {
                    for (let e in this.style.off) this.controller.tweenProps.targetStyles[e] = this.style.off[e];
                    this.controller.needsStyleUpdate = !0;
                }
                this.isApplied = !1;
            }
            isValidStyleProperty(e) {
                if (!e.hasOwnProperty("on")) return !1;
                if ("object" != typeof e.on) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
                if (this.toggle && e.hasOwnProperty("off") && "object" != typeof e.off) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
                return !0;
            }
            reconcile(e) {}
            onDOMRead(e) {}
            evaluateInterpolationConstraints() {}
        }
        (a.TRIGGER_TYPE_CSS_CLASS = 0), (a.TRIGGER_TYPE_STYLE_PROPERTY = 1), (a.DATA_ATTRIBUTE = "data-anim-classname"), (e.exports = a);
    },
    function (e, t, i) {
        "use strict";
        const s = i(71),
            n = i(31),
            r = i(74),
            a = i(10),
            o = i(104),
            l = i(159),
            h = i(160),
            d = i(105),
            c = i(106),
            u = i(162),
            m = {};
        "undefined" != typeof window && ((m.create = i(14)), (m.update = i(9)), (m.draw = i(1)));
        let p = 0;
        e.exports = class extends s {
            constructor(e, t) {
                super(),
                    (this.anim = t),
                    (this.element = e),
                    (this.name = this.name || e.getAttribute("data-anim-scroll-group")),
                    (this.isEnabled = !0),
                    (this.position = new l()),
                    (this.metrics = new d()),
                    this.metrics.add(this.element),
                    (this.expressionParser = new c(this)),
                    (this.boundsMin = 0),
                    (this.boundsMax = 0),
                    (this.timelineUpdateRequired = !1),
                    (this._keyframesDirty = !1),
                    (this.viewableRange = this.createViewableRange()),
                    (this.defaultEase = a.KeyframeDefaults.ease),
                    (this.keyframeControllers = []),
                    this.updateProgress(this.getPosition()),
                    (this.onDOMRead = this.onDOMRead.bind(this)),
                    (this.onDOMWrite = this.onDOMWrite.bind(this)),
                    (this.gui = null),
                    (this.computedStyleCache = {}),
                    (this.destroyed = !1),
                    this.finalizeInit();
            }
            finalizeInit() {
                (this.element._animInfo = new o(this, null, !0)), this.setupRAFEmitter();
            }
            destroy() {
                (this.destroyed = !0), this.expressionParser.destroy(), (this.expressionParser = null);
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].destroy();
                (this.keyframeControllers = null),
                    (this.position = null),
                    (this.viewableRange = null),
                    this.gui && (this.gui.destroy(), (this.gui = null)),
                    this.metrics.destroy(),
                    (this.metrics = null),
                    this.rafEmitter.destroy(),
                    (this.rafEmitter = null),
                    (this.anim = null),
                    this.element._animInfo && this.element._animInfo.group === this && ((this.element._animInfo.group = null), (this.element._animInfo = null)),
                    (this.element = null),
                    (this.isEnabled = !1),
                    super.destroy();
            }
            removeKeyframeController(e) {
                return e.destroyed || !this.keyframeControllers.includes(e)
                    ? Promise.resolve()
                    : (e._allKeyframes.forEach((e) => (e.markedForRemoval = !0)),
                      (this.keyframesDirty = !0),
                      new Promise((t) => {
                          m.draw(() => {
                              const i = this.keyframeControllers.indexOf(e);
                              -1 !== i ? (this.keyframeControllers.splice(i, 1), e.onDOMWrite(), e.destroy(), this.gui && this.gui.create(), t()) : t();
                          });
                      }));
            }
            remove() {
                return this.anim && this.anim.removeGroup(this);
            }
            clear() {
                return Promise.all(this.keyframeControllers.map((e) => this.removeKeyframeController(e)));
            }
            setupRAFEmitter(e) {
                this.rafEmitter && this.rafEmitter.destroy(),
                    (this.rafEmitter = e || new m.create()),
                    this.rafEmitter.on("update", this.onDOMRead),
                    this.rafEmitter.on("draw", this.onDOMWrite),
                    this.rafEmitter.once("external", () => this.reconcile());
            }
            requestDOMChange() {
                return !!this.isEnabled && this.rafEmitter.run();
            }
            onDOMRead() {
                this.keyframesDirty && this.onKeyframesDirty();
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMRead(this.position.local);
            }
            onDOMWrite() {
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMWrite();
                this.needsUpdate() && this.requestDOMChange(), (this.computedStyleCache = {});
            }
            needsUpdate() {
                if (this._keyframesDirty) return !0;
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) if (this.keyframeControllers[e].needsUpdate()) return !0;
                return !1;
            }
            addKeyframe(e, t) {
                let i = this.getControllerForTarget(e);
                return null === i && ((i = new u(this, e)), this.keyframeControllers.push(i)), (this.keyframesDirty = !0), i.addKeyframe(t);
            }
            addEvent(e, t) {
                t.event = t.event || "Generic-Event-Name-" + p++;
                let i = void 0 !== t.end && t.end !== t.start;
                const s = this.addKeyframe(e, t);
                return (
                    i
                        ? (t.onEnterOnce && s.controller.once(t.event + ":enter", t.onEnterOnce),
                          t.onExitOnce && s.controller.once(t.event + ":exit", t.onExitOnce),
                          t.onEnter && s.controller.on(t.event + ":enter", t.onEnter),
                          t.onExit && s.controller.on(t.event + ":exit", t.onExit))
                        : (t.onEventOnce && s.controller.once(t.event, t.onEventOnce),
                          t.onEventReverseOnce && s.controller.once(t.event + ":reverse", t.onEventReverseOnce),
                          t.onEvent && s.controller.on(t.event, t.onEvent),
                          t.onEventReverse && s.controller.on(t.event + ":reverse", t.onEventReverse)),
                    s
                );
            }
            forceUpdate() {
                let { waitForNextUpdate: e = !0, silent: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.isEnabled && (this.refreshMetrics(), (this.timelineUpdateRequired = !0), e ? (this.keyframesDirty = !0) : this.onKeyframesDirty({ silent: t }));
            }
            onKeyframesDirty() {
                let { silent: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.determineActiveKeyframes(), (this.keyframesDirty = !1), this.metrics.refreshMetrics(this.element), (this.viewableRange = this.createViewableRange());
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateAnimationConstraints();
                this.updateBounds(), this.updateProgress(this.getPosition()), e || this.updateTimeline(), this.gui && this.gui.create();
            }
            refreshMetrics() {
                let e = new Set([this.element]);
                this.keyframeControllers.forEach((t) => {
                    e.add(t.element), t._allKeyframes.forEach((t) => t.anchors.forEach((t) => e.add(t)));
                }),
                    this.metrics.refreshCollection(e),
                    (this.viewableRange = this.createViewableRange());
            }
            reconcile() {
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile();
            }
            determineActiveKeyframes(e) {
                e = e || r(Array.from(document.documentElement.classList));
                for (let t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].determineActiveKeyframes(e);
            }
            updateBounds() {
                if (0 === this.keyframeControllers.length) return (this.boundsMin = 0), void (this.boundsMax = 0);
                let e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
                for (let t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
                let t = this.convertTValueToScrollPosition(e.min),
                    i = this.convertTValueToScrollPosition(e.max);
                i - t < a.pageMetrics.windowHeight
                    ? ((e.min = this.convertScrollPositionToTValue(t - 0.5 * a.pageMetrics.windowHeight)), (e.max = this.convertScrollPositionToTValue(i + 0.5 * a.pageMetrics.windowHeight)))
                    : ((e.min -= 0.001), (e.max += 0.001)),
                    (this.boundsMin = e.min),
                    (this.boundsMax = e.max),
                    (this.timelineUpdateRequired = !0);
            }
            createViewableRange() {
                return new h(this.metrics.get(this.element), a.pageMetrics.windowHeight);
            }
            _onBreakpointChange(e, t) {
                (this.keyframesDirty = !0), this.determineActiveKeyframes();
            }
            updateProgress(e) {
                this.hasDuration()
                    ? ((this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a)), (this.position.local = n.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)))
                    : (this.position.local = this.position.localUnclamped = 0);
            }
            performTimelineDispatch() {
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.position.local);
                this.trigger(a.EVENTS.ON_TIMELINE_UPDATE, this.position.local),
                    this.trigger("update", this.position.local),
                    (this.timelineUpdateRequired = !1),
                    this.position.lastPosition !== this.position.local &&
                        (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin
                            ? (this.trigger(a.EVENTS.ON_TIMELINE_START, this), this.trigger("start", this))
                            : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin
                            ? (this.trigger(a.EVENTS.ON_TIMELINE_START + ":reverse", this), this.trigger("start:reverse", this))
                            : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax
                            ? (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE, this), this.trigger("complete", this))
                            : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this), this.trigger("complete:reverse", this))),
                    null !== this.gui && this.gui.onScrollUpdate(this.position);
            }
            updateTimeline(e) {
                if (!this.isEnabled) return !1;
                void 0 === e && (e = this.getPosition()), this.updateProgress(e);
                let t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
                    i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
                if (!this.timelineUpdateRequired && t && i && this.position.lastPosition === e) return void (this.position.local = this.position.localUnclamped);
                if (this.timelineUpdateRequired || (this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax))
                    return this.performTimelineDispatch(), this.requestDOMChange(), void (this.position.lastPosition = this.position.localUnclamped);
                let s = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
                    n = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
                if (s && n) return this.performTimelineDispatch(), this.requestDOMChange(), void (this.position.lastPosition = this.position.localUnclamped);
                const r = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
                    a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
                (r || a) && (this.performTimelineDispatch(), this.requestDOMChange(), (this.position.lastPosition = this.position.localUnclamped)), null !== this.gui && this.gui.onScrollUpdate(this.position);
            }
            _onScroll(e) {
                this.updateTimeline(e);
            }
            convertScrollPositionToTValue(e) {
                return this.hasDuration() ? n.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0;
            }
            convertTValueToScrollPosition(e) {
                return this.hasDuration() ? n.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0;
            }
            hasDuration() {
                return this.viewableRange.a !== this.viewableRange.d;
            }
            getPosition() {
                return a.pageMetrics.scrollY;
            }
            getControllerForTarget(e) {
                if (!e._animInfo || !e._animInfo.controllers) return null;
                if (e._animInfo.controller && e._animInfo.controller.group === this) return e._animInfo.controller;
                const t = e._animInfo.controllers;
                for (let e = 0, i = t.length; e < i; e++) if (t[e].group === this) return t[e];
                return null;
            }
            trigger(e, t) {
                if (void 0 !== this._events[e]) for (let i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]();
            }
            set keyframesDirty(e) {
                (this._keyframesDirty = e), this._keyframesDirty && this.requestDOMChange();
            }
            get keyframesDirty() {
                return this._keyframesDirty;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(15);
        e.exports = s.requestAnimationFrame("external");
    },
    function (e, t, i) {
        "use strict";
        var s = i(15);
        e.exports = s.cancelAnimationFrame("update");
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = t.LAZY_LOAD_STORED_OPTIONS_NAME = void 0);
        var n = s(i(179)),
            r = i(4);
        const a = (t.LAZY_LOAD_STORED_OPTIONS_NAME = "lazyLoadOptions");
        class o extends n.default {
            _addKeyframesToImages() {
                (this._scrollGroup = this.AnimSystem.getScrollGroupForTarget(document.body)),
                    this._images.forEach((e) => {
                        this.AnimSystem.getScrollGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getScrollGroupForTarget(e));
                        const t = this._defineKeyframeOptions(e);
                        if (e.closest(`[${r.CONTENT_WRAPPER_ATTRIB}]`)) e[a] = t;
                        else {
                            this._scrollGroup.addKeyframe(e, t).controller.on("AnimLazyImage:enter", () => {
                                this._imageIsInLoadRange(e);
                            });
                        }
                    });
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        const s = i(8).EventEmitterMicro,
            n = [
                { name: "S", mediaQuery: "only screen and (max-width: 734px)" },
                { name: "M", mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)" },
                { name: "L", mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)" },
                { name: "X", mediaQuery: "only screen and (min-width: 1441px)" },
            ],
            r = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
            a = "only screen and (orientation: portrait)";
        class o extends s {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                super(),
                    (this.BREAKPOINTS = e.breakpoints || n),
                    this._setupProperties(),
                    (this._onRetinaChange = this._onRetinaChange.bind(this)),
                    (this._onOrientationChange = this._onOrientationChange.bind(this)),
                    (this.listenersAdded = { orientation: !1, retina: !1, viewport: !1 });
            }
            static get CHANGE_EVENTS() {
                return { ORIENTATION: "change:orientation", RETINA: "change:retina", VIEWPORT: "change:viewport" };
            }
            on() {
                this._setupListeners(arguments[0]), super.on.apply(this, arguments);
            }
            _onRetinaChange() {
                this.trigger(o.CHANGE_EVENTS.RETINA, this);
            }
            _onOrientationChange() {
                this.trigger(o.CHANGE_EVENTS.ORIENTATION, this);
            }
            _setupProperties() {
                Object.defineProperty(this, "retina", { get: () => window.matchMedia(r).matches }),
                    Object.defineProperty(this, "orientation", { get: () => (window.matchMedia(a).matches ? "portrait" : "landscape") }),
                    (this.viewport = this.getBreakpoint());
            }
            _setupListeners(e) {
                if (
                    (e !== o.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(r).addListener(this._onRetinaChange), (this.listenersAdded.retina = !0)),
                    e !== o.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(a).addListener(this._onOrientationChange), (this.listenersAdded.orientation = !0)),
                    e === o.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport)
                ) {
                    for (let e = 0; e < this.BREAKPOINTS.length; e++) {
                        let t = this.BREAKPOINTS[e];
                        window.matchMedia(t.mediaQuery).addListener((e) => {
                            e.matches && ((this.oldViewport = this.viewport), (this.viewport = t.name), this.trigger(o.CHANGE_EVENTS.VIEWPORT, this));
                        });
                    }
                    this.listenersAdded.viewport = !0;
                }
            }
            getBreakpoint() {
                for (let e = 0; e < this.BREAKPOINTS.length; e++) {
                    let t = this.BREAKPOINTS[e];
                    if (window.matchMedia(t.mediaQuery).matches) return t.name;
                }
            }
        }
        e.exports = o;
    },
    function (e, t, i) {
        "use strict";
        const s = i(82),
            n = i(83);
        e.exports = {
            itemsCreated(e) {
                this._items.forEach((e, t) => {
                    t === this.wrappedIndex(this.currentIndex) ? n(e.el) : s(e.el);
                });
            },
            onItemChangeCompleted(e) {
                const { previous: t, current: i } = this.selections.completed;
                t && t !== i && s(t.el), n(i.el);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(32),
            n = i(33),
            r = "data-original-",
            a = "tabindex",
            o = function (e, t) {
                var i = e.getAttribute(r + t);
                i || ((i = e.getAttribute(t) || ""), e.setAttribute(r + t, i));
            };
        e.exports = function (e, t) {
            if (n.isFocusableElement(e, t)) o(e, a), e.setAttribute(a, "-1");
            else for (var i = n.getTabbableElements(e, t), r = i.length; r--; ) o(i[r], a), i[r].setAttribute(a, "-1");
            o(e, s.HIDDEN), e.setAttribute(s.HIDDEN, "true");
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(115),
            n = i(32),
            r = "data-original-",
            a = "tabindex",
            o = function (e, t) {
                var i = e.getAttribute(r + t);
                null !== i && ("" === i ? s(e, t) : e.setAttribute(t, i), s(e, r + t));
            };
        e.exports = function (e) {
            o(e, a), o(e, n.HIDDEN);
            for (var t = e.querySelectorAll(`[${r + a}]`), i = t.length; i--; ) o(t[i], a);
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            itemsCreated() {
                if (!this.model.InitialIndexFromHashLink.Enabled || !this._items) return;
                const e = location.hash.slice(1);
                if (!e) return;
                const t = this._items.findIndex((t) => {
                    let { id: i } = t;
                    return i === e;
                });
                t > -1 && ((this.currentIndex = t), this.model.InitialIndexFromHashLink.ScrollReset && this._resetHorizontalScrollPosition());
            },
            _resetHorizontalScrollPosition(e) {
                const t = e || this.el;
                0 !== t.scrollLeft ? (t.scrollLeft = 0) : t !== document.body && this._resetHorizontalScrollPosition(t.parentNode);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            ALERT: "alert",
            ALERTDIALOG: "alertdialog",
            BUTTON: "button",
            CHECKBOX: "checkbox",
            DIALOG: "dialog",
            GRIDCELL: "gridcell",
            LINK: "link",
            LOG: "log",
            MARQUEE: "marquee",
            MENUITEM: "menuitem",
            MENUITEMCHECKBOX: "menuitemcheckbox",
            MENUITEMRADIO: "menuitemradio",
            OPTION: "option",
            PROGRESSBAR: "progressbar",
            RADIO: "radio",
            SCROLLBAR: "scrollbar",
            SLIDER: "slider",
            SPINBUTTON: "spinbutton",
            STATUS: "status",
            SWITCH: "switch",
            TAB: "tab",
            TABPANEL: "tabpanel",
            TEXTBOX: "textbox",
            TIMER: "timer",
            TOOLTIP: "tooltip",
            TREEITEM: "treeitem",
            COMBOBOX: "combobox",
            GRID: "grid",
            LISTBOX: "listbox",
            MENU: "menu",
            MENUBAR: "menubar",
            RADIOGROUP: "radiogroup",
            TABLIST: "tablist",
            TREE: "tree",
            TREEGRID: "treegrid",
            ARTICLE: "article",
            COLUMNHEADER: "columnheader",
            DEFINITION: "definition",
            DIRECTORY: "directory",
            DOCUMENT: "document",
            GROUP: "group",
            HEADING: "heading",
            IMG: "img",
            LIST: "list",
            LISTITEM: "listitem",
            MATH: "math",
            NOTE: "note",
            PRESENTATION: "presentation",
            REGION: "region",
            ROW: "row",
            ROWGROUP: "rowgroup",
            ROWHEADER: "rowheader",
            SEPARATOR: "separator",
            TOOLBAR: "toolbar",
            APPLICATION: "application",
            BANNER: "banner",
            COMPLEMENTARY: "complementary",
            CONTENTINFO: "contentinfo",
            FORM: "form",
            MAIN: "main",
            NAVIGATION: "navigation",
            SEARCH: "search",
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(33);
        let n = (e) => {
            s.isTabbableElement(e) || e.setAttribute("tabindex", "0");
        };
        e.exports = function (e) {
            e instanceof Node
                ? n(e)
                : e.forEach((e) => {
                      n(e);
                  });
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(88);
        e.exports = function (e) {
            s(e, "tabindex", "-1");
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t, i) {
            let s;
            "string" != typeof i && (i = i.toString()),
                (s = e instanceof NodeList ? e : [].concat(e)),
                s.forEach((e) => {
                    e.setAttribute(t, i);
                });
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = i(120);
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            onItemChangeCompleted(e) {
                const { previous: t, current: i } = this.selections.completed;
                t && t !== i && t.deselect(), i.select();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t) {
            (e.exitSpotlightPosition = function () {}), (e.enterSpotlightPosition = function () {}), (e.play = function () {}), (e.pause = function () {}), (e.reset = function () {}), (e.showStaticFallback = function () {});
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = i(216)("warn");
    },
    function (e, t, i) {
        "use strict";
        let s;
        try {
            s = i(39).observer.Gallery;
        } catch (e) {}
        e.exports = {
            created(e) {
                this.analytics = { lastTrackedItem: null, observer: null, name: this.el.getAttribute("data-analytics-gallery-id") || this.el.getAttribute("id"), events: { UPDATE: "update", UPDATE_COMPLETE: "update:complete" } };
            },
            mounted() {
                s &&
                    (this.analytics.name || (console.warn("No ID attribute found on the Mixin Gallery element - please add an ID", this), (this.analytics.name = "null")),
                    (this.analytics.observer = new s(this, { galleryName: this.analytics.name, beforeUpdateEvent: this.analytics.events.UPDATE, afterUpdateEvent: this.analytics.events.UPDATE_COMPLETE, trackAutoRotate: !0 })));
            },
            onItemChangeCompleted(e) {
                if (!e.previous || e.current === this.analytics.lastTrackedItem || (e.current === e.previous && !this.analytics.lastTrackedItem)) return;
                this.analytics.lastTrackedItem = e.current;
                let t = { incoming: { id: e.current.analyticsId }, outgoing: { id: e.previous.analyticsId }, interactionEvent: this.lastInteractionEvent };
                this.trigger(this.analytics.events.UPDATE_COMPLETE, t);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = i(25),
            r = s(i(3)),
            a = i(53),
            o = s(i(12)),
            l = s(i(122)),
            h = i(4),
            d = i(44),
            c = i(30),
            u = s(i(129)),
            m = s(i(236));
        class p extends r.default {
            async mounted() {
                (this.commonPlugins = l.default),
                    (this.commonPlugins.ObjectFitFix = u.default),
                    (this.commonPlugins.UnloadVideo = m.default),
                    (this.isL2 = this.el.closest(h.MODAL_SELECTOR)),
                    (this.pluginOptions = {}),
                    (this.videoEl = this.el.querySelector(`#${this.el.dataset.videoId}`)),
                    (this.componentEl = this.el.closest(c.SELECTOR_COMPONENT_CONTAINER)),
                    this.injectPlugins({ ObjectFitFix: u.default, UnloadVideo: m.default }),
                    this.addCustomPlugins();
                this.isL2 && (this.modal = (0, d.getModalComponentRef)(this.gum, this.el)),
                    (this.mediaInstance = await a.Media.autoInitialize(this.el, {
                        anim: this.gum.anim,
                        animBreakpointMap: { S: "small", M: "medium", L: "large" },
                        componentEl: this.componentEl,
                        ...(this.modal && { modalReference: this.modal, scrollGroup: this.modal.animScrollGroup }),
                        ...this.pluginOptions,
                    })),
                    (this.mediaInstance[0].unload = this.unload.bind(this)),
                    this.modal && this.setupModalController(),
                    (this.mediaLoadError = this.mediaLoadError.bind(this)),
                    this.mediaInstance[0].on(o.default.MEDIA_LOAD_ERROR, this.mediaLoadError),
                    (this.mediaTimeout = this.mediaTimeout.bind(this)),
                    this.mediaInstance[0].on(c.EVT_TIMEOUT, this.mediaTimeout),
                    (this.mediaUnloaded = this.mediaUnloaded.bind(this)),
                    this.mediaInstance[0].on(c.EVT_UNLOAD, this.mediaUnloaded);
            }
            addFallbackClassname() {
                this.componentEl.classList.add(c.FALLBACK_CLASSNAME), (0, n.draw)(() => this.gum.anim.forceUpdate());
            }
            mediaLoadError() {
                this.addFallbackClassname();
            }
            mediaTimeout() {
                this.el.classList.add("media-timeout"), this.addFallbackClassname();
            }
            mediaUnloaded() {
                this.el.classList.add("media-unloaded"), this.addFallbackClassname();
            }
            injectPlugins(e) {
                const t = this.videoEl.getAttribute("data-inline-media-plugins"),
                    i = new Set(t ? t.split(",").map((e) => e.trim()) : []);
                for (const t in e) i.add(t), a.Media.addPlugin(t, e[t]);
                this.videoEl.setAttribute("data-inline-media-plugins", [...i].join(","));
            }
            injectPluginsByAttribute() {
                if (!this.productPagePlugins) throw Error("InlineMedia: injectPluginsByAttribute(): this.productPagePlugins must be assigned");
                const e = this.videoEl.getAttribute("data-inline-media-plugins");
                if (e && "" !== e) {
                    const t = Object.keys(this.commonPlugins),
                        i = Object.keys(this.productPagePlugins);
                    e.split(",").forEach((e) => {
                        const s = e.trim();
                        if (!t.includes(s) || i.includes(s)) {
                            if (!i.includes(s)) throw Error(`InlineMedia: plugin missing: ${s}`);
                            a.Media.addPlugin(s, this.productPagePlugins[s]);
                        }
                    });
                }
            }
            addCustomPlugins() {}
            setupModalController() {
                const e = this.mediaInstance[0];
                (this._mediaPlayingOnModalOpen = !1),
                    this.modal.modal.on("open", () => {
                        "playing" === e.playbackState && ((this._mediaPlayingOnModalOpen = !0), e.el.pause());
                    }),
                    this.modal.modal.on("close", () => {
                        this._mediaPlayingOnModalOpen && e.play();
                    });
            }
            destroy() {
                this.mediaInstance && !this.mediaInstance[0]._destroyed && (this.mediaInstance[0].off(c.EVT_TIMEOUT, this.mediaTimeout), this.mediaInstance.forEach((e) => e.destroy()), this.addFallbackClassname());
            }
            unload() {
                const e = this.mediaInstance[0];
                e.lastVideoSrc = e.el.src;
                for (const t of e.plugins) "function" == typeof t.unload && t.unload();
            }
            async reload() {
                this.mediaInstance[0].lastVideoSrc && (await this.mediaInstance[0].load());
            }
            static IS_SUPPORTED() {
                return document.documentElement.classList.contains(c.FEATURE_INLINE_MEDIA);
            }
        }
        t.default = p;
    },
    function (e, t, i) {
        "use strict";
        var s = i(17).os,
            n = i(20).original,
            r = i(5),
            a = i(2);
        function o() {
            var e = r.getWindow();
            return (!n() && !e.orientation) || s.windows;
        }
        (e.exports = a(o)), (e.exports.original = o);
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            keyMap: i(89),
            ariaMap: i(32),
            roleMap: i(85),
            focusableElement: i(114),
            disableTabbable: i(87),
            enableTabbable: i(86),
            hideSiblingElements: i(134),
            showSiblingElements: i(135),
            hide: i(82),
            show: i(83),
            setAttributeForElements: i(88),
            setAttributes: i(324),
            removeAttributes: i(115),
            EventProxy: i(325),
            TabManager: i(33),
            ArrowNavigation: i(119),
            RoamingTabIndex: i(117),
            CircularTab: i(133),
            TextZoom: i(97),
        };
    },
    function (e, t, i) {
        "use strict";
        function s() {
            this._createElements(), this._bindEvents();
        }
        var n = s.prototype;
        (n._bindEvents = function () {
            this._onResize = this._resize.bind(this);
        }),
            (n._createElements = function () {
                if ("undefined" != typeof document && !this.span) {
                    this.span = document.createElement("span");
                    var e = this.span.style;
                    if (((e.visibility = "hidden"), (e.position = "absolute"), (e.top = "0"), (e.zIndex = "-1"), (this.span.innerHTML = "&nbsp;"), !window.ResizeObserver)) {
                        this.iframe = document.createElement("iframe");
                        var t = this.iframe.style;
                        (t.position = "absolute"), (t.top = "0"), (t.left = "0"), (t.width = "100%"), (t.height = "100%"), this.span.appendChild(this.iframe);
                    }
                    document.body.appendChild(this.span);
                }
            }),
            (n.detect = function (e) {
                this._createElements(),
                    (this.originalSize = e || 17),
                    (this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"])),
                    this.currentSize > this.originalSize && this._onResize(),
                    this.isDetecting ||
                        (window.ResizeObserver ? ((this.resizeObserver = new ResizeObserver(this._onResize)), this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize),
                        (this.isDetecting = !0));
            }),
            (n._resize = function () {
                (this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"])),
                    this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"),
                    window.dispatchEvent(new Event("resize")),
                    window.dispatchEvent(new CustomEvent("resize:text-zoom", { detail: this }));
            }),
            (n.getScale = function () {
                return this.currentSize / this.originalSize;
            }),
            (n.remove = function () {
                this.isDetecting && (this.resizeObserver && this.resizeObserver.unobserve(this.span), this.iframe && this.iframe.contentWindow.removeEventListener("resize", this._onResize), (this.isDetecting = !1));
            }),
            (n.destroy = function () {
                this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), (this.span = null), (this.iframe = null), (this.resizeObserver = null);
            }),
            (e.exports = new s());
    },
    function (e, t, i) {
        "use strict";
        e.exports = class {};
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            return e.startsWith("--") ? e : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
        };
    },
    function (e, t, i) {
        "use strict";
        const s = 1e-5,
            n = Math.abs;
        class r {
            constructor(e, t, i, s) {
                (this.cp = new Float32Array(6)),
                    (this.cp[0] = 3 * e),
                    (this.cp[1] = 3 * (i - e) - this.cp[0]),
                    (this.cp[2] = 1 - this.cp[0] - this.cp[1]),
                    (this.cp[3] = 3 * t),
                    (this.cp[4] = 3 * (s - t) - this.cp[3]),
                    (this.cp[5] = 1 - this.cp[3] - this.cp[4]);
            }
            sampleCurveX(e) {
                return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e;
            }
            sampleCurveY(e) {
                return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e;
            }
            sampleCurveDerivativeX(e) {
                return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0];
            }
            solveCurveX(e) {
                var t, i, r, a, o, l;
                for (r = e, l = 0; l < 5; l++) {
                    if (((a = this.sampleCurveX(r) - e), n(a) < s)) return r;
                    if (((o = this.sampleCurveDerivativeX(r)), n(o) < s)) break;
                    r -= a / o;
                }
                if ((r = e) < (t = 0)) return t;
                if (r > (i = 1)) return i;
                for (; t < i; ) {
                    if (((a = this.sampleCurveX(r)), n(a - e) < s)) return r;
                    e > a ? (t = r) : (i = r), (r = 0.5 * (i - t) + t);
                }
                return r;
            }
            solve(e) {
                return this.sampleCurveY(this.solveCurveX(e));
            }
        }
        const a = /\d*\.?\d+/g;
        (r.fromCSSString = function (e) {
            let t = e.match(a);
            if (4 !== t.length) throw `UnitBezier could not convert ${e} to cubic-bezier`;
            let i = t.map(Number),
                s = new r(i[0], i[1], i[2], i[3]);
            return s.solve.bind(s);
        }),
            (e.exports = r);
    },
    function (e, t, i) {
        "use strict";
        e.exports = () => Math.random().toString(16).slice(-4);
    },
    function (e, t, i) {
        "use strict";
        let s = [
            "borderRadius",
            "bottom",
            "fontSize",
            "fontWeight",
            "height",
            "left",
            "lineHeight",
            "marginBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "maxHeight",
            "maxWidth",
            "opacity",
            "paddingBottom",
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "right",
            "top",
            "width",
            "zIndex",
            "strokeDashoffset",
        ];
        s.push(...s.map((e) => e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())));
        e.exports = {
            transformAttributes: ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
            cssAttributes: s,
            domAttributes: ["scrollLeft", "scrollTop", "scrollBy", "scrollTo", "currentTime"],
            suffixFreeAttributes: ["opacity", "z-index", "font-weight", "zIndex", "fontWeight", "scrollLeft", "scrollTop", "scrollBy", "scrollTo", "currentTime"],
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(51),
            n = i(10),
            r = i(22);
        class a extends s {
            constructor(e, t) {
                super(e, t), (this.keyframeType = n.KeyframeTypes.Event), (this.isApplied = !1), (this.hasDuration = !1), (this.isCurrentlyInRange = !1);
            }
            parseOptions(e) {
                (e.x = void 0),
                    (e.y = void 0),
                    (e.scale = void 0),
                    (e.scaleX = void 0),
                    (e.scaleY = void 0),
                    (e.rotation = void 0),
                    (e.style = void 0),
                    (e.cssClass = void 0),
                    (e.rotation = void 0),
                    (e.opacity = void 0),
                    (e.hold = void 0),
                    (this.event = e.event),
                    (this.animValues[this.event] = [0, 0]),
                    void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new r(0, 1, !1, this.event)),
                    super.parseOptions(e),
                    (this.keyframeType = n.KeyframeTypes.Event);
            }
            updateLocalProgress(e) {
                if (this.hasDuration) {
                    let t = this.isCurrentlyInRange,
                        i = e >= this.start && e <= this.end;
                    if (t === i) return;
                    return (this.isCurrentlyInRange = i), void (i && !t ? this._trigger(this.event + ":enter") : t && !i && this._trigger(this.event + ":exit"));
                }
                !this.isApplied && e >= this.start ? ((this.isApplied = !0), this._trigger(this.event)) : this.isApplied && e < this.start && ((this.isApplied = !1), this._trigger(this.event + ":reverse"));
            }
            _trigger(e) {
                (this.controller.eventObject.event = e), (this.controller.eventObject.keyframe = this), this.controller.trigger(e, this.controller.eventObject);
            }
            evaluateConstraints() {
                super.evaluateConstraints(), (this.hasDuration = this.start !== this.end);
            }
            reset(e) {
                (this.isApplied = !1), (this.isCurrentlyInRange = !1), super.reset(e);
            }
            onDOMRead(e) {}
            reconcile(e) {}
            evaluateInterpolationConstraints() {}
        }
        (a.DATA_ATTRIBUTE = "data-anim-event"), (e.exports = a);
    },
    function (e, t, i) {
        "use strict";
        const s = i(98);
        e.exports = class {
            constructor(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                (this.isGroup = i), (this.group = e), (this.controller = t), (this.controllers = []), (this.tweenProps = new s());
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(10),
            n = (e, t) => (null == e ? t : e);
        class r {
            constructor(e) {
                (this.top = 0), (this.bottom = 0), (this.left = 0), (this.right = 0), (this.height = 0), (this.width = 0);
            }
            toString() {
                return `top:${this.top}, bottom:${this.bottom}, left:${this.left}, right:${this.right}, height:${this.height}, width:${this.width}`;
            }
            toObject() {
                return { top: this.top, bottom: this.bottom, left: this.left, right: this.right, height: this.height, width: this.width };
            }
        }
        e.exports = class {
            constructor() {
                this.clear();
            }
            clear() {
                this._metrics = new WeakMap();
            }
            destroy() {
                this._metrics = null;
            }
            add(e) {
                let t = this._metrics.get(e);
                if (t) return t;
                let i = new r(e);
                return this._metrics.set(e, i), this._refreshMetrics(e, i);
            }
            get(e) {
                return this._metrics.get(e);
            }
            refreshCollection(e) {
                e.forEach((e) => this._refreshMetrics(e, null));
            }
            refreshMetrics(e) {
                return this._refreshMetrics(e);
            }
            _refreshMetrics(e, t) {
                if (((t = t || this._metrics.get(e)), !(e instanceof Element)))
                    return (t.width = n(e.width, 0)), (t.height = n(e.height, 0)), (t.top = n(e.top, n(e.y, 0))), (t.left = n(e.left, n(e.x, 0))), (t.right = t.left + t.width), (t.bottom = t.top + t.height), t;
                if (void 0 === e.offsetWidth) {
                    let i = e.getBoundingClientRect();
                    return (t.width = i.width), (t.height = i.height), (t.top = s.pageMetrics.scrollY + i.top), (t.left = s.pageMetrics.scrollX + i.left), (t.right = t.left + t.width), (t.bottom = t.top + t.height), t;
                }
                (t.width = e.offsetWidth), (t.height = e.offsetHeight), (t.top = s.pageMetrics.documentOffsetY), (t.left = s.pageMetrics.documentOffsetX);
                let i = e;
                for (; i; ) (t.top += i.offsetTop), (t.left += i.offsetLeft), (i = i.offsetParent);
                return (t.right = t.left + t.width), (t.bottom = t.top + t.height), t;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(161),
            n = new (i(105))();
        class r {
            constructor(e) {
                (this.group = e), (this.data = { target: null, anchors: null, metrics: this.group.metrics });
            }
            parseArray(e, t) {
                return [this.parseExpression(e, t[0]), this.parseExpression(e, t[1])];
            }
            parseExpression(e, t) {
                if (null == t) return null;
                if ("number" == typeof t) return t;
                if ("string" != typeof t) throw `Expression must be a string, received ${typeof t}: ${t}`;
                return (
                    (this.data.target = e.controller.element),
                    (this.data.anchors = e.anchors),
                    (this.data.keyframe = e.keyframe),
                    this.group.anim.plugins.parser.reduce((i, s) => i || s.parseExpression.call(this, e, t), null) || r._parse(t, this.data)
                );
            }
            parseTimeValue(e, t) {
                if ("number" == typeof t) return t;
                let i = this.group.expressionParser.parseExpression(e, t);
                return this.group.convertScrollPositionToTValue(i);
            }
            destroy() {
                this.group = null;
            }
            static parse(e, t) {
                return (t = t || {}) && (n.clear(), t.target && n.add(t.target), t.anchors && t.anchors.forEach((e) => n.add(e))), (t.metrics = n), r._parse(e, t);
            }
            static _parse(e, t) {
                return s.Parse(e).execute(t);
            }
        }
        (r.programs = s.programs), "undefined" != typeof window && (window.ExpressionParser = r), (e.exports = r);
    },
    function (e, t, i) {
        "use strict";
        const s = i(22);
        e.exports = class extends s {
            constructor() {
                super(...arguments);
                const e = arguments.length <= 0 ? void 0 : arguments[0];
                (this.initialValue = new Float32Array(e)), (this.target = new Float32Array(e)), (this.current = new Float32Array(e)), (this.previousValue = new Float32Array(e));
            }
            update(e, t, i) {
                for (let s = 0, n = this.target.length; s < n; s++) (this.target[s] = e[0][s] + t * (e[1][s] - e[0][s])), (this.previousValue[s] = this.current[s]), (this.current[s] += (this.target[s] - this.current[s]) * i);
                let s = this.delta(this.current, this.target);
                return s < this.epsilon && ((this.current = new Float32Array(this.target)), (s = 0)), s > this.epsilon || (0 === s && this.previousValue.some((e, t) => e !== this.current[t]));
            }
            reconcile(e, t) {
                return this.initialValue.forEach((t, i) => (this.initialValue[i] = e[0][i])), this.update(e, t, 1);
            }
            needsUpdate() {
                return this.delta(this.current, this.target) > this.epsilon;
            }
            delta(e, t) {
                let i = 0;
                for (let s = 0, n = e.length; s < n; s++) i += Math.abs(e[s] - t[s]);
                return i;
            }
            calculateEpsilon(e, t) {
                this.epsilon = e.epsilon || 0.05;
            }
            set(e) {
                throw "ArrayTargetValue does not implement a `set` method. Subclasses must overwrite";
            }
            unset(e) {
                throw "ArrayTargetValue does not implement an `unset` method. Subclasses must overwrite";
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(10);
        class n {
            constructor(e, t) {
                (this._index = 0), (this.keyframe = e), t && (this.name = t);
            }
            get start() {
                return this.keyframe.jsonProps.start;
            }
            set index(e) {
                this._index = e;
            }
            get index() {
                return this._index;
            }
        }
        e.exports = class {
            constructor(e) {
                (this.timeGroup = e), (this.chapters = []), (this.chapterNames = {}), (this.currentChapter = null), (this.tween = null), (this.destroyed = !1);
            }
            destroy() {
                (this.destroyed = !0), this.tween && !this.tween.destroyed && this.tween.remove(), (this.tween = null);
            }
            addChapter(e) {
                const { position: t, name: i } = e;
                if (void 0 === t) throw ReferenceError("Cannot add chapter without target position.");
                e._impIsFirst || 0 !== this.chapters.length || this.addChapter({ position: 0, _impIsFirst: !0 });
                let s = this.timeGroup.addKeyframe(this, { start: t, end: t, event: "Chapter" });
                this.timeGroup.forceUpdate({ waitForNextFrame: !1, silent: !0 });
                const r = new n(s, i);
                if ((this.chapters.push(r), i)) {
                    if (this.chapterNames.hasOwnProperty(i)) throw ReferenceError(`Duplicate chapter name assigned - "${i}" is already in use`);
                    this.chapterNames[i] = r;
                }
                return this.chapters.sort((e, t) => e.start - t.start).forEach((e, t) => (e.index = t)), (this.currentChapter = this.currentChapter || this.chapters[0]), r;
            }
            playToChapter(e) {
                let t;
                if (e.hasOwnProperty("index")) t = this.chapters[e.index];
                else {
                    if (!e.hasOwnProperty("name")) throw ReferenceError("Cannot play to chapter without target index or name");
                    t = this.chapterNames[e.name];
                }
                if (!t || (this.currentChapter === t && !0 !== e.force)) return;
                let i = e.ease || "easeInOutCubic";
                this.tween && this.tween.controller && (this.tween.remove(), (i = e.ease || "easeOutQuint")), this.timeGroup.timeScale(e.timeScale || 1);
                const n = void 0 !== e.duration ? e.duration : this.getDurationToChapter(t),
                    r = this.timeGroup.time(),
                    a = t.start;
                let o = !1;
                return (
                    (this.tween = this.timeGroup.anim.addTween(
                        { time: r },
                        {
                            easeFunction: i,
                            duration: n,
                            time: [r, a],
                            onStart: () => {
                                this.destroyed || this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_INITIATED, { player: this, next: t });
                            },
                            onDraw: (e) => {
                                if (this.destroyed) return;
                                let i = e.tweenProps.time.current;
                                this.timeGroup.time(i),
                                    e.keyframe.curvedT > 0.5 && !o && ((o = !0), (this.currentIndex = t.index), (this.currentChapter = t), this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_OCCURRED, { player: this, current: t }));
                            },
                            onComplete: (e) => {
                                this.destroyed || (this.timeGroup.time(e.tweenProps.time.current), this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_COMPLETED, { player: this, current: t }), this.timeGroup.paused(!0), (this.tween = null));
                            },
                        }
                    )),
                    this.tween
                );
            }
            getDurationToChapter(e) {
                const t = this.chapters[e.index - 1] || this.chapters[e.index + 1];
                return Math.abs(t.start - e.start);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(8).EventEmitterMicro,
            n = i(178),
            r = i(110),
            a = {};
        class o extends s {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t.anim) throw "Anim is no longer bundled with BubbleGum. Please pass Anim when initialize BubbleGum: `new BubbleGum(document.querySelector('main'), {anim: AnimSystem})`";
                super(),
                    (this.el = e),
                    (this.anim = t.anim),
                    (this.componentAttribute = t.attribute || "data-component-list"),
                    (this.attribute = this.componentAttribute.replace(/-./g, (e) => e[1].toUpperCase()).replace(/data(.)/, (e, t) => t.toLowerCase())),
                    (this.components = []),
                    (this.componentsInitialized = !1),
                    this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"),
                    n.add(() => {
                        this.anim.initialize().then(() => {
                            this.initComponents(), this.setupEvents(), this.components.forEach((e) => e.mounted()), this.trigger(o.EVENTS.DOM_COMPONENTS_MOUNTED);
                        });
                    });
            }
            initComponents() {
                const e = Array.prototype.slice.call(this.el.querySelectorAll(`[${this.componentAttribute}]`));
                this.el.hasAttribute(this.componentAttribute) && e.push(this.el);
                for (let t = 0; t < e.length; t++) {
                    let i = e[t],
                        s = i.getAttribute(this.componentAttribute).split(" ");
                    for (let e = 0, t = s.length; e < t; e++) {
                        let t = s[e];
                        "" !== t && " " !== t && this.addComponent({ el: i, componentName: t });
                    }
                }
                this.componentsInitialized = !0;
            }
            setupEvents() {
                (this.onResizeDebounced = this.onResizeDebounced.bind(this)),
                    (this.onResizeImmediate = this.onResizeImmediate.bind(this)),
                    (this.onBreakpointChange = this.onBreakpointChange.bind(this)),
                    this.anim.on(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate),
                    this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced),
                    this.anim.on(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange);
            }
            addComponent(e) {
                const { el: t, componentName: i, data: s } = e;
                if (!r.hasOwnProperty(i)) throw "BubbleGum::addComponent could not add component to '" + t.className + "'. No component type '" + i + "' found!";
                const n = r[i];
                if (!o.componentIsSupported(n, i)) return void 0 === a[i] && (console.log("BubbleGum::addComponent unsupported component '" + i + "'. Reason: '" + i + ".IS_SUPPORTED' returned false"), (a[i] = !0)), null;
                let l = t.dataset[this.attribute] || "";
                l.includes(i) || (t.dataset[this.attribute] = l.split(" ").concat(i).join(" "));
                let h = new n({ el: t, data: s, componentName: e.componentName, gum: this, pageMetrics: this.anim.model.pageMetrics });
                return this.components.push(h), this.componentsInitialized && h.mounted(), h;
            }
            removeComponent(e) {
                const t = this.components.indexOf(e);
                -1 !== t &&
                    (this.components.splice(t, 1),
                    (e.el.dataset[this.attribute] = e.el.dataset[this.attribute]
                        .split(" ")
                        .filter((t) => t !== e.componentName)
                        .join(" ")),
                    e.destroy());
            }
            getComponentOfType(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                const i = `[${this.componentAttribute}*=${e}]`,
                    s = t.matches(i) ? t : t.querySelector(i);
                return s ? this.components.find((t) => t instanceof r[e] && t.el === s) : null;
            }
            getComponentsOfType(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                const i = `[${this.componentAttribute}*=${e}]`,
                    s = t.matches(i) ? [t] : Array.from(t.querySelectorAll(i));
                return this.components.filter((t) => t instanceof r[e] && s.includes(t.el));
            }
            getComponentsForElement(e) {
                return this.components.filter((t) => t.el === e);
            }
            onResizeImmediate() {
                this.components.forEach((e) => e.onResizeImmediate(this.anim.model.pageMetrics));
            }
            onResizeDebounced() {
                this.components.forEach((e) => e.onResizeDebounced(this.anim.model.pageMetrics));
            }
            onBreakpointChange() {
                this.components.forEach((e) => e.onBreakpointChange(this.anim.model.pageMetrics));
            }
            static componentIsSupported(e, t) {
                const i = e.IS_SUPPORTED;
                if (void 0 === i) return !0;
                if ("function" != typeof i) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
                const s = e.IS_SUPPORTED();
                return void 0 === s ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : s;
            }
        }
        (o.EVENTS = { DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED" }), (e.exports = o);
    },
    function (e, t, i) {
        "use strict";
        e.exports = { BaseComponent: i(3) };
    },
    function (e, t, i) {
        "use strict";
        class s {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (this.options = e),
                    "loading" === document.readyState
                        ? document.addEventListener("readystatechange", (e) => {
                              "interactive" === document.readyState && this._init();
                          })
                        : this._init();
            }
            _init() {
                if (((this._images = Array.from(document.querySelectorAll(`*[${s.DATA_ATTRIBUTE}]`))), (this.AnimSystem = this._findAnim()), null === this.AnimSystem)) return null;
                this._addKeyframesToImages();
            }
            _defineKeyframeOptions() {
                const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null).getAttribute(s.DATA_DOWNLOAD_AREA_KEYFRAME) || "{}";
                return Object.assign({}, { start: "t - 200vh", end: "b + 100vh", event: "AnimLazyImage" }, JSON.parse(e));
            }
            _addKeyframesToImages() {
                (this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body)),
                    this._images.forEach((e) => {
                        this.AnimSystem.getGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(e));
                        let t = this._defineKeyframeOptions(e);
                        this._scrollGroup.addKeyframe(e, t).controller.once("AnimLazyImage:enter", () => {
                            this._imageIsInLoadRange(e);
                        });
                    });
            }
            _cleanUpImageAttributes(e) {
                let t = !1;
                try {
                    t = this._scrollGroup.getControllerForTarget(e).getNearestKeyframeForAttribute("AnimLazyImage").isCurrentlyInRange;
                } catch (e) {
                    t = !1;
                }
                t || e.setAttribute(s.DATA_ATTRIBUTE, "");
            }
            _downloadingImageAttributes(e) {
                e.removeAttribute(s.DATA_ATTRIBUTE);
            }
            _imageIsInLoadRange(e) {
                this._downloadImage(e);
            }
            _downloadImage(e) {
                this._downloadingImageAttributes(e);
            }
            _findAnim() {
                var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
                return (
                    e.map((e) => (e._animInfo ? e._animInfo.group : null)).filter((e) => null !== e),
                    e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("AnimLazyImage: AnimSystem not found, please initialize anim before instantiating"), null)
                );
            }
        }
        (s.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe"), (s.DATA_ATTRIBUTE = "data-anim-lazy-image"), (e.exports = s);
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(180)),
            r = s(i(181)),
            a = s(i(182));
        t.default = {
            PageOverlay: { ClassNames: ["modal-page-overlay"] },
            FullBleed: { ClassNames: ["modal-full-bleed"] },
            Open: { Document: { ClassNames: ["has-modal"] }, Container: { ClassNames: ["modal-open"] } },
            Close: { Selector: "[data-modal-close]" },
            Elements: {
                container: { Attributes: { class: "modal" }, Template: r.default },
                contentContainer: { Selector: "[data-modal-element-content-container]" },
                closeButton: { Attributes: { class: "modal-close-button", "data-modal-close": "", "aria-label": "Close" }, ParentSelector: "[data-modal-close-button-parent]", Template: a.default },
                closeIcon: { Attributes: { class: "modal-close-icon", "data-modal-close": "" } },
            },
            DialogRole: { Selector: "[data-modal-element-overlay]", Attributes: { "aria-modal": "true", role: "dialog", tabindex: "-1", "aria-hidden": "true" } },
            Keyboard: { close: { keys: [n.default.ESCAPE] }, open: { keys: [] } },
            Events: { CONTENT_APPENDED: "contentappended", RENDERED: "rendered", WILLOPEN: "willopen", OPEN: "open", WILLCLOSE: "willclose", CLOSE: "close", CONTENT_REMOVED: "contentremoved" },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(184),
            n = i(4),
            r = i(79);
        class a extends s.PictureLazyLoading {
            _addKeyframesToImages() {
                this._pictures.forEach((e) => {
                    (e.__scrollGroup = this.AnimSystem.getScrollGroupForTarget(document.body)), this.AnimSystem.getScrollGroupForTarget(e) && (e.__scrollGroup = this.AnimSystem.getScrollGroupForTarget(e));
                    const t = this._defineKeyframeOptions(e);
                    if (e.closest(`[${n.CONTENT_WRAPPER_ATTRIB}]`)) e[r.LAZY_LOAD_STORED_OPTIONS_NAME] = t;
                    else {
                        e.__scrollGroup.addKeyframe(e, t).controller.once("PictureLazyLoading:enter", () => {
                            this._imageIsInLoadRange(e);
                        });
                    }
                });
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
            nodeName: { INPUT: "input", SELECT: "select", TEXTAREA: "textarea", BUTTON: "button", OPTGROUP: "optgroup", OPTION: "option", MENUITEM: "menuitem", FIELDSET: "fieldset", OBJECT: "object", A: "a" },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t) {
            let i;
            (i = e instanceof NodeList ? e : [].concat(e)),
                (t = Array.isArray(t) ? t : [].concat(t)),
                i.forEach((e) => {
                    t.forEach((t) => {
                        e.removeAttribute(t);
                    });
                });
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(9),
            n = i(1),
            r = i(200),
            a = i(201),
            o = i(202),
            l = i(203);
        e.exports = class {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("number" != typeof e || !isFinite(e)) throw new TypeError(`Clip duration must be a finite number; got "${e}"`);
                "function" == typeof t && (t = { draw: t }),
                    (this.ease = a(t.ease)),
                    (this.update = a(t.update)),
                    (this.draw = a(t.draw)),
                    (this.prepare = a(t.prepare)),
                    (this.finish = a(t.finish)),
                    (this._duration = 1e3 * e),
                    (this._startTime = null),
                    (this._isPrepared = !1),
                    (this._promise = null),
                    (this._isPlaying = !1);
            }
            get isReversed() {
                return this._duration < 0;
            }
            get isComplete() {
                const e = this.progress;
                return (!this.isReversed && e >= 1) || (this.isReversed && e <= 0);
            }
            get progress() {
                if (0 === this._duration) return 1;
                let e = (this.lastFrameTime - this._startTime) / this._duration;
                return this.isReversed && (e = 1 + e), l(e, 0, 1);
            }
            get easedProgress() {
                return this.ease ? this.ease(this.progress) : this.progress;
            }
            _run(e, t) {
                (this.lastFrameTime = Date.now()), null === this._startTime && (this._startTime = this.lastFrameTime);
                const i = this.easedProgress;
                this.update && s(() => this._isPlaying && this.update(i)),
                    n(() => {
                        this._isPlaying && (this.draw && this.draw(i), this.isComplete ? o(n, [this.finish, t]) : this._run(this, t));
                    });
            }
            play() {
                if ("function" != typeof this.draw) throw new Error('Clip must be given a "draw" function as an option or have its "draw" method overriden.');
                return (
                    (this._isPlaying = !0),
                    this._promise ||
                        (this._promise = new Promise((e, t) => {
                            !this._isPrepared && this.prepare
                                ? ((this._isPrepared = !0),
                                  n(() =>
                                      r(this.prepare(), () => {
                                          this._run(this, e);
                                      })
                                  ))
                                : this._run(this, e);
                        })),
                    this._promise
                );
            }
            destroy() {
                (this._isPlaying = !1), (this.draw = this.finish = this.update = this.prepare = null);
            }
            static play() {
                return new this(...arguments).play();
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(32),
            n = i(85),
            r = i(86),
            a = i(87),
            o = i(118),
            l = i(119),
            h = l.prototype,
            d = function (e, t) {
                (t = t || {}), l.call(this, e, { selector: t.selector || "*[role=" + n.OPTION + "]", state: t.state || s.SELECTED });
            },
            c = (d.prototype = Object.create(h));
        (c._setTabbingByIndex = function (e) {
            var t = this._navItems[e];
            o(t.getAttribute(this._state)) ? ((this.focusedNavItemIndex = e), (this.selectedNavitemIndex = e), this._enableElement(t)) : this._disableElement(t);
        }),
            (c.setSelectedItemByIndex = function (e, t) {
                isNaN(this.selectedNavitemIndex) || this._disableElement(this._navItems[this.selectedNavitemIndex]), h.setSelectedItemByIndex.call(this, e, t), this._enableElement(this._navItems[this.selectedNavitemIndex]);
            }),
            (c.addNavItem = function (e) {
                e && e.nodeType && this._navItems.indexOf(e) < 0 && (o(e.getAttribute(s.DISABLED)) || this._disableElement(e), this._navItems.push(e));
            }),
            (c._arrowDown = function (e, t) {
                h._arrowDown.call(this, e, t, !0), this.selectOption(t);
            }),
            (c._enableElement = function (e) {
                r(e), e.setAttribute(this._state, "true");
            }),
            (c._disableElement = function (e) {
                a(e), e.setAttribute(this._state, "false");
            }),
            (c.selectOption = function (e) {
                a(this._navItems[this.selectedNavitemIndex]), h.selectOption.call(this, e), r(this._navItems[this.focusedNavItemIndex]);
            }),
            (e.exports = d);
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            return "string" == typeof e ? "true" === (e = e.toLowerCase()) : e;
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(87),
            n = i(86),
            r = i(118),
            a = i(8).EventEmitterMicro,
            o = a.prototype,
            l = i(32),
            h = i(89),
            d = function (e, t) {
                a.call(this), (this._options = t || {}), (this._selector = t.selector || ".navitem"), (this._allowMultiSelection = t.multiSelection || !1);
                var i = t.state || l.SELECTED;
                (this.el = e),
                    (this._navItems = e.querySelectorAll(this._selector)),
                    (this._navItems = Array.prototype.slice.call(this._navItems)),
                    (this._state = i),
                    (this._navKeys = {}),
                    (this.selectOption = this.selectOption.bind(this)),
                    (this._handleKeyDown = this._handleKeyDown.bind(this)),
                    this._setup();
            };
        (d.ONSELECT = "onSelect"), (d.ONFOCUS = "onFocus");
        var c = (d.prototype = Object.create(o));
        (c._setup = function () {
            for (var e = [h.ARROW_DOWN, h.ARROW_RIGHT], t = [h.ARROW_UP, h.ARROW_LEFT], i = [h.ENTER, h.SPACEBAR], s = 0; s < e.length; s++)
                this.addNavkey(e[s], this._arrowDown.bind(this, !0)), this.addNavkey(t[s], this._arrowDown.bind(this, null)), this.addNavkey(i[s], this.selectOption);
            this._setupNavItems();
        }),
            (c._setupNavItems = function () {
                if (this._navItems.length) {
                    for (var e = 0; e < this._navItems.length; e++) this._setTabbingByIndex(e);
                    (void 0 !== this.focusedNavItemIndex && void 0 !== this.selectedNavitemIndex) || this.setSelectedItemByIndex(0, !0);
                }
            }),
            (c._setTabbingByIndex = function (e) {
                var t = this._navItems[e];
                r(t.getAttribute(this._state)) && ((this.focusedNavItemIndex = e), (this.selectedNavitemIndex = e)), r(t.getAttribute(l.DISABLED)) ? s(t) : n(t);
            }),
            (c.start = function () {
                this._navItems.length < 1 || (this.el.addEventListener("keydown", this._handleKeyDown), this.el.addEventListener("click", this.selectOption));
            }),
            (c.stop = function () {
                this.el.removeEventListener("keydown", this._handleKeyDown), this.el.removeEventListener("click", this.selectOption);
            }),
            (c._handleKeyDown = function (e) {
                if (e.ctrlKey || e.altKey || e.metaKey) return !0;
                this._navKeys[e.keyCode] && this._navKeys[e.keyCode](e);
            }),
            (c._arrowDown = function (e, t, i) {
                t.preventDefault(),
                    (this.previousNavItemIndex = this.focusedNavItemIndex),
                    (this.focusedNavItemIndex = this._calculateIndex(e, this.focusedNavItemIndex)),
                    this._navItems[this.focusedNavItemIndex].focus(),
                    i || this.trigger(d.ONFOCUS, { event: t, index: this.focusedNavItemIndex, el: this._navItems[this.focusedNavItemIndex] });
            }),
            (c.selectOption = function (e, t) {
                e.preventDefault();
                var i = this._navItems.indexOf(document.activeElement);
                i > -1 && document.activeElement !== this._navItems[this.focusedNavItemIndex] && (this.focusedNavItemIndex = i),
                    this._allowMultiSelection ? this._toggleState() : (this._navItems[this.selectedNavitemIndex].setAttribute(this._state, "false"), this._navItems[this.focusedNavItemIndex].setAttribute(this._state, "true")),
                    (this.selectedNavitemIndex = this.focusedNavItemIndex),
                    t || this.trigger(d.ONSELECT, { event: e, index: this.selectedNavitemIndex, el: this._navItems[this.selectedNavitemIndex] });
            }),
            (c._toggleState = function () {
                var e = this._navItems[this.focusedNavItemIndex].getAttribute(this._state);
                r(e) ? this._navItems[this.focusedNavItemIndex].setAttribute(this._state, "false") : this._navItems[this.focusedNavItemIndex].setAttribute(this._state, "true");
            }),
            (c._calculateIndex = function (e, t) {
                var i = t;
                if (!0 === e) {
                    if (((i = ++i >= this._navItems.length ? 0 : i), !r(this._navItems[i].getAttribute(l.DISABLED)) || this._navItems[i].hasAttribute("disabled"))) return i;
                } else if (((i = --i < 0 ? this._navItems.length - 1 : i), !r(this._navItems[i].getAttribute(l.DISABLED)) || this._navItems[i].hasAttribute("disabled"))) return i;
                return this._calculateIndex(e, i);
            }),
            (c.updateNavItems = function () {
                var e = this.el.querySelectorAll(this._selector);
                this._navItems = Array.prototype.slice.call(e);
            }),
            (c.addNavItem = function (e) {
                e && e.nodeType && this._navItems.indexOf(e) < 0 && (r(e.getAttribute(l.DISABLED)) || n(e), this._navItems.push(e));
            }),
            (c.setSelectedItemByIndex = function (e, t) {
                this._allowMultiSelection || isNaN(this.selectedNavitemIndex) || this._navItems[this.selectedNavitemIndex].setAttribute(this._state, "false"),
                    (this.focusedNavItemIndex = e),
                    (this.selectedNavitemIndex = e),
                    this._navItems[this.selectedNavitemIndex].setAttribute(this._state, "true"),
                    t || this.trigger(d.ONSELECT, { event: null, index: this.focusedNavItemIndex, el: this._navItems[this.focusedNavItemIndex] });
            }),
            (c.getSelectedItem = function () {
                return this._navItems[this.selectedNavitemIndex];
            }),
            (c.getFocusedItem = function (e) {
                return this._navItems[this.focusedNavItemIndex];
            }),
            (c.addNavkey = function (e, t) {
                "function" == typeof t && "number" == typeof e ? (this._navKeys[e] = t) : console.warn("incorrect types arguments were passed");
            }),
            (c.removeNavkey = function (e) {
                delete this._navKeys[e];
            }),
            (c.destroy = function () {
                for (var e in (o.destroy.call(this),
                this.stop(),
                (this.el = null),
                (this._options = null),
                (this._selector = null),
                (this.focusedNavItemIndex = null),
                (this.selectedNavitemIndex = null),
                (this._navItems = null),
                (this._state = null),
                (this.selectOption = null),
                (this._handleKeyDown = null),
                this._navKeys))
                    this._navKeys.hasOwnProperty(e) && this.removeNavkey(e);
                this._navKeys = null;
            }),
            (e.exports = d);
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTRAPHE: 222,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191,
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.pluginCache = t.default = void 0);
        var n = s(i(214)),
            r = s(i(215)),
            a = s(i(12)),
            o = s(i(226));
        const l = (t.pluginCache = {}),
            h = [];
        let d = 1;
        class c extends n.default {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                super(), (this.el = e.el || document.createElement("video")), (this.id = e.id || this.el.id || this.el.dataset.inlineMediaId || "inlineMedia-" + d++);
                const t = (e.plugins || []).concat(o.default);
                this._initPlugins(t, e), h.push(this);
            }
            async load(e) {
                for (const t of this.plugins) if ("function" == typeof t.load) return t.load(e);
            }
            abortLoad() {
                for (const e of this.plugins)
                    if ("function" == typeof e.abortLoad) {
                        e.abortLoad();
                        break;
                    }
            }
            async play() {
                for (const e of this.plugins) if ("function" == typeof e.play) return e.play();
            }
            get src() {
                for (const e of this.plugins) if (e.src) return e.src;
                return "";
            }
            get playbackState() {
                for (const e of this.plugins) {
                    const t = e.playbackState;
                    if (void 0 !== t) return t;
                }
            }
            get loadingState() {
                for (const e of this.plugins) {
                    const t = e.loadingState;
                    if (void 0 !== t) return t;
                }
            }
            _initPlugins(e, t) {
                (this.plugins = []), (this.pluginMap = new Map());
                for (let i of e) {
                    if ("string" == typeof i) {
                        if (!l[i]) throw new Error(`Trying to use undefined Plugin named: ${i} . Ensure you call Media.addPlugin() first!`);
                        i = l[i];
                    }
                    if (!1 !== i.isSupported) {
                        const e = new i(Object.assign({ media: this }, t));
                        this.plugins.push(e), this.pluginMap.set(i, e);
                    }
                }
                this.trigger(a.default.MOUNTED);
            }
            destroy() {
                if (!this._destroyed) {
                    for (const e of this.plugins) "function" == typeof e.destroy && e.destroy();
                    super.destroy(), h.splice(h.indexOf(this), 1), (this._destroyed = !0);
                }
            }
            static get medias() {
                return h;
            }
            static addPlugin(e, t) {
                l[e] = t;
            }
            static async autoInitialize() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, r.default)(e, t);
            }
        }
        t.default = c;
    },
    function (e, t, i) {
        "use strict";
        function s(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
                i = new WeakMap();
            return (s = function (e) {
                return e ? i : t;
            })(e);
        }
        function n(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
            var i = s(t);
            if (i && i.has(e)) return i.get(e);
            var n = { __proto__: null },
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : (n[a] = e[a]);
                }
            return (n.default = e), i && i.set(e, n), n;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        const r = {
            AnimLoad: async () => Promise.resolve().then(() => n(i(123))),
            AnimPlay: async () => Promise.resolve().then(() => n(i(124))),
            FeatureObserver: async () => Promise.resolve().then(() => n(i(218))),
            LoadTimeout: async () => Promise.resolve().then(() => n(i(221))),
            PlayPauseButton: async () => Promise.resolve().then(() => n(i(222))),
            ViewportSource: async () => Promise.resolve().then(() => n(i(125))),
        };
        t.default = r;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(92)),
            r = s(i(41)),
            a = s(i(11));
        const o = { start: "t - 200vh", end: "b + 100vh" };
        class l extends a.default {
            constructor(e) {
                super(e),
                    (this._anim = e.anim),
                    (this._container = e.container || this.media.el.parentElement),
                    (this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el)),
                    this._initialize();
            }
            _initialize() {
                (this._onLoadKeyframeEnter = this._onLoadKeyframeEnter.bind(this)), (this._onLoadKeyframeExit = this._onLoadKeyframeExit.bind(this));
                const e = (0, r.default)(this.media.el.dataset, this.options, "loadKeyframe", o);
                e.event || (e.event = "inline-media-load-kf"),
                    (this._loadKeyframe = this._scrollGroup.addKeyframe(this.media.el, e)),
                    this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter),
                    this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit);
            }
            get loadKeyframe() {
                return this._loadKeyframe;
            }
            async _onLoadKeyframeEnter(e) {
                try {
                    await this.media.load(), (this._loaded = !0);
                } catch (e) {
                    (0, n.default)("AnimLoad: Load error occured");
                }
            }
            _onLoadKeyframeExit(e) {}
            destroy() {
                this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit), super.destroy();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(12)),
            r = s(i(41)),
            a = s(i(11));
        const o = { start: "t - 100vh", end: "b" };
        class l extends a.default {
            constructor(e) {
                super(e),
                    (this._anim = e.anim),
                    (this._container = e.container || this.media.el.parentElement),
                    (this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el)),
                    this._initialize();
            }
            _initialize() {
                (this._onPlayKeyframeEnter = this._onPlayKeyframeEnter.bind(this)), (this._onPlayKeyframeExit = this._onPlayKeyframeExit.bind(this));
                const e = this.media.el.dataset;
                if (((this._autoPlayWithReducedMotion = (0, r.default)(e, this.options, "autoPlayWithReducedMotion", !1)), !this._autoPlayWithReducedMotion && l.prefersReducedMotion)) return;
                (this._pauseOnExit = (0, r.default)(e, this.options, "pauseOnExit", !1)), (this._resetOnExit = (0, r.default)(e, this.options, "resetOnExit", !1));
                const t = (0, r.default)(e, this.options, "playKeyframe", o);
                t.event || (t.event = "inline-media-play-kf"),
                    (this._playKeyframe = this._scrollGroup.addKeyframe(this.media.el, t)),
                    this._playKeyframe.controller.on(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter),
                    this._playKeyframe.controller.on(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit),
                    (this._onLoadStart = this._onLoadStart.bind(this)),
                    this.media.on(n.default.MEDIA_LOAD_START, this._onLoadStart);
            }
            _onLoadStart() {
                this._loaded = !1;
            }
            async _onPlayKeyframeEnter(e) {
                if (((this._inFrame = !0), !this._paused && (this._loaded || (await this.media.load(), (this._loaded = !0)), this._inFrame)))
                    try {
                        await this.media.play();
                    } catch (e) {}
            }
            _onPlayKeyframeExit(e) {
                (this._inFrame = !1),
                    this._loaded && this.media.el.paused && !this.media.el.ended ? (this._paused = !0) : this._pauseOnExit && ((this._paused = !1), this.media.el.pause()),
                    this._loaded && this._resetOnExit && (this.media.el.currentTime = 0);
            }
            get playKeyframe() {
                return this._playKeyframe;
            }
            destroy() {
                this._playKeyframe.controller.off(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter),
                    this._playKeyframe.controller.off(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit),
                    this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart),
                    super.destroy();
            }
            static get prefersReducedMotion() {
                return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(42)),
            r = s(i(11)),
            a = s(i(126)),
            o = s(i(224));
        class l extends r.default {
            constructor(e) {
                super(e), (this._cachedPlaying = null), this._initialize();
            }
            _initialize() {
                this._onBreakpointChange = this._onBreakpointChange.bind(this);
                const e = Object.assign({ callback: this._onBreakpointChange }, this.options);
                (this._breakpointDetect = e.anim ? new o.default(e) : new a.default(e)), (this._currentTime = 0);
                const t = this.media.el.dataset;
                (this._basePath = this.options.basePath || t.inlineMediaBasepath || "./"), this._onBreakpointChange();
            }
            _onBreakpointChange() {
                this._currentBreakpoint = this._breakpointDetect.breakpoint;
                const e = window.devicePixelRatio > 1 ? `${this._currentBreakpoint}_2x` : this._currentBreakpoint,
                    t = `${this._basePath}${e}.mp4`;
                this._swapSrc(t);
            }
            get src() {
                return this._src;
            }
            async _swapSrc(e) {
                if (((this._src = e), this.media.loadingState === n.default.EMPTY)) return;
                const t = null !== this._cachedPlaying ? this._cachedPlaying : !this.media.el.paused;
                return (
                    this.media.loadingState === n.default.LOADED && (this._currentTime = this.media.el.currentTime),
                    (this._cachedPlaying = t),
                    await this.media.load(`${e}#t=${this._currentTime}`),
                    (this._cachedPlaying = null),
                    t ? this.media.play() : Promise.resolve()
                );
            }
            destroy() {
                this._breakpointDetect.destroy(), super.destroy();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(223));
        t.default = class {
            constructor(e) {
                (this._breakpoints = e.breakpoints || n.default), (this.options = e), this._initialize();
            }
            _initialize() {
                (this._updateBreakpoint = this._updateBreakpoint.bind(this)),
                    (this._callback = this.options.callback),
                    (this._mediaQueries = Object.keys(this._breakpoints).map((e) => window.matchMedia(`(min-width: ${this._breakpoints[e]}px)`))),
                    this._addEventListeners(),
                    this._updateBreakpoint();
            }
            _addEventListeners() {
                for (const e of this._mediaQueries) e.addListener(this._updateBreakpoint);
            }
            _removeEventListeners() {
                for (const e of this._mediaQueries) e.removeListener(this._updateBreakpoint);
            }
            _updateBreakpoint() {
                const e = Object.keys(this._breakpoints);
                let t = e[0];
                for (let i = 1; i < e.length; i++) {
                    if (!this._mediaQueries[i].matches) break;
                    t = e[i];
                }
                let i = !1;
                this._currentBreakpoint && this._currentBreakpoint !== t && (i = !0), (this._currentBreakpoint = t), i && this._callback();
            }
            get breakpoint() {
                return this._currentBreakpoint;
            }
            destroy() {
                this._removeEventListeners();
            }
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            LOAD_START: "loadstart",
            LOADED_DATA: "loadeddata",
            LOADED_METADATA: "loadedmetadata",
            CAN_PLAY: "canplay",
            CAN_PLAY_THROUGH: "canplaythrough",
            PLAY: "play",
            PLAYING: "playing",
            PAUSE: "pause",
            WAITING: "waiting",
            SEEKING: "seeking",
            SEEKED: "seeked",
            ERROR: "error",
            ENDED: "ended",
            ABORT: "abort",
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(92)),
            r = s(i(17)),
            a = s(i(42)),
            o = s(i(12)),
            l = s(i(127)),
            h = s(i(11));
        const d = l.default.CAN_PLAY_THROUGH,
            { HAVE_NOTHING: c, HAVE_CURRENT_DATA: u, NETWORK_EMPTY: m } = HTMLMediaElement;
        class p extends h.default {
            constructor(e) {
                super(e), (this._loadCompleteEvent = e.loadCompleteEvent || d), (this._onLoaded = this._onLoaded.bind(this)), (this._onError = this._onError.bind(this));
            }
            mounted() {
                "none" !== this.media.el.preload &&
                    this.media.src &&
                    (async () => {
                        try {
                            await this.media.load(this.media.src);
                        } catch (e) {
                            (0, n.default)(`auto load of ${this.media.src} failed or was aborted with err:${e}`);
                        }
                    })();
            }
            async load(e) {
                if ((void 0 === e && this.media.src && (e = this.media.src), !e)) throw new Error("No Media src was specified, can not fullfill load() request");
                return (
                    e !== this._currentLoadUrl &&
                        (this.media.trigger(o.default.MEDIA_LOAD_START),
                        (this._currentLoadUrl = e),
                        (this._pendingPromise = new Promise((t, i) => {
                            (this._resolvePendingPromise = () => {
                                (this._resolvePendingPromise = null), (this._rejectPendingPromise = null), t();
                            }),
                                (this._rejectPendingPromise = () => {
                                    (this._resolvePendingPromise = null), (this._rejectPendingPromise = null), i();
                                }),
                                this.media.el.addEventListener(this._loadCompleteEvent, this._onLoaded),
                                r.default.browser.firefox && this._loadCompleteEvent === l.default.CAN_PLAY_THROUGH && this.media.el.addEventListener(l.default.CAN_PLAY, this._onLoaded),
                                this.media.el.addEventListener(l.default.ERROR, this._onError),
                                this.media.el.addEventListener(l.default.ABORT, this._onError),
                                (this.media.el.src = e),
                                this.media.el.load();
                        }))),
                    this._pendingPromise
                );
            }
            _clearLoadListeners() {
                this.media.el.removeEventListener(this._loadCompleteEvent, this._onLoaded),
                    this.media.el.removeEventListener(l.default.CAN_PLAY, this._onLoaded),
                    this.media.el.removeEventListener(l.default.ERROR, this._onError),
                    this.media.el.removeEventListener(l.default.ABORT, this._onError);
            }
            _onLoaded() {
                this._clearLoadListeners(), this.media.trigger(o.default.LOADING_STATE_CHANGE), this.media.trigger(o.default.MEDIA_LOAD_COMPLETE), this._resolvePendingPromise();
            }
            _onError() {
                this._clearLoadListeners(), this.media.trigger(o.default.MEDIA_LOAD_ERROR), this.media.trigger(o.default.LOADING_STATE_CHANGE), this._rejectPendingPromise();
            }
            abortLoad() {
                this._rejectPendingPromise && this._rejectPendingPromise();
            }
            get loadingState() {
                return this.media.el.error
                    ? a.default.ERROR
                    : this.media.el.networkState === m && this.media.el.readyState === c
                    ? a.default.EMPTY
                    : this.media.el.readyState < u
                    ? this.media.el.buffered.length && 0 === this.media.el.buffered.start(0) && this.media.el.buffered.end(0) === this.media.el.duration
                        ? a.default.LOADED
                        : a.default.LOADING
                    : a.default.LOADED;
            }
            destroy() {
                this._clearLoadListeners(), super.destroy();
            }
        }
        t.default = p;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = i(53),
            r = s(i(41));
        const a = { start: "t - 200vh", end: "b + 100vh" };
        class o extends n.Plugin {
            constructor(e) {
                super(e),
                    (this.el = e.el),
                    (this._anim = e.anim),
                    (this._container = e.container || this.media.el.parentElement),
                    (this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el)),
                    (this._onRangeKeyframeEnter = this._onRangeKeyframeEnter.bind(this)),
                    (this._onResizeImmediate = this._onResizeImmediate.bind(this)),
                    (this._onResizeDebounced = this._onResizeDebounced.bind(this)),
                    (this._onBreakpointChange = this._onBreakpointChange.bind(this)),
                    this._anim.on("ON_BREAKPOINT_CHANGE", this._onBreakpointChange),
                    this._anim.on("ON_RESIZE_DEBOUNCED", this._onResizeDebounced);
                const t = (0, r.default)(this.media.el.dataset, this.options, "rangeKeyframe", a);
                t.event || (t.event = "inline-media-range-kf"), (this._rangeKeyframe = this._scrollGroup.addKeyframe(this.media.el, t)), this._rangeKeyframe.controller.on(`${this._rangeKeyframe.event}:enter`, this._onRangeKeyframeEnter);
            }
            mounted() {
                (this.isAtLeastSafari15minor5 = document.documentElement.classList.contains("safari-15-5-or-up")), this.applyObjectFitFix();
            }
            destroy() {
                this.removeObjectFitStyles(),
                    this._anim.off("ON_BREAKPOINT_CHANGE", this._onBreakpointChange),
                    this._anim.off("ON_RESIZE_DEBOUNCED", this._onResizeDebounced),
                    this._rangeKeyframe.controller && this._rangeKeyframe.controller.off(`${this._rangeKeyframe.event}:enter`, this._onRangeKeyframeEnter),
                    super.destroy();
            }
            applyObjectFitFix() {
                this.isAtLeastSafari15minor5 && (this._anim.on("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.removeObjectFitStyles(), this.forceVideoSizeToContainer());
            }
            removeObjectFitStyles() {
                (this.el.style.minHeight = 0), (this.el.style.objectFit = "fill");
            }
            forceVideoSizeToContainer() {
                const { offsetWidth: e, offsetHeight: t } = this.el.parentElement;
                (this.el.style.width = `${e}px`), (this.el.style.height = `${t}px`);
            }
            _onResizeImmediate() {
                "loading-empty" !== this.media.loadingState &&
                    "loading-error" !== this.media.loadingState &&
                    (this._anim.off("ON_RESIZE_IMMEDIATE", this._onResizeImmediate),
                    this.el.style.removeProperty("min-height"),
                    this.el.style.removeProperty("object-fit"),
                    this.el.style.removeProperty("width"),
                    this.el.style.removeProperty("height"));
            }
            _onResizeDebounced() {
                ("loading-empty" !== this.media.loadingState && "loading-error" !== this.media.loadingState) || (this._anim.off("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.applyObjectFitFix());
            }
            _onBreakpointChange() {
                this._anim.off("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.applyObjectFitFix();
            }
            _onRangeKeyframeEnter(e) {
                this.applyObjectFitFix();
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(123));
        class r extends n.default {
            destroy() {
                this._loadKeyframe &&
                    !this.loadKeyframe.destroyed &&
                    (this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit));
            }
        }
        t.default = r;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = i(25),
            r = s(i(125)),
            a = s(i(41)),
            o = i(16),
            l = i(30);
        class h extends r.default {
            _initialize() {
                const e = this.media.el.dataset;
                (this._retinaEnabled = (0, a.default)(e, this.options, "retinaEnabled", !0)),
                    (this._anim = this.options.anim),
                    (this._componentEl = this.options.componentEl || this.media.el.closest(l.SELECTOR_COMPONENT_CONTAINER)),
                    super._initialize();
            }
            _onBreakpointChange() {
                if (this._currentBreakpoint) return this._breakpointDetect && this._breakpointDetect.destroy(), void this._applyFallback();
                this._currentBreakpoint = this._breakpointDetect.breakpoint;
                const e = window.devicePixelRatio > 1 && this._retinaEnabled ? `${this._currentBreakpoint}_2x` : this._currentBreakpoint,
                    t = `${this._basePath}${e}.mp4`;
                this._swapSrc(t);
            }
            _applyFallback() {
                this._componentEl ? this._componentEl.classList.add(l.FALLBACK_CLASSNAME) : o.DevLogger.warn(`ViewportSourceOnce plugin is missing a reference to a containing element: ${this}`),
                    (0, n.update)(() => {
                        this.media.destroy(), (0, n.draw)(() => this._anim.forceUpdate());
                    });
            }
        }
        t.default = h;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(6)),
            r = s(i(239)),
            a = s(i(112)),
            o = s(i(240)),
            l = s(i(241)),
            h = s(i(242));
        const d = ["beforeCreate", "created", "beforeMount", "mounted", "onWillOpen", "onOpen", "onWillClose", "onClose", "onResizeImmediate", "onBreakpointChange", "onResizeDebounced", "destroy"],
            c = { attributes: {} };
        class u extends n.default {
            constructor(e) {
                var t;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                super(i),
                    (t = this),
                    (this.elements = {}),
                    (this.elements.content = e),
                    (this.options = i),
                    (this.opened = !1),
                    (this.model = Object.assign({}, JSON.parse(JSON.stringify(a.default)))),
                    (this.templates = {}),
                    d.forEach((e) => {
                        this[e] = function () {
                            for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                            t[`__${e}`] && t[`__${e}`].forEach((e) => e.apply(t, s));
                        };
                    }),
                    this._bindEvents(),
                    ["beforeCreate", "created", "beforeMount"].forEach((e) => this[e](i));
            }
            appendContent(e, t) {
                (0, r.default)(e) && (t = t && (0, r.default)(t) ? t : this.elements.contentContainer).appendChild(e);
            }
            removeContent(e) {
                e ? (this.elements.container.contains(e) && e.remove(), this.trigger(this.model.Events.CONTENT_REMOVED)) : this._emptyContent();
            }
            scrollToModalTop() {
                this.elements.container.scrollTop = 0;
            }
            _emptyContent() {
                this.elements.contentContainer.innerHTML = "";
            }
            _bindEvents() {
                this.on(this.model.Events.WILLOPEN, this.onWillOpen), this.on(this.model.Events.OPEN, this.onOpen), this.on(this.model.Events.WILLCLOSE, this.onWillClose), this.on(this.model.Events.CLOSE, this.onClose);
            }
            _releaseEvents() {
                this.off(this.model.Events.WILLOPEN, this.onWillOpen), this.off(this.model.Events.OPEN, this.onOpen), this.off(this.model.Events.WILLCLOSE, this.onwillClose), this.off(this.model.Events.CLOSE, this.onClose);
            }
            static withMixins() {
                const e = class extends u {},
                    t = e.prototype;
                for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                return (
                    [o.default, ...s, h.default, l.default].forEach((e) => {
                        for (const i in e) d.includes(i) ? ((t[`__${i}`] = t[`__${i}`] || []), t[`__${i}`].push(e[i])) : (t[i] = e[i]);
                    }),
                    e
                );
            }
        }
        t.default = u;
    },
    function (e, t, i) {
        "use strict";
        var s = i(33),
            n = i(134),
            r = i(135),
            a = function (e, t) {
                (t = t || {}),
                    (this._tabbables = null),
                    (this._excludeHidden = t.excludeHidden),
                    (this._firstTabbableElement = t.firstFocusElement),
                    (this._lastTabbableElement = null),
                    (this._relatedTarget = null),
                    (this.el = e),
                    (this._handleOnFocus = this._handleOnFocus.bind(this));
            },
            o = a.prototype;
        (o.start = function (e) {
            this.updateTabbables(), n(this.el, null, this._excludeHidden);
            let t = document.activeElement;
            this._firstTabbableElement
                ? this.el.contains(document.activeElement) || e || (this._firstTabbableElement.focus(), (t = this._firstTabbableElement))
                : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."),
                (this._relatedTarget = t),
                document.addEventListener("focus", this._handleOnFocus, !0);
        }),
            (o.stop = function () {
                r(this.el), document.removeEventListener("focus", this._handleOnFocus, !0);
            }),
            (o.updateTabbables = function () {
                (this._tabbables = s.getTabbableElements(this.el, this._excludeHidden)),
                    (this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0]),
                    (this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]);
            }),
            (o._handleOnFocus = function (e) {
                if (this.el.contains(e.target)) this._relatedTarget = e.target;
                else {
                    if ((e.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget))
                        return this._firstTabbableElement.focus(), void (this._relatedTarget = this._firstTabbableElement);
                    if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) return this._lastTabbableElement.focus(), void (this._relatedTarget = this._lastTabbableElement);
                }
            }),
            (o.destroy = function () {
                this.stop(), (this.el = null), (this._tabbables = null), (this._firstTabbableElement = null), (this._lastTabbableElement = null), (this._relatedTarget = null), (this._handleOnFocus = null);
            }),
            (e.exports = a);
    },
    function (e, t, i) {
        "use strict";
        var s = i(82);
        e.exports = function e(t, i, n) {
            i = i || document.body;
            for (var r = t, a = t; (r = r.previousElementSibling); ) s(r, n);
            for (; (a = a.nextElementSibling); ) s(a, n);
            t.parentElement && t.parentElement !== i && e(t.parentElement, i, n);
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(83);
        e.exports = function e(t, i) {
            i = i || document.body;
            for (var n = t, r = t; (n = n.previousElementSibling); ) s(n);
            for (; (r = r.nextElementSibling); ) s(r);
            t.parentElement && t.parentElement !== i && e(t.parentElement, i);
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "CloseBtnWrapper", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(t, "ModalContainer", {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            });
        var n = s(i(264)),
            r = s(i(265));
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            mounted() {
                (this._mousedown = !1),
                    this.el.addEventListener("mousedown", () => {
                        this._mousedown = !0;
                    }),
                    this.el.addEventListener("mouseup", () => {
                        this._mousedown = !1;
                    }),
                    this._items.forEach((e, t) => {
                        e.el.addEventListener("focusin", (e) => {
                            this._mousedown || ((this.lastInteractionEvent = { type: "swipe", target: e.target, srcElement: e.srcElement }), this.animateToItem(t));
                        });
                    });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = ["INPUT", "SELECT", "TEXTAREA"];
        e.exports = {
            created(e) {
                (this.onKeyDown = this.onKeyDown.bind(this)),
                    (this.inViewKeyframe = this.addDiscreteEvent({
                        event: "Gallery: In View",
                        start: "t - 100vh",
                        end: "b + 100%",
                        onEnter: () => window.addEventListener("keydown", this.onKeyDown),
                        onExit: () => window.removeEventListener("keydown", this.onKeyDown),
                    })),
                    Object.defineProperty(this, "isInView", { configurable: !0, get: () => null != this.inViewKeyframe && this.inViewKeyframe.isCurrentlyInRange });
            },
            destroy() {
                this.inViewKeyframe.remove(), (this.inViewKeyframe = null), window.removeEventListener("keydown", this.onKeyDown);
            },
            onKeyDown(e) {
                if (this.isInView && !this.inputHasFocus() && (37 === e.keyCode || 39 === e.keyCode)) {
                    let t = this.model.IsRTL ? -1 : 1,
                        i = 37 === e.keyCode ? -1 : 1;
                    this.lastInteractionEvent = e;
                    const s = this.currentIndex + i * t;
                    this.animateToItem(s);
                }
            },
            inputHasFocus: function () {
                return -1 !== s.indexOf(document.activeElement.nodeName);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(95).original,
            n = i(5),
            r = i(2);
        function a() {
            var e = n.getWindow(),
                t = e.screen.width;
            return e.orientation && e.screen.height < t && (t = e.screen.height), !s() && t >= 600;
        }
        (e.exports = r(a)), (e.exports.original = a);
    },
    function (e, t, i) {
        "use strict";
        i(40);
        const s = i(314),
            n = s.browser.safari && s.browser.version.major <= 14,
            r = !0 === window.matchMedia("(prefers-reduced-motion: reduce)") || !0 === window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        e.exports = {
            filename: "Scroller",
            mounted() {
                document.body._animInfo && (this.anim = document.body._animInfo.group.anim),
                    (this.scrollContainer = this.el.querySelector(".scroll-container")),
                    (this.itemContainer = this.el.querySelector(".item-container")),
                    (this.onScroll = this.onScroll.bind(this)),
                    (this.setCurrentIndex = this.setCurrentIndex.bind(this)),
                    (this.cacheSizeInfo = this.cacheSizeInfo.bind(this)),
                    this.scrollContainer.addEventListener("scroll", this.onScroll),
                    this.cacheSizeInfo();
            },
            debounceScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
                clearTimeout(this.timer), (this.timer = setTimeout(this.setCurrentIndex, e));
            },
            onScroll(e) {
                (this.lastInteractionEvent = { type: "swipe", target: e.target, srcElement: e.srcElement }), this.debounceScroll();
            },
            closest: (e, t) =>
                t.reduce((t, i) => {
                    const s = Math.abs(t - e),
                        n = Math.abs(i - e);
                    return s === n ? (t > i ? t : i) : n < s ? i : t;
                }),
            setCurrentIndex() {
                const e = this.closest(this.scrollContainer.scrollLeft, this.itemOffsets),
                    t = this.itemOffsets.findIndex((t) => t === e);
                if (t === this.currentIndex) return;
                this.currentIndex = t;
                const i = this._items[this.currentIndex];
                this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: i }), this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: i });
            },
            animateToItem(e) {
                if (this.tween) {
                    if (this.tween.controller) return;
                    this.tween = void 0;
                }
                const t = this._items[e];
                this.scrollContainer.removeEventListener("scroll", this.onScroll), this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: t });
                this.model.IsRTL;
                const i = this.scrollContainer.scrollLeft,
                    s = this.itemOffsets[e];
                void 0 !== s &&
                    (this.tween = this.anim.addTween(this.scrollContainer, {
                        duration: r ? 0 : this.model.duration,
                        easeFunction: "easeInOutQuad",
                        scrollLeft: [i, s],
                        onStart: () => {
                            n || (this.scrollContainer.style["scroll-snap-type"] = "none");
                        },
                        onComplete: () => {
                            (this.currentIndex = e),
                                this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: t }),
                                n || (this.scrollContainer.style["scroll-snap-type"] = "x mandatory"),
                                this.scrollContainer.addEventListener("scroll", this.onScroll),
                                (this.tween = void 0);
                        },
                    }));
            },
            cacheSizeInfo() {
                document.documentElement.style.setProperty("--inner-width", `${window.innerWidth}px`);
                const e = getComputedStyle(this.itemContainer);
                (this.contentWidth = parseFloat(e.width)),
                    (this.contentPadding = parseFloat(e.paddingInlineStart)),
                    (this.scrollWidth = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth),
                    (this.scrollContainerWidth = this.scrollContainer.offsetWidth),
                    (this.itemOffsets = []);
                let t = 0;
                this._items.forEach((e, i) => {
                    0 === i && (t = e.el.offsetLeft);
                    if ("center" === getComputedStyle(e.el).scrollSnapAlign) {
                        const t = e.el.offsetWidth / 2;
                        this.itemOffsets.push(Math.floor(e.el.offsetLeft - this.scrollContainerWidth / 2 + t));
                    } else this.itemOffsets.push(Math.floor(e.el.offsetLeft - t));
                }),
                    this.setCurrentIndex();
            },
            onResizeDebounced() {
                window.requestAnimationFrame(this.cacheSizeInfo);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(318),
            n = (e, t) => {
                t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true");
            },
            r = (e) => {
                const t = e.model.IsRTL ? -1 * e.scrollWidth : e.scrollWidth,
                    i = Math.abs(t - e.scrollContainer.scrollLeft) > 1,
                    s = Math.abs(e.scrollContainer.scrollLeft) >= 1;
                n(e.paddleNav.nextEl, i), n(e.paddleNav.previousEl, s);
            };
        e.exports = {
            mounted() {
                const e = this.el.querySelector(this.model.PaddleNav.Selector);
                Object.assign({}, s);
                (this.paddleNav = { previousEl: e.querySelector(".paddlenav-arrow-previous"), nextEl: e.querySelector(".paddlenav-arrow-next") }),
                    (this.onPaddleNavSelected = this.onPaddleNavSelected.bind(this)),
                    [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e) => {
                        e.addEventListener("click", this.onPaddleNavSelected);
                    });
            },
            onPaddleNavSelected(e) {
                const t = e.currentTarget.className.includes("previous") ? -1 : 1;
                this.lastInteractionEvent = e;
                const i = this.currentIndex + 1 * t;
                this.animateToItem(i);
            },
            onItemChangeCompleted(e) {
                r(this);
            },
            onResizeDebounced() {
                window.requestAnimationFrame(() => {
                    r(this);
                });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = { collapsed: "15 1.13 8.5 7.72 2 1.13", halfway: "15.85 4.42 8.5 4.42 1.15 4.42", expanded: "15 7.72 8.5 1.13 2 7.72" },
            n = `<svg class="accordion-icon-svg" viewBox="0 0 17 8.85">\n\t<polyline data-accordion-icon-shape stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd" points="${s.collapsed}">\n\t\t<animate\n\t\t\tdata-accordion-animate="expand"\n\t\t\tattributeName="points"\n\t\t\tvalues="${s.collapsed};\n\t\t\t\t\t${s.halfway};\n\t\t\t\t\t${s.expanded}"\n\t\t\tdur="320ms"\n\t\t\tbegin="indefinite"\n\t\t\tfill="freeze"\n\t\t\tkeyTimes="0;\n\t\t\t\t\t0.5;\n\t\t\t\t\t1"\n\t\t\tcalcMode="spline"\n\t\t\tkeySplines="0.12, 0, 0.38, 0;\n\t\t\t\t\t\t0.2, 1, 0.68, 1"\n\t\t/>\n\t\t<animate\n\t\t\tdata-accordion-animate="collapse"\n\t\t\tattributeName="points"\n\t\t\tvalues="${s.expanded};\n\t\t\t\t\t${s.halfway};\n\t\t\t\t\t${s.collapsed}"\n\t\t\tdur="320ms"\n\t\t\tbegin="indefinite"\n\t\t\tfill="freeze"\n\t\t\tkeyTimes="0;\n\t\t\t\t\t0.5;\n\t\t\t\t\t1"\n\t\t\tcalcMode="spline"\n\t\t\tkeySplines="0.2, 0, 0.68, 0;\n\t\t\t\t\t\t0.2, 1, 0.68, 1"\n\t\t/>\n\t</polyline>\n</svg>`;
        e.exports = { points: s, template: n };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        const a = i(1),
            o = i(24);
        class l extends n.default {
            constructor(e, t) {
                super(e, t),
                    (this.colorNav = this.aap.querySelector(".viewer-colornav")),
                    (this.sizeNav = this.aap.querySelector(".viewer-sizenav")),
                    (this.toggleOptions = this.aap.querySelectorAll("input")),
                    (this.viewerLabel = this.aap.querySelector(".viewer-label--3d-viewer")),
                    (this.viewerLabelFallback = this.aap.querySelector(".viewer-label--fallback")),
                    (this.viewerLabels = this.aap.querySelectorAll(".viewer-label-item")),
                    (this.sizeNavBubble = this.aap.querySelector(".viewer-sizenav__bubble-inner")),
                    (this.aap.style.visibility = "hidden"),
                    this.aap.classList.add("visuallyhidden"),
                    this.aap.setAttribute("aria-hidden", !0),
                    (this.viewerReady = !1),
                    (this.updateLabel = this.updateLabel.bind(this)),
                    (this.ltr = getComputedStyle(this.sizeNav).getPropertyValue("--ltr")),
                    (this.needsUpdate = !0),
                    (this.movementRateMultiplier = 1),
                    (this.velocityMultiplier = 2),
                    (this.target = 0),
                    (this.dragDrawId = -1),
                    (this.bubbleHintOffset = 0),
                    (this.aapOffset = 0),
                    (this.changeEvent = new Event("change")),
                    (this.inputStart = 0),
                    (this.swipeVelocity = 0),
                    (this._onStartDrag = this._onStartDrag.bind(this)),
                    (this._onDrag = this._onDrag.bind(this)),
                    (this._onStopDrag = this._onStopDrag.bind(this));
            }
            mounted() {
                super.mounted(), this._setupToggle(), this._setupSizeToggle(), this._setupGesture();
            }
            reset() {
                let e = !1,
                    t = !1;
                this.toggleOptions.forEach((i) => {
                    if (i.classList.contains("viewer-colornav-value") && i.dataset.defaultColor && !e) {
                        if ((!i.classList.contains("viewer-colornav-value--fallback") && this.viewerReady) || !this.viewerReady) {
                            (i.checked = !0), (e = !0);
                            const t = new Event("change");
                            i.dispatchEvent(t);
                        }
                    } else if (i.classList.contains("viewer-sizenav-value") && i.dataset.defaultSize && !t) {
                        (i.checked = !0), (t = !0);
                        const e = new Event("change");
                        i.dispatchEvent(e);
                    }
                });
            }
            setAria() {
                if (this.viewerReady) {
                    this.viewerLabel.setAttribute("aria-hidden", !1), this.viewerLabelFallback.setAttribute("aria-hidden", !0);
                    const e = this.colorNav.querySelector("input:checked"),
                        t = this.sizeNav.querySelector("input:checked");
                    this.colorNav.querySelectorAll("input").forEach((e) => {
                        const i = JSON.parse(e.dataset.ariaMap);
                        if (i[t.dataset.viewerValue]) return void e.setAttribute("aria-label", i[t.dataset.viewerValue]);
                        const s = document.createElement("div"),
                            n = this.viewerLabel.querySelector(`[data-color-value=${e.dataset.viewerValue}][data-size-value=${t.dataset.viewerValue}]`);
                        if (n) {
                            s.innerHTML = n ? n.innerHTML : null;
                            s.querySelectorAll(".footnote").forEach((e) => {
                                const t = e.querySelector("a");
                                e.replaceWith(` ${t.getAttribute("aria-label")}`);
                            }),
                                e.setAttribute("aria-label", s.textContent),
                                (i[t.dataset.viewerValue] = s.textContent),
                                e.setAttribute("data-aria-map", JSON.stringify(i));
                        }
                        s.remove();
                    });
                    this.sizeNav.querySelectorAll("input").forEach((t) => {
                        const i = JSON.parse(t.dataset.ariaMap);
                        if (i[e.dataset.viewerValue]) return void t.setAttribute("aria-label", i[e.dataset.viewerValue]);
                        const s = document.createElement("div"),
                            n = this.viewerLabel.querySelector(`[data-color-value=${e.dataset.viewerValue}][data-size-value=${t.dataset.viewerValue}]`);
                        if (n) {
                            s.innerHTML = n ? n.innerHTML : null;
                            s.querySelectorAll(".footnote").forEach((e) => {
                                const t = e.querySelector("a");
                                e.replaceWith(` ${t.getAttribute("aria-label")}`);
                            }),
                                t.setAttribute("aria-label", s.textContent),
                                (i[e.dataset.viewerValue] = s.textContent),
                                t.setAttribute("data-aria-map", JSON.stringify(i));
                        }
                        s.remove();
                    });
                } else {
                    this.viewerLabel.setAttribute("aria-hidden", !0), this.viewerLabelFallback.setAttribute("aria-hidden", !1);
                    this.colorNav.querySelectorAll("input").forEach((e) => {
                        if (e.dataset.fallbackAriaSet) return;
                        const t = document.createElement("div"),
                            i = this.viewerLabelFallback.querySelector(`[data-color-value=${e.dataset.viewerValue}]`);
                        if (i) {
                            t.innerHTML = i ? i.innerHTML : null;
                            t.querySelectorAll(".footnote").forEach((e) => {
                                const t = e.querySelector("a");
                                e.replaceWith(` ${t.getAttribute("aria-label")}`);
                            }),
                                e.setAttribute("aria-label", t.textContent),
                                e.setAttribute("data-fallback-aria-set", !0);
                        }
                        t.remove();
                    });
                }
            }
            loadEnhanced() {
                (this.viewerReady = !0), this.aap.classList.add("viewer-loaded"), this.resetAll();
            }
            loadFallback() {
                (this.viewerReady = !1), this.aap.classList.remove("viewer-loaded"), this.resetAll(), this.setAria();
            }
            resetAll() {
                (this.needsUpdate = !0),
                    this.aap.style.removeProperty("visibility"),
                    this.aap.classList.remove("visuallyhidden"),
                    this.aap.removeAttribute("aria-hidden"),
                    this.reset(),
                    this.destroy().then(() => {
                        this.isEnhanced() && ((this.introduce = this.anim.createTimeGroup()), (this.dismiss = this.anim.createTimeGroup()), this.initEnhanced(), (this.isAnimating = !1));
                    });
            }
            initEnhanced() {
                document.fonts.ready.then(() => {
                    this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup(), (this.needsUpdate = !1);
                });
            }
            updateLabel() {
                const e = { size: null, color: null };
                this.toggleOptions.forEach((t) => {
                    t.checked && (t.classList.contains("viewer-colornav-value") ? (e.color = t.dataset.viewerValue) : (e.size = t.dataset.viewerValue));
                }),
                    this.viewerLabels.forEach((t) => {
                        this.viewerReady
                            ? t.dataset.sizeValue === e.size && t.dataset.colorValue === e.color
                                ? t.classList.add("active")
                                : t.classList.remove("active")
                            : t.dataset.colorValue === e.color
                            ? t.classList.add("active")
                            : t.classList.remove("active");
                    }),
                    this.viewerReady && this.setAria();
            }
            _setupToggle() {
                this.toggleOptions.forEach((e) => {
                    e.addEventListener("change", this.updateLabel);
                });
            }
            _setupSizeToggle() {
                this.sizeNav.querySelectorAll("input").forEach((e, t) => {
                    e.addEventListener("change", () => {
                        this.sizeNav.style.setProperty("--bubble-position", `${e.style.getPropertyValue("--option-offset")}`),
                            this.sizeNav.style.setProperty("--bubble-width", `${e.style.getPropertyValue("--option-width")}`),
                            e.checked && ((this.selected = e), (this.selectedIndex = t));
                    });
                });
            }
            _setupGesture() {
                (this.sizeOptions = this.sizeNav.querySelectorAll("input")),
                    this.sizeNav.addEventListener("touchstart", this._onStartDrag),
                    this.sizeOptions.forEach((e) => {
                        e.addEventListener("change", () => {
                            this._onStopDrag();
                        });
                    });
            }
            _onStartDrag(e) {
                switch (!0) {
                    case !e.touches && 1 !== e.which:
                    case this.sizeNav.disabled:
                        return;
                }
                (this.lastInteractionEvent = e), (this.swipeVelocity = 0), (this.inputStart = e.touches[0].screenX), window.addEventListener("touchmove", this._onDrag, { passive: !1 }), window.addEventListener("touchend", this._onStopDrag);
            }
            _onDrag(e) {
                e.cancelable && e.preventDefault();
                const t = e.touches[0].screenX,
                    i = t - this.inputStart;
                (this.inputStart = t),
                    (this.target += i * this.movementRateMultiplier),
                    (this.swipeVelocity = i * this.velocityMultiplier),
                    (this.nextIndex = "1" === this.ltr ? this.selectedIndex + 1 : this.selectedIndex - 1),
                    (this.prevIndex = "1" === this.ltr ? this.selectedIndex - 1 : this.selectedIndex + 1),
                    o(this.dragDrawId),
                    (this.dragDrawId = a(() => {
                        (this.target > 56 || this.swipeVelocity > 50) && this.sizeOptions[this.nextIndex]
                            ? ((this.sizeOptions[this.nextIndex].checked = !0), this.sizeOptions[this.nextIndex].dispatchEvent(this.changeEvent), (this.target = 0), (this.bubbleHintOffset = 0))
                            : (this.target < -56 || this.swipeVelocity < -50) && this.sizeOptions[this.prevIndex]
                            ? ((this.sizeOptions[this.prevIndex].checked = !0), this.sizeOptions[this.prevIndex].dispatchEvent(this.changeEvent), (this.target = 0), (this.bubbleHintOffset = 0))
                            : ((this.target > 0 && this.sizeOptions[this.nextIndex]) || (this.target < 0 && this.sizeOptions[this.prevIndex])) &&
                              ((this.bubbleHintOffset = (this.target / 56) * 4), (this.aapOffset = 0), this.sizeNav.style.setProperty("--aap-offset", `${this.aapOffset}`)),
                            this.sizeNav.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`);
                    }));
            }
            _onStopDrag(e) {
                window.removeEventListener("touchmove", this._onDrag),
                    window.removeEventListener("touchend", this._onStopDrag),
                    (this.lastInteractionEvent = e),
                    (this.target = 0),
                    (this.swipeVelocity = 0),
                    (this.inputStart = 0),
                    (this.bubbleHintOffset = 0),
                    (this.aapOffset = 0),
                    o(this.dragDrawId),
                    (this.dragDrawId = a(() => {
                        this.sizeNav.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`), this.sizeNav.style.setProperty("--aap-offset", `${this.aapOffset}`);
                    }));
            }
            _getBounds() {
                if (
                    (this.viewerReady && ((this.sizeNav.style.position = "relative"), (this.sizeNav.style.width = "auto")),
                    (this.colorNav.style.width = "auto"),
                    (this.colorNavBounds = this.colorNav.getBoundingClientRect()),
                    this.viewerReady && (this.sizeNavBounds = this.sizeNav.getBoundingClientRect()),
                    this.colorNav.style.setProperty("--colornav-width", `${this.colorNavBounds.width}px`),
                    this.viewerReady)
                ) {
                    this.sizeNav.style.setProperty("--sizenav-width", `${this.sizeNavBounds.width}px`);
                    const e = this.sizeNav.querySelectorAll("input");
                    e.forEach((e) => {
                        "1" === this.ltr
                            ? e.style.setProperty("--option-offset", `${e.parentNode.offsetLeft}px`)
                            : e.style.setProperty("--option-offset", Math.floor(e.parentNode.parentNode.getBoundingClientRect().right - e.parentNode.getBoundingClientRect().right) - 1 + "px"),
                            e.style.setProperty("--option-width", `${e.parentNode.offsetWidth}px`);
                    }),
                        this.sizeNav.style.setProperty("--bubble-position", `${e[0].style.getPropertyValue("--option-offset")}`),
                        this.sizeNav.style.setProperty("--bubble-width", `${e[0].style.getPropertyValue("--option-width")}`),
                        (this.sizeNav.style.position = "absolute"),
                        this.reset();
                }
            }
            _setupTimeGroups() {
                if (
                    ((this.dismiss.name = `AAP 3D Viewer: Dismiss - ${this.aap.id}`),
                    this.viewerReady
                        ? (this.dismiss.addKeyframe(this.sizeNavBubble, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                          this.dismiss.addKeyframe(this.viewerLabel, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }))
                        : this.dismiss.addKeyframe(this.viewerLabelFallback, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.toggleOptions.forEach((e) => {
                        this.dismiss.addKeyframe(e.parentNode, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER });
                    }),
                    this.viewerReady
                        ? (this.dismiss.addKeyframe(this.colorNav, {
                              start: 0.25,
                              end: 0.5,
                              width: [`${this.colorNavBounds.width}px`, "css(--aap-min-height)"],
                              x: [`(-7px - ${0.5 * this.sizeNavBounds.width}px) * css(--ltr)`, 0],
                              easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER,
                          }),
                          this.dismiss.addKeyframe(this.sizeNav, {
                              start: 0.25,
                              end: 0.5,
                              width: [`${this.sizeNavBounds.width}px`, "css(--aap-min-height)"],
                              x: [`(7px + ${this.colorNavBounds.width - this.sizeNavBounds.width + 0.5 * this.sizeNavBounds.width}px) * css(--ltr)`, 0],
                              easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER,
                          }),
                          this.dismiss.addKeyframe(this.sizeNav, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }))
                        : this.dismiss.addKeyframe(this.colorNav, { start: 0, end: 0.5, width: [`${this.colorNavBounds.width}px`, "css(--aap-min-height)"], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.colorNav, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP 3D Viewer: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap),
                    this.introduce.addKeyframe(this.colorNav, { start: 0, end: 0.8, scale: [0.01, 1], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                    this.viewerReady)
                ) {
                    this.introduce.addKeyframe(this.sizeNav, { start: 0, end: 0.8, scale: [0.01, 1], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                        this.introduce.addKeyframe(this.colorNav, {
                            start: 0.7,
                            end: 1.3,
                            width: ["css(--aap-min-height)", `${this.colorNavBounds.width}px`],
                            x: [0, `(-7px - ${0.5 * this.sizeNavBounds.width}px) * css(--ltr)`],
                            easeFunction: r.AAP_EASE_FUNCTIONS.SPRING,
                        }),
                        this.introduce.addKeyframe(this.sizeNav, {
                            start: 0.7,
                            end: 1.3,
                            width: ["css(--aap-min-height)", `${this.sizeNavBounds.width}px`],
                            x: [0, `(7px + ${this.colorNavBounds.width - this.sizeNavBounds.width + 0.5 * this.sizeNavBounds.width}px) * css(--ltr)`],
                            easeFunction: r.AAP_EASE_FUNCTIONS.SPRING,
                        });
                    const e = 0.05 * (this.colorNav.querySelectorAll("input").length + 1);
                    this.introduce.addKeyframe(this.sizeNavBubble, { start: 0.7 + e, end: 1.3 + e, opacity: [0, 1], easeFunction: "easeOutQuint" });
                } else this.introduce.addKeyframe(this.colorNav, { start: 0.7, end: 1.3, width: ["css(--aap-min-height)", `${this.colorNavBounds.width}px`], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING });
                this.toggleOptions.forEach((e, t) => {
                    const i = 0.05 * (t + 1);
                    this.introduce.addKeyframe(e.parentNode, { start: 0.7 + i, end: 1.5 + i, opacity: [0, 1], scale: [0.5, 1], easeFunction: "spring(100, 1, 10, 0)" });
                }),
                    this.viewerReady
                        ? this.introduce.addKeyframe(this.viewerLabel, { start: 1, end: 1.6, opacity: [0, 1], easeFunction: "easeOutSin" })
                        : this.introduce.addKeyframe(this.viewerLabelFallback, { start: 1, end: 1.6, opacity: [0, 1], easeFunction: "easeOutSin" }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    });
            }
            destroy() {
                return (this.sizeNav.style.position = "relative"), super.destroy();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        class a extends n.default {
            constructor(e, t) {
                super(e, t),
                    (this.background = this.aap.querySelectorAll(".all-access-pass__background")[0]),
                    (this.dots = this.aap.querySelectorAll(".dotnav-items .dotnav-link")),
                    (this.paddleNavContainer = this.aap.querySelector(".paddlenav")),
                    (this.paddleNavPrevious = this.paddleNavContainer.querySelector(".paddlenav-arrow-previous")),
                    (this.paddleNavNext = this.paddleNavContainer.querySelector(".paddlenav-arrow-next")),
                    (this.viewerLabel = this.aap.querySelector(".viewer-label--standard-gallery")),
                    (this.viewerLabels = this.viewerLabel.querySelectorAll(".viewer-label-item")),
                    (this.activeLabel = this.viewerLabel.querySelector(".viewer-label-item.active")),
                    (this.needsUpdate = !0),
                    (this.preload = "preload" in this.aap.dataset),
                    (this.aapLevel = this.aap.dataset.aapLevel),
                    (this.aap.style.display = "none"),
                    (this.getActiveNumber = this.getActiveNumber.bind(this)),
                    (this.updateLabel = this.updateLabel.bind(this));
            }
            mounted() {
                super.mounted(), this.isEnhanced() && "1" === this.aapLevel && this.preload && this.initEnhanced();
            }
            initEnhanced() {
                this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup(), (this.needsUpdate = !1);
            }
            loadEnhanced() {
                this.resetAll();
            }
            resetAll() {
                (this.needsUpdate = !0),
                    (this.aap.style.display = "flex"),
                    this.destroy().then(() => {
                        this.isEnhanced() && ((this.introduce = this.anim.createTimeGroup()), (this.dismiss = this.anim.createTimeGroup()), (this.isAnimating = !1), this.initEnhanced());
                    });
            }
            getActiveNumber() {
                return [...this.dots].find((e) => e.classList.contains("current")).dataset.itemNumber;
            }
            updateLabel() {
                requestAnimationFrame(() => {
                    (this.activeNumber = this.getActiveNumber()),
                        this.activeLabel && this.activeLabel.classList.remove("active"),
                        (this.activeLabel = [...this.viewerLabels].find((e) => e.dataset.itemNumber === this.activeNumber)),
                        this.activeLabel && this.activeLabel.classList.add("active");
                });
            }
            _getBounds() {
                (this.background.style.transform = "scale(1)"), (this.backgroundBounds = this.background.getBoundingClientRect());
            }
            _setupTimeGroups() {
                (this.dismiss.name = `AAP Standard Gallery: Dismiss - ${this.aap.id}`),
                    this.dismiss.addKeyframe(this.viewerLabel, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.paddleNavContainer, { start: 0, end: 0.25, opacity: [1, 0] }),
                    this.dots.forEach((e) => {
                        this.dismiss.addKeyframe(e, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER });
                    }),
                    this.dismiss.addKeyframe(this.background, { start: 0.25, end: 0.5, width: [`${this.backgroundBounds.width}px`, "css(--aap-min-height)"], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.background, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP Standard Gallery: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background),
                    this.introduce.addKeyframe(this.background, { start: 0.7, end: 1.3, width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                    this.introduce.addKeyframe(this.paddleNavContainer, { start: 0.8, end: 1.4, opacity: [0, 1] }),
                    this.dots.forEach((e, t) => {
                        const i = 0.05 * (t + 1);
                        this.introduce.addKeyframe(e, { start: 0.8 + i, end: 1.6 + i, opacity: [0, 1], scale: [0.5, 1], easeFunction: "spring(100, 1, 10, 0)" });
                    }),
                    this.introduce.addKeyframe(this.viewerLabel, { start: 1, end: 1.6, opacity: [0, 1], easeFunction: "easeOutSin" }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    });
            }
        }
        t.default = a;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, i) {
        e.exports = i(156);
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.main = void 0);
        var n = s(i(97)),
            r = s(i(40)),
            a = s(i(10)),
            o = s(i(109)),
            l = s(i(110)),
            h = s(i(79)),
            d = s(i(113)),
            c = i(21),
            u = i(50),
            m = (function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var i = f(t);
                if (i && i.has(e)) return i.get(e);
                var s = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        a && (a.get || a.set) ? Object.defineProperty(s, r, a) : (s[r] = e[r]);
                    }
                return (s.default = e), i && i.set(e, s), s;
            })(i(186)),
            p = s(i(187));
        function f(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
                i = new WeakMap();
            return (f = function (e) {
                return e ? i : t;
            })(e);
        }
        t.main = new (class {
            constructor() {
                Object.assign(l.default, p.default),
                    (this.bubbleGum = null),
                    (this._onAnimReady = this._onAnimReady.bind(this)),
                    (this._onDomKeyframesCreated = this._onDomKeyframesCreated.bind(this)),
                    document.documentElement.style.setProperty("--r-viewport-height", window.innerHeight),
                    this._initialize();
            }
            _initLocalnavFocusManager() {
                const e = document.querySelector(".section-welcome .welcome__lockup"),
                    t = document.querySelectorAll("a.ac-ln-menu-link"),
                    i = [
                        document.querySelector("#ac-localnav .ac-ln-title a"),
                        document.querySelector("#ac-localnav .ac-ln-action-button a"),
                        document.getElementById("ac-ln-menustate-open"),
                        document.getElementById("ac-ln-menustate-close"),
                        ...t,
                    ].filter((e) => !!e),
                    s = u.CLASS_HIDE_LOCALNAV,
                    n = e ? '{"expression": "a0t - 145px", "anchors":[".section-welcome .welcome__lockup"], "tabindex": 0}' : '{"expression": "a0b - 145px", "anchors":[".section-welcome .welcome"], "tabindex": 0}';
                i.forEach((e) => {
                    (e.dataset.focusExpression = n), (e.dataset.focusEnabledWhen = s);
                });
            }
            _initialize() {
                (0, c.trackPageState)(),
                    (this.bubbleGum = new o.default(document.body, { anim: r.default })),
                    this.bubbleGum.anim.on(r.default.model.EVENTS.ON_DOM_KEYFRAMES_CREATED, this._onDomKeyframesCreated),
                    this.bubbleGum.anim.ready.finally(this._onAnimReady),
                    this.bubbleGum.anim.on(a.default.EVENTS.ON_DOM_GROUPS_CREATED, () => {
                        this._monitorScrollHeight();
                    }),
                    n.default.detect(),
                    this._initLocalnavFocusManager();
            }
            _onAnimReady() {
                document.fonts.ready.finally(() => {
                    this.bubbleGum.anim.forceUpdate();
                });
            }
            _onDomKeyframesCreated() {
                new d.default(), new h.default();
            }
            _monitorScrollHeight() {
                if (window.location.search.includes("debug")) {
                    new m.default().on(m.EVT_SCROLL_HEIGHT_CHANGED, (e) => {
                        console.log(e.parentElement);
                    }),
                        document.querySelectorAll("section").forEach((e) => {
                            new m.default(e).on(m.EVT_SCROLL_HEIGHT_CHANGED, (e) => {
                                console.log(e.parentElement);
                            });
                        });
                }
            }
        })();
    },
    function (e, t, i) {
        "use strict";
        const { map: s } = i(31),
            n = {};
        class r {
            constructor(e, t, i, s) {
                (this.mass = e),
                    (this.stiffness = t),
                    (this.damping = i),
                    (this.initialVelocity = s),
                    (this.m_w0 = Math.sqrt(this.stiffness / this.mass)),
                    (this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass))),
                    this.m_zeta < 1
                        ? ((this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta)), (this.m_A = 1), (this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd))
                        : ((this.m_wd = 0), (this.m_A = 1), (this.m_B = -this.initialVelocity + this.m_w0));
            }
            solve(e) {
                return 1 - (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0));
            }
        }
        const a = /\d*\.?\d+/g;
        (r.fromCSSString = function (e) {
            let t = e.match(a);
            if (4 !== t.length) throw `SpringEasing could not convert ${cssString} to spring params`;
            let i = t.map(Number),
                o = new r(...i);
            const l = o.solve.bind(o);
            let h = 0;
            let d = (function () {
                if (n[e]) return n[e];
                const t = 1 / 6;
                let i,
                    s = 0;
                for (;;) {
                    h += t;
                    if (1 === l(h)) {
                        if ((s++, s >= 16)) {
                            i = h * t;
                            break;
                        }
                    } else s = 0;
                }
                return (n[e] = i), n[e];
            })();
            return function (e) {
                return 0 === e || 1 === e ? e : l(s(e, 0, 1, 0, d));
            };
        }),
            (e.exports = r);
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t) {
            if ("string" != typeof e) return e;
            try {
                return (t || document).querySelector(e) || document.querySelector(e);
            } catch (e) {
                return !1;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = class {
            constructor() {
                (this.local = 0), (this.localUnclamped = 0), (this.lastPosition = 0);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = class {
            constructor(e, t) {
                (this.a = e.top - t), this.a < 0 && (this.a = e.top), (this.b = e.top), (this.d = e.bottom), (this.c = Math.max(this.d - t, this.b));
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(10),
            n = i(31),
            r = i(73),
            a = {},
            o = { smoothstep: (e, t, i) => (i = o.clamp((i - e) / (t - e), 0, 1)) * i * (3 - 2 * i), deg: (e) => (180 * e) / Math.PI, rad: (e) => (e * Math.PI) / 180, random: (e, t) => Math.random() * (t - e) + e, atan: Math.atan2 };
        Object.getOwnPropertyNames(Math).forEach((e) => (o[e] ? null : (o[e.toLowerCase()] = Math[e]))),
            Object.getOwnPropertyNames(n).forEach((e) => (o[e] ? null : (o[e.toLowerCase()] = n[e]))),
            Object.getOwnPropertyNames(r).forEach((e) => (o[e] = r[e]));
        let l = null;
        const h = "a",
            d = "ALPHA",
            c = "(",
            u = ")",
            m = "PLUS",
            p = "MINUS",
            f = "MUL",
            _ = "DIV",
            g = "INTEGER_CONST",
            E = "FLOAT_CONST",
            y = ",",
            v = "EOF",
            b = {
                NUMBERS: /\d|\d\.\d/,
                DIGIT: /\d/,
                OPERATOR: /[-+*/]/,
                PAREN: /[()]/,
                WHITE_SPACE: /\s/,
                ALPHA: /[a-zA-Z]|%/,
                ALPHANUMERIC: /[a-zA-Z0-9]/,
                OBJECT_UNIT: /^(t|l|b|r|%w|%h|%|h|w)$/,
                GLOBAL_METRICS_UNIT: /^(px|vh|vw)$/,
                ANY_UNIT: /^(t|l|b|r|%w|%h|%|h|w|px|vh|vw|rad|deg)$/,
                MATH_FUNCTION: new RegExp(`\\b(${Object.keys(o).join("|")})\\b`, "i"),
            },
            A = function (e, t, i) {
                let s = t.slice(Math.max(i, 0), Math.min(t.length, i + 3)),
                    n = new Error(`Expression Error. ${e} in expression "${t}", near "${s}"`);
                throw (console.error(n.message, l ? l.keyframe || l.target : ""), n);
            },
            T = { round: 1, clamp: 3, lerp: 3, random: 2, atan: 2, floor: 1, ceil: 1, abs: 1, cos: 1, sin: 1, smoothstep: 3, rad: 1, deg: 1, pow: 2, calc: 1 };
        class I {
            constructor(e, t) {
                (this.type = e), (this.value = t);
            }
        }
        (I.ONE = new I("100", 100)), (I.EOF = new I(v, null));
        class w {
            constructor(e) {
                this.type = e;
            }
        }
        class C extends w {
            constructor(e, t) {
                super("UnaryOp"), (this.token = this.op = e), (this.expr = t);
            }
        }
        class S extends w {
            constructor(e, t, i) {
                super("BinOp"), (this.left = e), (this.op = t), (this.right = i);
            }
        }
        class O extends w {
            constructor(e, t) {
                if ((super("MathOp"), (this.op = e), (this.list = t), T[e.value] && t.length !== T[e.value])) throw new Error(`Incorrect number of arguments for '${e.value}'. Received ${t.length}, expected ${T[e.value]}`);
            }
        }
        class P extends w {
            constructor(e) {
                super("Num"), (this.token = e), (this.value = e.value);
            }
        }
        class x extends w {
            constructor(e, t, i) {
                super("RefValue"), (this.num = e), (this.ref = t), (this.unit = i);
            }
        }
        class N extends w {
            constructor(e, t) {
                super("CSSValue"), (this.ref = e), (this.propertyName = t);
            }
        }
        class R extends w {
            constructor(e, t) {
                super("PropValue"), (this.ref = e), (this.propertyName = t);
            }
        }
        class L {
            constructor(e) {
                let t;
                for (this.text = e, this.pos = 0, this.char = this.text[this.pos], this.tokens = []; (t = this.getNextToken()) && t !== I.EOF; ) this.tokens.push(t);
                this.tokens.push(t);
            }
            advance() {
                this.char = this.text[++this.pos];
            }
            skipWhiteSpace() {
                for (; null != this.char && b.WHITE_SPACE.test(this.char); ) this.advance();
            }
            name() {
                let e = "";
                for (; null != this.char && b.ALPHA.test(this.char); ) (e += this.char), this.advance();
                return new I(d, e);
            }
            number() {
                let e = "";
                for ("." === this.char && ((e += this.char), this.advance()); null != this.char && b.DIGIT.test(this.char); ) (e += this.char), this.advance();
                if (null != this.char && "." === this.char)
                    for (e.includes(".") && A("Number appears to contain 2 decimal points", this.text, this.pos), e += this.char, this.advance(); null != this.char && b.DIGIT.test(this.char); ) (e += this.char), this.advance();
                return "." === e && A("Attempted to parse a number, but found only a decimal point", this.text, this.pos), e.includes(".") ? new I(E, parseFloat(e)) : new I(g, parseInt(e));
            }
            getNextToken() {
                for (; null != this.char; )
                    if (b.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
                    else {
                        if ("." === this.char || b.DIGIT.test(this.char)) return this.number();
                        if ("," === this.char) return this.advance(), new I(y, ",");
                        if (b.OPERATOR.test(this.char)) {
                            let e = "",
                                t = this.char;
                            switch (t) {
                                case "+":
                                    e = m;
                                    break;
                                case "-":
                                    e = p;
                                    break;
                                case "*":
                                    e = f;
                                    break;
                                case "/":
                                    e = _;
                            }
                            return this.advance(), new I(e, t);
                        }
                        if (b.PAREN.test(this.char)) {
                            let e = "",
                                t = this.char;
                            switch (t) {
                                case "(":
                                    e = c;
                                    break;
                                case ")":
                                    e = u;
                            }
                            return this.advance(), new I(e, t);
                        }
                        if (b.ALPHA.test(this.char)) return this.name();
                        A(`Unexpected character "${this.char}"`, this.text, this.pos);
                    }
                return I.EOF;
            }
        }
        class D {
            constructor(e) {
                (this.lexer = e), (this.pos = 0);
            }
            get currentToken() {
                return this.lexer.tokens[this.pos];
            }
            error(e) {
                A(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", this.lexer.text, this.pos);
            }
            consume(e) {
                let t = this.currentToken;
                return t.type === e ? (this.pos += 1) : this.error(`Invalid token ${this.currentToken.value}, expected ${e}`), t;
            }
            consumeList(e) {
                e.includes(this.currentToken) ? (this.pos += 1) : this.error(`Invalid token ${this.currentToken.value}, expected ${tokenType}`);
            }
            expr() {
                let e = this.term();
                for (; this.currentToken.type === m || this.currentToken.type === p; ) {
                    const t = this.currentToken;
                    switch (t.value) {
                        case "+":
                            this.consume(m);
                            break;
                        case "-":
                            this.consume(p);
                    }
                    e = new S(e, t, this.term());
                }
                return e;
            }
            term() {
                let e = this.factor();
                for (; this.currentToken.type === f || this.currentToken.type === _; ) {
                    const t = this.currentToken;
                    switch (t.value) {
                        case "*":
                            this.consume(f);
                            break;
                        case "/":
                            this.consume(_);
                    }
                    e = new S(e, t, this.factor());
                }
                return e;
            }
            factor() {
                if (this.currentToken.type === m) return new C(this.consume(m), this.factor());
                if (this.currentToken.type === p) return new C(this.consume(p), this.factor());
                if (this.currentToken.type === g || this.currentToken.type === E) {
                    let e = new P(this.currentToken);
                    if (((this.pos += 1), b.OPERATOR.test(this.currentToken.value) || this.currentToken.type === u || this.currentToken.type === y || this.currentToken.type === v)) return e;
                    if (this.currentToken.type === d && this.currentToken.value === h) return this.consume(d), new x(e, this.anchorIndex(), this.unit(b.ANY_UNIT));
                    if (this.currentToken.type === d) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new x(e, null, this.unit());
                    this.error("Expected a scaling unit type", "Such as 'h' / 'w'");
                } else {
                    if (b.OBJECT_UNIT.test(this.currentToken.value)) return new x(new P(I.ONE), null, this.unit());
                    if (this.currentToken.value === h) {
                        this.consume(d);
                        const e = this.anchorIndex();
                        if (b.OBJECT_UNIT.test(this.currentToken.value)) return new x(new P(I.ONE), e, this.unit());
                    } else if (this.currentToken.type === d) {
                        if ("calc" === this.currentToken.value) return this.consume(d), this.expr();
                        if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
                            const e = "prop" !== this.currentToken.value ? N : R;
                            this.consume(d), this.consume(c);
                            const t = this.propertyName();
                            let i = null;
                            return this.currentToken.type === y && (this.consume(y), this.consume(d), (i = this.anchorIndex())), this.consume(u), new e(i, t);
                        }
                        if (b.MATH_FUNCTION.test(this.currentToken.value)) {
                            const e = this.currentToken.value,
                                t = e.toLowerCase();
                            if ("number" == typeof o[t]) return this.consume(d), new P(new I(d, o[t]));
                            const i = I[e] || new I(e, e),
                                s = [];
                            this.consume(d), this.consume(c);
                            let n = null;
                            do {
                                this.currentToken.value === y && this.consume(y), (n = this.expr()), s.push(n);
                            } while (this.currentToken.value === y);
                            return this.consume(u), new O(i, s);
                        }
                    } else if (this.currentToken.type === c) {
                        this.consume(c);
                        let e = this.expr();
                        return this.consume(u), e;
                    }
                }
                this.error(`Unexpected token ${this.currentToken.value}`);
            }
            propertyName() {
                let e = "";
                for (; this.currentToken.type === d || this.currentToken.type === p; ) (e += this.currentToken.value), (this.pos += 1);
                return e;
            }
            unit() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.ANY_UNIT;
                const t = this.currentToken;
                if (t.type === d && e.test(t.value)) return this.consume(d), new I(d, (t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h")));
                this.error("Expected unit type");
            }
            anchorIndex() {
                const e = this.currentToken;
                if (e.type === g) return this.consume(g), new P(e);
                this.error("Invalid anchor reference", ". Should be something like a0, a1, a2");
            }
            parse() {
                const e = this.expr();
                return this.currentToken !== I.EOF && this.error(`Unexpected token ${this.currentToken.value}`), e;
            }
        }
        class M {
            constructor(e) {
                (this.parser = e), (this.root = e.parse());
            }
            visit(e) {
                let t = this[e.type];
                if (!t) throw new Error(`No visit method named, ${t}`);
                return t.call(this, e);
            }
            BinOp(e) {
                switch (e.op.type) {
                    case m:
                        return this.visit(e.left) + this.visit(e.right);
                    case p:
                        return this.visit(e.left) - this.visit(e.right);
                    case f:
                        return this.visit(e.left) * this.visit(e.right);
                    case _:
                        return this.visit(e.left) / this.visit(e.right);
                }
            }
            RefValue(e) {
                let t = this.unwrapReference(e),
                    i = e.unit.value,
                    n = e.num.value;
                const r = l.metrics.get(t);
                switch (i) {
                    case "h":
                        return 0.01 * n * r.height;
                    case "t":
                        return 0.01 * n * r.top;
                    case "vh":
                        return 0.01 * n * s.pageMetrics.windowHeight;
                    case "vw":
                        return 0.01 * n * s.pageMetrics.windowWidth;
                    case "px":
                    case "deg":
                        return n;
                    case "w":
                        return 0.01 * n * r.width;
                    case "b":
                        return 0.01 * n * r.bottom;
                    case "l":
                        return 0.01 * n * r.left;
                    case "r":
                        return 0.01 * n * r.right;
                    case "rad":
                        return (180 * n) / Math.PI;
                }
            }
            PropValue(e) {
                return (null === e.ref ? l.target : l.anchors[e.ref.value])[e.propertyName];
            }
            CSSValue(e) {
                let t = this.unwrapReference(e);
                const i = getComputedStyle(t).getPropertyValue(e.propertyName);
                return "" === i ? 0 : M.Parse(i).execute(l);
            }
            Num(e) {
                return e.value;
            }
            UnaryOp(e) {
                return e.op.type === m ? +this.visit(e.expr) : e.op.type === p ? -this.visit(e.expr) : void 0;
            }
            MathOp(e) {
                let t = e.list.map((e) => this.visit(e));
                return o[e.op.value].apply(null, t);
            }
            unwrapReference(e) {
                return null === e.ref ? l.target : (e.ref.value >= l.anchors.length && console.error(`Not enough anchors supplied for expression ${this.parser.lexer.text}`, l.target), l.anchors[e.ref.value]);
            }
            execute(e) {
                return (l = e), this.visit(this.root);
            }
            static Parse(e) {
                return a[e] || (a[e] = new M(new D(new L(e))));
            }
        }
        (M.programs = a), (e.exports = M);
    },
    function (e, t, i) {
        "use strict";
        const s = i(10),
            n = i(22),
            r = i(163),
            a = i(104),
            o = i(75),
            l = i(164),
            h = i(74),
            d = i(101),
            c = i(71),
            u = i(165),
            m = {};
        "undefined" != typeof window && ((m.update = i(9)), (m.external = i(77)), (m.draw = i(1)));
        const { transformAttributes: p, cssAttributes: f, domAttributes: _ } = i(102),
            g = i(166),
            E = i(72),
            y = i(167),
            v = Math.PI / 180,
            b = { create: i(170), rotateX: i(171), rotateY: i(172), rotateZ: i(173), scale: i(174) };
        e.exports = class extends c {
            constructor(e, t) {
                super(),
                    (this._events.draw = []),
                    (this.uuid = d()),
                    (this.group = e),
                    (this.element = t),
                    (this._ownerIsElement = this.element instanceof Element),
                    this._ownerIsElement ? (this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".")) : (this.friendlyName = this.element.friendlyName || this.uuid),
                    (this.element._animInfo = this.element._animInfo || new a(e, this)),
                    (this.element._animInfo.controller = this),
                    (this.element._animInfo.group = this.group),
                    this.element._animInfo.controllers.push(this),
                    (this.tweenProps = this.element._animInfo.tweenProps),
                    (this.eventObject = new r(this)),
                    (this.needsStyleUpdate = !1),
                    (this.needsClassUpdate = !1),
                    (this.elementMetrics = this.group.metrics.add(this.element)),
                    (this.attributes = []),
                    (this.cssAttributes = []),
                    (this.domAttributes = []),
                    (this.keyframes = {}),
                    (this._allKeyframes = []),
                    (this._activeKeyframes = []),
                    (this.keyframesRequiringDispatch = []),
                    this.updateCachedValuesFromElement(),
                    (this.boundsMin = 0),
                    (this.boundsMax = 0),
                    (this.mat2d = new Float32Array(6)),
                    (this.mat4 = b.create()),
                    (this.needsWrite = !0),
                    (this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject);
            }
            destroy() {
                if (this.element._animInfo) {
                    this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
                    let e = this.element._animInfo.controllers.indexOf(this);
                    if ((-1 !== e && this.element._animInfo.controllers.splice(e, 1), 0 === this.element._animInfo.controllers.length)) this.element._animInfo = null;
                    else {
                        let e = this.element._animInfo.controllers.find((e) => e.group !== e.group.anim.tweenGroup);
                        e && ((this.element._animInfo.controller = e), (this.element._animInfo.group = e.group));
                    }
                }
                (this.eventObject.controller = null),
                    (this.eventObject.element = null),
                    (this.eventObject.keyframe = null),
                    (this.eventObject.tweenProps = null),
                    (this.eventObject = null),
                    (this.elementMetrics = null),
                    (this.group = null),
                    (this.keyframesRequiringDispatch = null);
                for (let e = 0; e < this._allKeyframes.length; e++) this._allKeyframes[e].destroy();
                (this._allKeyframes = null), (this._activeKeyframes = null), (this.attributes = null), (this.keyframes = null), (this.element = null), (this.tweenProps = null), (this.destroyed = !0), super.destroy();
            }
            remove() {
                return this.group && this.group.removeKeyframeController(this);
            }
            updateCachedValuesFromElement() {
                if (!this._ownerIsElement) return;
                const e = this.getTargetComputedStyle(!0);
                let t = new DOMMatrix(e.getPropertyValue("transform")),
                    i = u(t),
                    r = s.KeyframeDefaults.epsilon,
                    a = !1;
                ["x", "y", "z"].forEach((e, t) => {
                    this.tweenProps[e] = new n(i.translation[t], r, a, e);
                }),
                    (this.tweenProps.rotation = new n(i.rotation[2], r, a, "rotation")),
                    ["rotationX", "rotationY", "rotationZ"].forEach((e, t) => {
                        this.tweenProps[e] = new n(i.rotation[t], r, a, e);
                    }),
                    (this.tweenProps.scale = new n(i.scale[0], r, a, "scale")),
                    ["scaleX", "scaleY", "scaleZ"].forEach((e, t) => {
                        this.tweenProps[e] = new n(i.scale[t], r, a, e);
                    });
            }
            addKeyframe(e) {
                let t = l(e);
                if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
                let i = new t(this, e);
                return i.parseOptions(e), (i.id = this._allKeyframes.length), this._allKeyframes.push(i), i;
            }
            needsUpdate() {
                for (let e = 0, t = this.attributes.length; e < t; e++) {
                    let t = this.attributes[e];
                    if (this.tweenProps[t].needsUpdate()) return !0;
                }
                return !1;
            }
            updateLocalProgress(e) {
                for (let t = 0, i = this.attributes.length; t < i; t++) {
                    let i = this.attributes[t],
                        s = this.keyframes[this.attributes[t]];
                    if (1 === s.length) {
                        s[0].updateLocalProgress(e);
                        continue;
                    }
                    let n = this.getNearestKeyframeForAttribute(i, e);
                    n && n.updateLocalProgress(e);
                }
            }
            reconcile() {
                for (let e = 0, t = this.attributes.length; e < t; e++) {
                    let t = this.attributes[e],
                        i = this.getNearestKeyframeForAttribute(t, this.group.position.local);
                    i.updateLocalProgress(this.group.position.local), i.snapAtCreation && i.reconcile(t);
                }
            }
            determineActiveKeyframes(e) {
                e = e || h(Array.from(document.documentElement.classList));
                let t = this._activeKeyframes,
                    i = this.attributes,
                    s = {};
                (this._activeKeyframes = []), (this.attributes = []), (this.keyframes = {});
                for (let t = 0; t < this._allKeyframes.length; t++) {
                    let i = this._allKeyframes[t];
                    if (i.markedForRemoval || i.hidden || !i.setEnabled(e)) for (let e in i.animValues) (this.tweenProps[e].isActive = i.preserveState), i.preserveState && (s[e] = !0);
                    else {
                        this._activeKeyframes.push(i);
                        for (let e in i.animValues) (this.keyframes[e] = this.keyframes[e] || []), this.keyframes[e].push(i), -1 === this.attributes.indexOf(e) && ((s[e] = !0), this.attributes.push(e), (this.tweenProps[e].isActive = !0));
                    }
                }
                this.attributes.forEach((e) => (this.tweenProps[e].isActive = !0)),
                    (this.cssAttributes = this.attributes.filter((e) => f.includes(e) || e.startsWith("--")).map((e) => this.tweenProps[e])),
                    (this.domAttributes = this.attributes.filter((e) => _.includes(e)).map((e) => this.tweenProps[e]));
                let n = t.filter((e) => -1 === this._activeKeyframes.indexOf(e));
                if (0 === n.length) return;
                let r = i.filter((e) => -1 === this.attributes.indexOf(e) && !s.hasOwnProperty(e));
                if (0 !== r.length)
                    if (((this.needsWrite = !0), this._ownerIsElement))
                        m.external(() => {
                            let e = r.some((e) => p.includes(e)),
                                t = e && Object.keys(s).some((e) => p.includes(e));
                            e && !t && this.element.style.removeProperty("transform");
                            for (let e = 0, t = r.length; e < t; ++e) {
                                let t = r[e],
                                    i = this.tweenProps[t],
                                    s = i.isActive ? i.target : i.initialValue;
                                if (((i.current = i.target = s), !i.isActive))
                                    switch (!0) {
                                        case i instanceof g:
                                        case i instanceof E:
                                            i.unset(this.element.style);
                                            break;
                                        case i instanceof y:
                                            i.unset(i.applyToStyle ? this.element.style : this.element);
                                    }
                            }
                            for (let e = 0, t = n.length; e < t; ++e) {
                                let t = n[e];
                                t instanceof o && !t.preserveState && t._unapply();
                            }
                        }, !0);
                    else
                        for (let e = 0, t = r.length; e < t; ++e) {
                            let t = this.tweenProps[r[e]];
                            (t.current = t.target), (t.isActive = !1);
                        }
            }
            onDOMRead(e) {
                for (let t = 0, i = this.attributes.length; t < i; t++) {
                    let i = this.attributes[t],
                        s = this.getNearestKeyframeForAttribute(i, e);
                    s && s.onDOMRead(i) && (this.needsWrite = !0);
                }
            }
            onDOMWrite() {
                (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && ((this.needsWrite = !1), this.onDOMWriteImp(), this.handleEventDispatch());
            }
            onDOMWriteForObject() {
                for (let e = 0, t = this.attributes.length; e < t; e++) {
                    let t = this.attributes[e];
                    this.element[t] = this.tweenProps[t].current;
                }
            }
            onDOMWriteForElement() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element.style;
                this.handleStyleTransform(e);
                for (let t = 0, i = this.cssAttributes.length; t < i; t++) this.cssAttributes[t].set(e);
                for (let e = 0, t = this.domAttributes.length; e < t; e++) this.domAttributes[e].set(this.element);
                if (this.needsStyleUpdate) {
                    for (let e in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[e] && (this.element.style[e] = this.tweenProps.targetStyles[e]), (this.tweenProps.targetStyles[e] = null);
                    this.needsStyleUpdate = !1;
                }
                this.needsClassUpdate &&
                    (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add),
                    this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove),
                    (this.tweenProps.targetClasses.add.length = 0),
                    (this.tweenProps.targetClasses.remove.length = 0),
                    (this.needsClassUpdate = !1));
            }
            handleStyleTransform() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element.style,
                    t = this.tweenProps;
                if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
                    const i = this.mat4;
                    (i[0] = 1), (i[1] = 0), (i[2] = 0), (i[3] = 0), (i[4] = 0), (i[5] = 1), (i[6] = 0), (i[7] = 0), (i[8] = 0), (i[9] = 0), (i[10] = 1), (i[11] = 0), (i[12] = 0), (i[13] = 0), (i[14] = 0), (i[15] = 1);
                    const s = t.x.current,
                        n = t.y.current,
                        r = t.z.current;
                    if (
                        ((i[12] = i[0] * s + i[4] * n + i[8] * r + i[12]),
                        (i[13] = i[1] * s + i[5] * n + i[9] * r + i[13]),
                        (i[14] = i[2] * s + i[6] * n + i[10] * r + i[14]),
                        (i[15] = i[3] * s + i[7] * n + i[11] * r + i[15]),
                        0 !== t.rotation.current || 0 !== t.rotationZ.current)
                    ) {
                        const e = (t.rotation.current || t.rotationZ.current) * v;
                        b.rotateZ(i, i, e);
                    }
                    if (0 !== t.rotationX.current) {
                        const e = t.rotationX.current * v;
                        b.rotateX(i, i, e);
                    }
                    if (0 !== t.rotationY.current) {
                        const e = t.rotationY.current * v;
                        b.rotateY(i, i, e);
                    }
                    (1 === t.scale.current && 1 === t.scaleX.current && 1 === t.scaleY.current) || b.scale(i, i, [t.scale.current, t.scale.current, 1]),
                        (e.transform =
                            "matrix3d(" +
                            i[0] +
                            "," +
                            i[1] +
                            "," +
                            i[2] +
                            "," +
                            i[3] +
                            "," +
                            i[4] +
                            "," +
                            i[5] +
                            "," +
                            i[6] +
                            "," +
                            i[7] +
                            "," +
                            i[8] +
                            "," +
                            i[9] +
                            "," +
                            i[10] +
                            "," +
                            i[11] +
                            "," +
                            i[12] +
                            "," +
                            i[13] +
                            "," +
                            i[14] +
                            "," +
                            i[15] +
                            ")");
                } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
                    const i = this.mat2d;
                    (i[0] = 1), (i[1] = 0), (i[2] = 0), (i[3] = 1), (i[4] = 0), (i[5] = 0);
                    const s = t.x.current,
                        n = t.y.current,
                        r = i[0],
                        a = i[1],
                        o = i[2],
                        l = i[3],
                        h = i[4],
                        d = i[5];
                    if (((i[0] = r), (i[1] = a), (i[2] = o), (i[3] = l), (i[4] = r * s + o * n + h), (i[5] = a * s + l * n + d), 0 !== t.rotation.current || 0 !== t.rotationZ.current)) {
                        const e = (t.rotation.current || t.rotationZ.current) * v,
                            s = i[0],
                            n = i[1],
                            r = i[2],
                            a = i[3],
                            o = i[4],
                            l = i[5],
                            h = Math.sin(e),
                            d = Math.cos(e);
                        (i[0] = s * d + r * h), (i[1] = n * d + a * h), (i[2] = s * -h + r * d), (i[3] = n * -h + a * d), (i[4] = o), (i[5] = l);
                    }
                    t.scaleX.isActive || t.scaleY.isActive
                        ? ((i[0] = i[0] * t.scaleX.current), (i[1] = i[1] * t.scaleX.current), (i[2] = i[2] * t.scaleY.current), (i[3] = i[3] * t.scaleY.current))
                        : ((i[0] = i[0] * t.scale.current), (i[1] = i[1] * t.scale.current), (i[2] = i[2] * t.scale.current), (i[3] = i[3] * t.scale.current)),
                        (e.transform = "matrix(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ", " + i[4] + ", " + i[5] + ")");
                }
            }
            handleEventDispatch() {
                if (0 !== this.keyframesRequiringDispatch.length) {
                    for (let e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
                        let t = this.keyframesRequiringDispatch[e];
                        (t.needsEventDispatch = !1), (this.eventObject.keyframe = t), (this.eventObject.pageMetrics = s.pageMetrics), (this.eventObject.event = t.event), this.trigger(t.event, this.eventObject);
                    }
                    this.keyframesRequiringDispatch.length = 0;
                }
                if (0 !== this._events.draw.length) {
                    (this.eventObject.keyframe = null), (this.eventObject.event = "draw");
                    for (let e = this._events.draw.length - 1; e >= 0; e--) this._events.draw[e](this.eventObject);
                }
            }
            updateAnimationConstraints() {
                for (let e = 0, t = this._activeKeyframes.length; e < t; e++) this._activeKeyframes[e].evaluateConstraints();
                this.attributes.forEach((e) => {
                    1 !== this.keyframes[e].length && this.keyframes[e].sort(s.KeyframeComparison);
                }),
                    this.updateDeferredPropertyValues();
            }
            refreshMetrics() {
                let e = new Set([this.element]);
                this._allKeyframes.forEach((t) => t.anchors.forEach((t) => e.add(t))), this.group.metrics.refreshCollection(e), (this.group.keyframesDirty = !0);
            }
            getTargetComputedStyle() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this._ownerIsElement ? ((e || void 0 === this.group.computedStyleCache[this.uuid]) && (this.group.computedStyleCache[this.uuid] = getComputedStyle(this.element)), this.group.computedStyleCache[this.uuid]) : null;
            }
            updateDeferredPropertyValues() {
                for (let e = 0, t = this.attributes.length; e < t; e++) {
                    let t = this.attributes[e],
                        i = this.keyframes[t];
                    if (!(i[0].keyframeType > s.KeyframeTypes.InterpolationForward))
                        for (let e = 0, s = i.length; e < s; e++) {
                            let n = i[e];
                            null === n.jsonProps[t][0] && (0 === e ? (n.jsonProps[t][0] = n.animValues[t][0] = this.tweenProps[t].current) : (n.animValues[t][0] = i[e - 1].animValues[t][1])),
                                null === n.jsonProps[t][1] && (n.animValues[t][1] = e === s - 1 ? this.tweenProps[t].current : i[e + 1].animValues[t][0]),
                                n.snapAtCreation && ((n.jsonProps[t][0] = n.animValues[t][0]), (n.jsonProps[t][1] = n.animValues[t][1]));
                        }
                }
            }
            getBounds(e) {
                (this.boundsMin = Number.MAX_VALUE), (this.boundsMax = -Number.MAX_VALUE);
                for (let t = 0, i = this.attributes.length; t < i; t++) {
                    let i = this.keyframes[this.attributes[t]];
                    for (let t = 0; t < i.length; t++) {
                        let s = i[t];
                        (this.boundsMin = Math.min(s.start, this.boundsMin)), (this.boundsMax = Math.max(s.end, this.boundsMax)), (e.min = Math.min(s.start, e.min)), (e.max = Math.max(s.end, e.max));
                    }
                }
            }
            getNearestKeyframeForAttribute(e, t) {
                t = void 0 !== t ? t : this.group.position.local;
                let i = null,
                    s = Number.POSITIVE_INFINITY,
                    n = this.keyframes[e];
                if (void 0 === n) return null;
                let r = n.length;
                if (0 === r) return null;
                if (1 === r) return n[0];
                for (let e = 0; e < r; e++) {
                    let r = n[e];
                    if (r.isInRange(t)) {
                        i = r;
                        break;
                    }
                    let a = Math.min(Math.abs(t - r.start), Math.abs(t - r.end));
                    a < s && ((s = a), (i = r));
                }
                return i;
            }
            getAllKeyframesForAttribute(e) {
                return this.keyframes[e];
            }
            updateKeyframe(e, t) {
                e.parseOptions(t),
                    e.evaluateConstraints(),
                    (this.group.keyframesDirty = !0),
                    m.update(() => {
                        this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e), this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e);
                    }, !0);
            }
            removeKeyframe(e) {
                return e.destroyed || e.controller !== this
                    ? Promise.resolve(null)
                    : ((e.markedForRemoval = !0),
                      (this.group.keyframesDirty = !0),
                      new Promise((t) => {
                          this.group.rafEmitter.executor.eventEmitter.once("before:draw", () => {
                              t(e), e.destroy();
                              let i = this._allKeyframes.indexOf(e);
                              -1 !== i && this._allKeyframes.splice(i, 1);
                          });
                      }));
            }
            updateAnimation(e, t) {
                return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = class {
            constructor(e) {
                (this.controller = e), (this.element = this.controller.element), (this.keyframe = null), (this.event = ""), (this.tweenProps = this.controller.tweenProps);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(10),
            n = i(51),
            r = i(103),
            a = i(75),
            o = function (e) {
                for (let t in e) {
                    let i = e[t];
                    if (-1 === s.KeyframeJSONReservedWords.indexOf(t) && Array.isArray(i)) return !0;
                }
                return !1;
            };
        e.exports = function (e) {
            if (void 0 !== e.cssClass || void 0 !== e.style) {
                if (o(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
                return a;
            }
            if (o(e)) return n;
            if (e.event) return r;
            throw (delete e.anchors, `Could not determine tween type based on ${JSON.stringify(e)}`);
        };
    },
    function (e, t, i) {
        "use strict";
        "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
        const s = 180 / Math.PI,
            n = (e) => Math.round(1e6 * e) / 1e6;
        function r(e) {
            return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        }
        function a(e, t) {
            return 0 === t ? Array.from(e) : [e[0] / t, e[1] / t, e[2] / t];
        }
        function o(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
        }
        function l(e, t, i, s) {
            return [e[0] * i + t[0] * s, e[1] * i + t[1] * s, e[2] * i + t[2] * s];
        }
        function h(e) {
            const t = new Float32Array(4),
                i = new Float32Array(3),
                h = new Float32Array(3),
                d = new Float32Array(3);
            (d[0] = e[3][0]), (d[1] = e[3][1]), (d[2] = e[3][2]);
            const c = new Array(3);
            for (let t = 0; t < 3; t++) c[t] = e[t].slice(0, 3);
            (i[0] = r(c[0])),
                (c[0] = a(c[0], i[0])),
                (h[0] = o(c[0], c[1])),
                (c[1] = l(c[1], c[0], 1, -h[0])),
                (i[1] = r(c[1])),
                (c[1] = a(c[1], i[1])),
                (h[0] /= i[1]),
                (h[1] = o(c[0], c[2])),
                (c[2] = l(c[2], c[0], 1, -h[1])),
                (h[2] = o(c[1], c[2])),
                (c[2] = l(c[2], c[1], 1, -h[2])),
                (i[2] = r(c[2])),
                (c[2] = a(c[2], i[2])),
                (h[1] /= i[2]),
                (h[2] /= i[2]);
            const u = ((m = c[1]), (p = c[2]), [m[1] * p[2] - m[2] * p[1], m[2] * p[0] - m[0] * p[2], m[0] * p[1] - m[1] * p[0]]);
            var m, p;
            if (o(c[0], u) < 0) for (let e = 0; e < 3; e++) (i[e] *= -1), (c[e][0] *= -1), (c[e][1] *= -1), (c[e][2] *= -1);
            let f;
            return (
                (t[0] = 0.5 * Math.sqrt(Math.max(1 + c[0][0] - c[1][1] - c[2][2], 0))),
                (t[1] = 0.5 * Math.sqrt(Math.max(1 - c[0][0] + c[1][1] - c[2][2], 0))),
                (t[2] = 0.5 * Math.sqrt(Math.max(1 - c[0][0] - c[1][1] + c[2][2], 0))),
                (t[3] = 0.5 * Math.sqrt(Math.max(1 + c[0][0] + c[1][1] + c[2][2], 0))),
                c[2][1] > c[1][2] && (t[0] = -t[0]),
                c[0][2] > c[2][0] && (t[1] = -t[1]),
                c[1][0] > c[0][1] && (t[2] = -t[2]),
                (f =
                    t[0] < 0.001 && t[0] >= 0 && t[1] < 0.001 && t[1] >= 0
                        ? [0, 0, n((180 * Math.atan2(c[0][1], c[0][0])) / Math.PI)]
                        : (function (e) {
                              const [t, i, r, a] = e,
                                  o = t * t,
                                  l = i * i,
                                  h = r * r,
                                  d = t * i + r * a,
                                  c = a * a + o + l + h;
                              return d > 0.49999 * c
                                  ? [0, 2 * Math.atan2(t, a) * s, 90]
                                  : d < -0.49999 * c
                                  ? [0, -2 * Math.atan2(t, a) * s, -90]
                                  : [n(Math.atan2(2 * t * a - 2 * i * r, 1 - 2 * o - 2 * h) * s), n(Math.atan2(2 * i * a - 2 * t * r, 1 - 2 * l - 2 * h) * s), n(Math.asin(2 * t * i + 2 * r * a) * s)];
                          })(t)),
                { translation: d, rotation: f, eulerRotation: f, scale: [n(i[0]), n(i[1]), n(i[2])] }
            );
        }
        e.exports = function (e) {
            e instanceof Element && (e = String(getComputedStyle(e).transform).trim());
            let t = new DOMMatrix(e);
            const i = new Array(4);
            for (let e = 1; e < 5; e++) {
                const s = (i[e - 1] = new Float32Array(4));
                for (let i = 1; i < 5; i++) s[i - 1] = t[`m${e}${i}`];
            }
            return h(i);
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(107);
        e.exports = class extends s {
            set(e) {
                const t = `rgba(${Math.round(this.current[0])},${Math.round(this.current[1])},${Math.round(this.current[2])},${this.current[3]})`;
                e.setProperty(this.key, t);
            }
            unset(e) {
                e.removeProperty(this.key);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(107),
            n = i(168);
        e.exports = class extends s {
            constructor(e, t, i, s, r, a, o) {
                super(n.parseExpression(null, e), t, i, s, r, a), (this.applyToStyle = o), (this.pathStrings = n.getPathStrings(e));
            }
            update(e, t, i) {
                if (e[0].length !== e[1].length) throw new Error(`Path length mismatch. Start/end paths must must contain the same number of points. Start value: \r ${n.reconstructPath(e[0], this.pathStrings)}`);
                return super.update(e, t, i);
            }
            set(e) {
                const t = n.reconstructPath(this.current, this.pathStrings);
                this.applyToStyle ? e.setProperty(this.key, t) : e.setAttribute("d", t);
            }
            unset(e) {
                if (this.applyToStyle) e.removeProperty(this.key);
                else {
                    const t = n.reconstructPath(this.initialValue, this.pathStrings);
                    e.setAttribute("d", t);
                }
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const { trim: s, getStringNumbers: n, getStringNonNumbers: r, reconstructStringWithNumbers: a } = i(169),
            o = /^\s*?M[(-?\d)|\s]/,
            l = /^(inset|circle|ellipse|polygon|path)\(/,
            h = (e) => o.test(e),
            d = (e) => l.test(e);
        e.exports = {
            install(e, t) {
                e.plugins.parser.includes(this) || e.plugins.parser.push(this);
            },
            parseExpression: (e, t) => ("string" == typeof t && (h(t) || d(t)) ? n(t) : null),
            scalePath(e, t) {
                const i = this.parseExpression(null, e),
                    s = r(e);
                for (let e = 0, s = i.length; e < s; e++) i[e] = i[e] * t;
                return this.reconstructPath(i, s);
            },
            trim: s,
            getPathStrings: r,
            getPathNumbers: n,
            reconstructPath: a,
        };
    },
    function (e, t, i) {
        "use strict";
        const s = /-?\d*\.?\d+/gm;
        e.exports = {
            getStringNumbers: (e) => e.match(s).map((e) => Number.parseFloat(e)),
            getStringNonNumbers: (e) => e.split(s),
            reconstructStringWithNumbers(e, t) {
                let i = "";
                for (var s = 0, n = e.length; s < n; s++) i += t[s] + e[s];
                return (i += t[n]), i;
            },
            trim: (e) => (null === e ? e : e.replace(/\s+/gm, " ").trim()),
        };
    },
    function (e, t) {
        e.exports = function () {
            var e = new Float32Array(16);
            return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 0), (e[4] = 0), (e[5] = 1), (e[6] = 0), (e[7] = 0), (e[8] = 0), (e[9] = 0), (e[10] = 1), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), e;
        };
    },
    function (e, t) {
        e.exports = function (e, t, i) {
            var s = Math.sin(i),
                n = Math.cos(i),
                r = t[4],
                a = t[5],
                o = t[6],
                l = t[7],
                h = t[8],
                d = t[9],
                c = t[10],
                u = t[11];
            t !== e && ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[12] = t[12]), (e[13] = t[13]), (e[14] = t[14]), (e[15] = t[15]));
            return (e[4] = r * n + h * s), (e[5] = a * n + d * s), (e[6] = o * n + c * s), (e[7] = l * n + u * s), (e[8] = h * n - r * s), (e[9] = d * n - a * s), (e[10] = c * n - o * s), (e[11] = u * n - l * s), e;
        };
    },
    function (e, t) {
        e.exports = function (e, t, i) {
            var s = Math.sin(i),
                n = Math.cos(i),
                r = t[0],
                a = t[1],
                o = t[2],
                l = t[3],
                h = t[8],
                d = t[9],
                c = t[10],
                u = t[11];
            t !== e && ((e[4] = t[4]), (e[5] = t[5]), (e[6] = t[6]), (e[7] = t[7]), (e[12] = t[12]), (e[13] = t[13]), (e[14] = t[14]), (e[15] = t[15]));
            return (e[0] = r * n - h * s), (e[1] = a * n - d * s), (e[2] = o * n - c * s), (e[3] = l * n - u * s), (e[8] = r * s + h * n), (e[9] = a * s + d * n), (e[10] = o * s + c * n), (e[11] = l * s + u * n), e;
        };
    },
    function (e, t) {
        e.exports = function (e, t, i) {
            var s = Math.sin(i),
                n = Math.cos(i),
                r = t[0],
                a = t[1],
                o = t[2],
                l = t[3],
                h = t[4],
                d = t[5],
                c = t[6],
                u = t[7];
            t !== e && ((e[8] = t[8]), (e[9] = t[9]), (e[10] = t[10]), (e[11] = t[11]), (e[12] = t[12]), (e[13] = t[13]), (e[14] = t[14]), (e[15] = t[15]));
            return (e[0] = r * n + h * s), (e[1] = a * n + d * s), (e[2] = o * n + c * s), (e[3] = l * n + u * s), (e[4] = h * n - r * s), (e[5] = d * n - a * s), (e[6] = c * n - o * s), (e[7] = u * n - l * s), e;
        };
    },
    function (e, t) {
        e.exports = function (e, t, i) {
            var s = i[0],
                n = i[1],
                r = i[2];
            return (
                (e[0] = t[0] * s),
                (e[1] = t[1] * s),
                (e[2] = t[2] * s),
                (e[3] = t[3] * s),
                (e[4] = t[4] * n),
                (e[5] = t[5] * n),
                (e[6] = t[6] * n),
                (e[7] = t[7] * n),
                (e[8] = t[8] * r),
                (e[9] = t[9] * r),
                (e[10] = t[10] * r),
                (e[11] = t[11] * r),
                (e[12] = t[12]),
                (e[13] = t[13]),
                (e[14] = t[14]),
                (e[15] = t[15]),
                e
            );
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(76),
            n = i(108),
            r = i(31);
        let a = 0;
        const o = {};
        "undefined" != typeof window && (o.create = i(14));
        class l extends s {
            constructor(e, t) {
                e || ((e = document.createElement("div")).className = "TimeGroup-" + a++),
                    super(e, t),
                    (this.name = this.name || e.getAttribute("data-anim-time-group")),
                    (this._isPaused = !0),
                    (this._repeats = 0),
                    (this._isReversed = !1),
                    (this._timeScale = 1),
                    (this._chapterPlayer = new n(this)),
                    (this.now = performance.now());
            }
            finalizeInit() {
                if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
                (this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this)), super.finalizeInit();
            }
            progress(e) {
                if (void 0 === e) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
                let t = e * this.boundsMax;
                (this.timelineUpdateRequired = !0), this.updateTimeline(t);
            }
            time(e) {
                if (void 0 === e) return this.position.local;
                (e = r.clamp(e, this.boundsMin, this.duration)), (this.timelineUpdateRequired = !0), this.updateTimeline(e);
            }
            play(e) {
                this.reversed(!1), (this.isEnabled = !0), (this._isPaused = !1), this.time(e), (this.now = performance.now()), this._playheadEmitter.run();
            }
            reverse(e) {
                this.reversed(!0), (this.isEnabled = !0), (this._isPaused = !1), this.time(e), (this.now = performance.now()), this._playheadEmitter.run();
            }
            reversed(e) {
                if (void 0 === e) return this._isReversed;
                this._isReversed = e;
            }
            restart() {
                this._isReversed ? (this.progress(1), this.reverse(this.time())) : (this.progress(0), this.play(this.time()));
            }
            pause(e) {
                this.time(e), (this._isPaused = !0);
            }
            paused(e) {
                return void 0 === e ? this._isPaused : ((this._isPaused = e), this._isPaused || this.play(), this);
            }
            onPlayTimeUpdate() {
                if (this._isPaused) return;
                let e = performance.now(),
                    t = (e - this.now) / 1e3;
                (this.now = e), this._isReversed && (t = -t);
                let i = this.time() + t * this._timeScale;
                if (this._repeats === l.REPEAT_FOREVER || this._repeats > 0) {
                    let e = !1;
                    !this._isReversed && i > this.boundsMax ? ((i -= this.boundsMax), (e = !0)) : this._isReversed && i < 0 && ((i = this.boundsMax + i), (e = !0)),
                        e && (this._repeats = this._repeats === l.REPEAT_FOREVER ? l.REPEAT_FOREVER : this._repeats - 1);
                }
                this.time(i);
                let s = !this._isReversed && this.position.local !== this.duration,
                    n = this._isReversed && 0 !== this.position.local;
                s || n ? this._playheadEmitter.run() : this.paused(!0);
            }
            updateProgress(e) {
                this.hasDuration() ? ((this.position.localUnclamped = e), (this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax))) : (this.position.local = this.position.localUnclamped = 0);
            }
            updateBounds() {
                if (0 === this.keyframeControllers.length) return (this.boundsMin = 0), void (this.boundsMax = 0);
                let e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
                for (let t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
                (this.boundsMin = 0), (this.boundsMax = e.max), (this.viewableRange.a = this.viewableRange.b = 0), (this.viewableRange.c = this.viewableRange.d = this.boundsMax), (this.timelineUpdateRequired = !0);
            }
            setupRAFEmitter(e) {
                (this._playheadEmitter = new o.create()), this._playheadEmitter.on("update", this.onPlayTimeUpdate), super.setupRAFEmitter(e);
            }
            get duration() {
                return this.keyframesDirty && this.onKeyframesDirty({ silent: !0 }), this.boundsMax;
            }
            timeScale(e) {
                return void 0 === e ? this._timeScale : ((this._timeScale = e), this);
            }
            repeats(e) {
                if (void 0 === e) return this._repeats;
                this._repeats = e;
            }
            getPosition() {
                return this.position.local;
            }
            addChapter(e) {
                return this._chapterPlayer.addChapter(e);
            }
            playToChapter(e) {
                return this._chapterPlayer.playToChapter(e);
            }
            convertScrollPositionToTValue(e) {
                return e;
            }
            convertTValueToScrollPosition(e) {
                return e;
            }
            hasDuration() {
                return this.duration > 0;
            }
            destroy() {
                this._chapterPlayer.destroy(), this._playheadEmitter.destroy(), (this._playheadEmitter = null), super.destroy();
            }
            get timelineProgress() {
                return this.progress();
            }
            set timelineProgress(e) {
                this.progress(e);
            }
            get progressValue() {
                return this.progress();
            }
            set progressValue(e) {
                this.progress(e);
            }
            get timeValue() {
                return this.time();
            }
            set timeValue(e) {
                this.time(e);
            }
        }
        (l.REPEAT_FOREVER = -1), (e.exports = l);
    },
    function (e, t, i) {
        "use strict";
        const s = i(76),
            n = (i(108), i(31));
        let r = 0;
        const a = {};
        "undefined" != typeof window && (a.create = i(14));
        e.exports = class extends s {
            constructor(e, t) {
                e || ((e = document.createElement("div")).className = "TweenGroup-" + r++), super(e, t), (this.name = "Tweens"), (this.keyframes = []), (this._isPaused = !1), (this.now = performance.now());
            }
            finalizeInit() {
                (this.onTimeEmitterUpdate = this.onTimeEmitterUpdate.bind(this)), (this.removeExpiredKeyframeControllers = this.removeExpiredKeyframeControllers.bind(this)), super.finalizeInit();
            }
            destroy() {
                this._timeEmitter.destroy(), (this._timeEmitter = null), (this._keyframes = []), super.destroy();
            }
            setupRAFEmitter(e) {
                (this.now = performance.now()), (this._timeEmitter = new a.create()), this._timeEmitter.on("update", this.onTimeEmitterUpdate), this._timeEmitter.run(), super.setupRAFEmitter(e);
            }
            addKeyframe(e, t) {
                if (void 0 !== t.start || void 0 !== t.end) throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
                if ("number" != typeof t.duration) throw Error("Tween options.duration is undefined, or is not a number");
                let i, s;
                (t.start = (t.delay || 0) + this.position.localUnclamped), (t.end = t.start + t.duration), (t.preserveState = !0), (t.snapAtCreation = !0), e._animInfo && ((i = e._animInfo.group), (s = e._animInfo.controller));
                let n = super.addKeyframe(e, t);
                return (
                    (e._animInfo.group = i),
                    (e._animInfo.controller = s),
                    [
                        ["onStart", "once"],
                        ["onDraw", "on"],
                    ].forEach((e) => {
                        let [i, s] = e;
                        if (!t[i]) return;
                        let r = t[i];
                        t[i] = n.controller[s]("draw", (e) => {
                            n.markedForRemoval || ((e.keyframe = n), r(e), (e.keyframe = null));
                        });
                    }),
                    this.removeOverlappingProps(n),
                    this.keyframes.push(n),
                    this._timeEmitter.willRun() || ((this.now = performance.now()), this._timeEmitter.run()),
                    n
                );
            }
            removeOverlappingProps(e) {
                if (e.controller._allKeyframes.length <= 1) return;
                let t = Object.keys(e.animValues),
                    i = e.controller;
                for (let s = 0, n = i._allKeyframes.length; s < n; s++) {
                    const n = i._allKeyframes[s];
                    if (n === e) continue;
                    if (n.markedForRemoval) continue;
                    let r = Object.keys(n.animValues),
                        a = r.filter((e) => t.includes(e));
                    a.length !== r.length ? a.forEach((e) => delete n.animValues[e]) : ((n.markedForRemoval = !0), n.jsonProps.onDraw && n.controller.off("draw", n.jsonProps.onDraw));
                }
            }
            onTimeEmitterUpdate(e) {
                if (this._isPaused || 0 === this.keyframeControllers.length) return;
                let t = performance.now(),
                    i = (t - this.now) / 1e3;
                this.now = t;
                let s = this.position.local + i;
                (this.position.local = this.position.localUnclamped = s), this.onTimeUpdate();
            }
            onTimeUpdate() {
                for (let e = 0, t = this.keyframes.length; e < t; e++) this.keyframes[e].markedForRemoval || this.keyframes[e].updateLocalProgress(this.position.localUnclamped);
                this.requestDOMChange(), this._timeEmitter.run(), null !== this.gui && this.gui.onScrollUpdate(this.position);
            }
            onDOMRead() {
                if ((this.keyframesDirty && this.onKeyframesDirty(), 0 !== this.keyframes.length))
                    for (let e = 0, t = this.keyframes.length; e < t; e++) {
                        this.keyframes[e].controller.needsWrite = !0;
                        for (let t in this.keyframes[e].animValues) this.keyframes[e].onDOMRead(t);
                    }
            }
            onDOMWrite() {
                super.onDOMWrite(), this.removeExpiredKeyframes();
            }
            removeExpiredKeyframes() {
                let e = this.keyframes.length,
                    t = e;
                for (; e--; ) {
                    let t = this.keyframes[e];
                    t.destroyed
                        ? this.keyframes.splice(e, 1)
                        : (t.markedForRemoval &&
                              (t.jsonProps.onComplete && 1 === t.localT && ((t.controller.eventObject.keyframe = t), t.jsonProps.onComplete(t.controller.eventObject), (t.jsonProps.onComplete = null)),
                              (null !== this.gui && this.gui.isDraggingPlayhead) || (t.remove(), this.keyframes.splice(e, 1)),
                              t.jsonProps.onStart && t.controller.off("draw", t.jsonProps.onStart),
                              t.jsonProps.onDraw && t.controller.off("draw", t.jsonProps.onDraw)),
                          1 === t.localT && (t.markedForRemoval = !0));
                }
                (this.keyframes.length === t && 0 !== this.keyframes.length) || this._timeEmitter.executor.eventEmitter.once("after:draw", this.removeExpiredKeyframeControllers);
            }
            removeExpiredKeyframeControllers() {
                for (let e = 0, t = this.keyframeControllers.length; e < t; e++) {
                    let t = !0,
                        i = this.keyframeControllers[e];
                    for (let e = 0, s = i._allKeyframes.length; e < s; e++)
                        if (!i._allKeyframes[e].destroyed) {
                            t = !1;
                            break;
                        }
                    t && i.remove();
                }
            }
            updateBounds() {
                (this.boundsMin = Math.min(...this.keyframes.map((e) => e.start))), (this.boundsMax = Math.max(...this.keyframes.map((e) => e.end)));
            }
            play() {
                (this.isEnabled = !0), (this._isPaused = !1), (this.now = performance.now()), this._timeEmitter.run();
            }
            pause() {
                this._isPaused = !0;
            }
            paused() {
                return this._isPaused;
            }
            time(e) {
                if (void 0 === e) return this.position.local;
                (this.position.local = this.position.localUnclamped = n.clamp(e, this.boundsMin, this.boundsMax)), this.onTimeUpdate();
            }
            performTimelineDispatch() {}
            hasDuration() {
                return !0;
            }
            getPosition() {
                return this.position.local;
            }
            updateProgress(e) {}
            get duration() {
                return this.boundsMax;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = { version: "3.8.0", major: "3.x", majorMinor: "3.8" };
    },
    function (e, t, i) {
        "use strict";
        let s = !1,
            n = !1,
            r = [],
            a = -1;
        e.exports = {
            NUMBER_OF_FRAMES_TO_WAIT: 30,
            add: function (e) {
                if ((n && e(), r.push(e), s)) return;
                s = !0;
                let t = document.documentElement.scrollHeight,
                    i = 0;
                const o = () => {
                    let e = document.documentElement.scrollHeight;
                    if (t !== e) i = 0;
                    else if ((i++, i >= this.NUMBER_OF_FRAMES_TO_WAIT)) return void r.forEach((e) => e());
                    (t = e), (a = requestAnimationFrame(o));
                };
                a = requestAnimationFrame(o);
            },
            reset() {
                cancelAnimationFrame(a), (s = !1), (n = !1), (r = []);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(111),
            n = i(80),
            r = i(1),
            a = i(9);
        class o extends s {
            constructor() {
                super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (this.arrayImg = []);
            }
            _init() {
                super._init(), (this._onBreakpointChangeCallback = this._onBreakpointChangeCallback.bind(this)), this._addViewportEvents(), this._resetPromises(), this._addMethodsToImageElement();
            }
            _addViewportEvents() {
                let e = this.options.breakpoints ? { breakpoints: this.options.breakpoints } : {};
                (this.viewportEmitterMicro = new n(e)), this.viewportEmitterMicro.on(n.CHANGE_EVENTS.VIEWPORT, this._onBreakpointChangeCallback), this.viewportEmitterMicro.on(n.CHANGE_EVENTS.RETINA, this._onBreakpointChangeCallback);
            }
            _addKeyframesToImages() {
                (this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body)),
                    this._images.forEach((e) => {
                        this.AnimSystem.getGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(e));
                        let t = this._defineKeyframeOptions(e);
                        this._scrollGroup.addKeyframe(e, t).controller.on("AnimLazyImage:enter", () => {
                            this._imageIsInLoadRange(e);
                        });
                    });
            }
            _onBreakpointChangeCallback(e) {
                this._resetPromises(),
                    (this.arrayImg = []),
                    this._images.forEach((e) => {
                        this._cleanUpImageAttributes(e), "" != e.getAttribute(s.DATA_ATTRIBUTE) && this._imageIsInLoadRange(e);
                    });
            }
            _resetPromises() {
                this._images.forEach((e) => {
                    (e.promises = {}),
                        (e.promises.downloadComplete = new Promise((t) => {
                            e.promises.__completePromiseResolver = t;
                        }));
                });
            }
            _addMethodsToImageElement() {
                this._images.forEach((e) => {
                    e.forceLazyLoad = () => {
                        this._imageIsInLoadRange(e);
                    };
                });
            }
            _imageIsInLoadRange(e) {
                this._downloadImage(e).then(() => {
                    e.promises.__completePromiseResolver(e), e.dispatchEvent(new Event(o.EVENTS.DOWNLOAD_COMPLETE));
                });
            }
            _cleanUpImageAttributes(e) {
                e.removeAttribute(o.DATA_DOWNLOADING_ATTRIBUTE), e.removeAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE);
            }
            _downloadingImageAttributes(e) {
                super._downloadingImageAttributes(e), e.setAttribute(o.DATA_DOWNLOADING_ATTRIBUTE, "");
            }
            _finishedDownloadAttributes(e) {
                e.removeAttribute(o.DATA_DOWNLOADING_ATTRIBUTE), e.setAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE, "");
            }
            _downloadImage(e) {
                return new Promise((t, i) => {
                    null === e.getAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE)
                        ? null === e.getAttribute(o.DATA_DOWNLOADING_ATTRIBUTE) &&
                          this._waitForBackgroundVisible(e)
                              .then((e) => this._getBackgroundImageSrc(e))
                              .then((e) => this._loadImage(e))
                              .then(() => {
                                  r(() => {
                                      this._finishedDownloadAttributes(e), t();
                                  }, !0);
                              })
                        : t();
                });
            }
            _waitForBackgroundVisible(e) {
                return new Promise((t, i) => {
                    r(() => {
                        this._downloadingImageAttributes(e), t(e);
                    }, !0);
                });
            }
            _getBackgroundImageSrc(e) {
                return new Promise((t, i) => {
                    a(() => {
                        let i = e.currentStyle;
                        i || (i = window.getComputedStyle(e, !1)), 0 !== i.backgroundImage.indexOf("url(") ? t(null) : t(i.backgroundImage.slice(4, -1).replace(/"/g, ""));
                    }, !0);
                });
            }
            _loadImage(e) {
                return new Promise(this._loadImagePromiseFunc.bind(this, e));
            }
            _loadImagePromiseFunc(e, t, i) {
                if (!e) return void t(null);
                let s = new Image(1, 1);
                s.addEventListener("load", function e(i) {
                    s.removeEventListener("load", e), t(this);
                }),
                    (s.src = e),
                    this.arrayImg.push(s);
            }
        }
        (o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete"),
            (o.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading"),
            (o.EVENTS = {}),
            (o.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete"),
            (e.exports = o);
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191,
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default =
            '<div class="modal" data-modal-element-container data-modal-close>\n\t<div class="modal-overlay-container" data-modal-element-overlay-container data-modal-close>\n\t\t<div class="modal-overlay" data-modal-element-overlay data-modal-close-button-parent>\n\t\t\t<div class="modal-content-container" data-modal-element-content-container></div>\n\t\t</div>\n\t</div>\n</div>';
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(183));
        t.default = `<button data-modal-element-close-button>\n\t<span data-modal-element-close-icon>${n.default}</span>\n</button>`;
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"/></svg>';
    },
    function (e, t, i) {
        "use strict";
        const s = i(185),
            n = i(56);
        e.exports = { PictureLazyLoading: s, PictureHead: n };
    },
    function (e, t, i) {
        "use strict";
        const s = i(13).PICTURE_DATA_LAZY,
            n = i(13).PICTURE_DATA_EMPTY_SOURCE,
            r = i(13).PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME;
        e.exports = class {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (this.options = e), this._init();
            }
            _init() {
                (this._pictures = Array.from(document.querySelectorAll(`*[${s}]`))), (this.AnimSystem = this._findAnim()), null !== this.AnimSystem && (this._injectSources(), this._addKeyframesToImages(), this._addMethodsToPictures());
            }
            _addMethodsToPictures() {
                this._pictures.forEach((e) => {
                    e.forceLoad = () => {
                        this._downloadImage(e);
                    };
                });
            }
            _injectSources() {
                this._pictures.forEach((e) => {
                    const t = e.nextElementSibling;
                    if (t && "NOSCRIPT" === t.nodeName) {
                        const i = e.querySelector("img"),
                            s = t.textContent.match(/<source .+ \/>/g);
                        s && i.insertAdjacentHTML("beforebegin", s.join(""));
                    }
                });
            }
            _defineKeyframeOptions(e) {
                const t = e.getAttribute(r) || "{}";
                return Object.assign({}, { start: "t - 200vh", end: "b + 100vh", event: "PictureLazyLoading" }, JSON.parse(t));
            }
            _addKeyframesToImages() {
                this._pictures.forEach((e) => {
                    (e.__scrollGroup = this.AnimSystem.getGroupForTarget(document.body)), this.AnimSystem.getGroupForTarget(e) && (e.__scrollGroup = this.AnimSystem.getGroupForTarget(e));
                    let t = this._defineKeyframeOptions(e);
                    e.__scrollGroup.addKeyframe(e, t).controller.once("PictureLazyLoading:enter", () => {
                        this._imageIsInLoadRange(e);
                    });
                });
            }
            _imageIsInLoadRange(e) {
                e.querySelector("img") && this._downloadImage(e);
            }
            _downloadImage(e) {
                const t = e.querySelector(`[${n}]`);
                t && e.removeChild(t);
            }
            _findAnim() {
                var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
                return (
                    e.map((e) => (e._animInfo ? e._animInfo.group : null)).filter((e) => null !== e),
                    e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("PictureLazyLoading: AnimSystem not found, please initialize anim before instantiating"), null)
                );
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = t.EVT_SCROLL_HEIGHT_CHANGED = void 0);
        var n = s(i(6));
        const r = (t.EVT_SCROLL_HEIGHT_CHANGED = "scroll-height-monitor:height-change");
        class a extends n.default {
            constructor(e) {
                super(), (this._targetEl = e || document.body), (this._heightEl = null), (this._onResize = this._onResize.bind(this)), (this.resizeObserver = new ResizeObserver(this._onResize)), this.resizeObserver.observe(this.heightEl);
            }
            get heightEl() {
                if (!this._heightEl) {
                    const e = document.createElement("div");
                    e.setAttribute("data-scroll-height-monitor", "true"),
                        (e.style.cssText = "\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        pointer-events: none;\n        z-index: -1;\n        visibility: hidden;\n      "),
                        this._targetEl.appendChild(e),
                        (this._heightEl = e);
                }
                return this._heightEl;
            }
            _onResize(e) {
                let t;
                for (const i of e) t = i.target;
                this.trigger(r, t);
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0),
            n = s(i(188)),
            r = s(i(189)),
            a = s(i(94)),
            o = s(i(237)),
            l = s(i(238)),
            h = s(i(274)),
            d = s(i(276)),
            c = s(i(281)),
            u = s(i(282)),
            m = s(i(283)),
            p = s(i(309)),
            f = s(i(312)),
            _ = s(i(313)),
            g = s(i(319)),
            E = s(i(140)),
            y = s(i(141)),
            v = s(i(320)),
            b = s(i(333)),
            A = s(i(337)),
            T = s(i(340)),
            I = s(i(341)),
            w = s(i(342)),
            C = s(i(343)),
            S = s(i(348)),
            O = s(i(349)),
            P = s(i(50));
        e.exports = {
            AllAccessPassL1: b.default,
            AllAccessPassL2: A.default,
            Accordion: v.default,
            ArLink: u.default,
            DeviceAnim: T.default,
            FocusManager: n.default,
            HighlightsGallery: r.default,
            IconCardModal: g.default,
            InlineMedia: a.default,
            InlineMediaDefault: o.default,
            InlineMediaPlugins: C.default,
            L2Modal: l.default,
            PageXpController: h.default,
            PhotosSlideGallery: d.default,
            ProductTileEqualizer: c.default,
            ProductViewerGallery: m.default,
            RealTimeViewerConnector: f.default,
            RealTimeViewerBase: p.default,
            SlideGallery: _.default,
            Scroller: E.default,
            ScrollPaddleNav: y.default,
            StatCounter: S.default,
            TextAnim: I.default,
            Welcome: O.default,
            WelcomeLocalnavTrigger: P.default,
            WillChange: w.default,
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(106)),
            r = s(i(3));
        const a = "data-focus-expression";
        class o extends r.default {
            constructor(e) {
                super(e), (this._els = this.el.querySelectorAll("[data-focus-expression]")), (this._lastPosition = 0), (this._handleFocus = this._handleFocus.bind(this)), (this._destroy = this._destroy.bind(this));
            }
            mounted() {
                this._updateFocusTargets(), this._parseOptions(), this._setTabIndex(), this._setupEvents();
            }
            _updateFocusTargets() {
                const e = [];
                (this._els = Array.from(this._els).map((t) => {
                    const i = JSON.parse(t.getAttribute(a));
                    let s = t;
                    if ((i.hasOwnProperty("focus-target-child") && ((s = t.querySelector(i["focus-target-child"])), s.setAttribute(a, JSON.stringify(i)), t.removeAttribute(a)), i.hasOwnProperty("focus-target-footnote"))) {
                        const s = t.querySelector(i["focus-target-footnote"]);
                        s.setAttribute(a, JSON.stringify({ ...i, tabindex: "0" })), e.push(s);
                    }
                    return s;
                })),
                    (this._els = [...this._els, ...e]);
            }
            _setupEvents() {
                this.el.addEventListener("focusin", this._handleFocus);
            }
            _destroy() {
                this._removeTabIndex(), this.el.removeEventListener("focusin", this._handleFocus);
            }
            _parseOptions() {
                this._els.forEach((e) => {
                    const t = JSON.parse(e.getAttribute(a));
                    (e._focusExpression = t.expression),
                        t.hasOwnProperty("anchors") ? (e._focusAnchors = t.anchors.map((e) => document.querySelector(e))) : t.hasOwnProperty("anchors-closest") && (e._focusAnchors = t["anchors-closest"].map((t) => e.closest(t))),
                        t.hasOwnProperty("tabindex") && (e._tabIndex = t.tabindex),
                        t.hasOwnProperty("expression-last") && (e._focusExpressionLast = t["expression-last"]),
                        (e._focusDelay = !!t.hasOwnProperty("focus-delay") && t["focus-delay"]);
                });
            }
            _handleFocus(e) {
                if ("key" !== e.target.dataset.focusMethod) return;
                const t = e.target;
                this.focusOn(t);
            }
            focusOn(e) {
                if (e.hasAttribute(a)) {
                    if (!this._isEnabledWhen(e)) return;
                    const t = { target: e };
                    e._focusAnchors && (t.anchors = e._focusAnchors);
                    const i = e._focusDelay ? 100 : 0;
                    setTimeout(() => {
                        e.hasOwnProperty("_focusExpressionLast") && this._lastPosition > n.default.parse(e._focusExpression, t)
                            ? (window.scrollTo(0, n.default.parse(e._focusExpressionLast, t)), (this._lastPosition = n.default.parse(e._focusExpressionLast, t)))
                            : (window.scrollTo(0, n.default.parse(e._focusExpression, t)), (this._lastPosition = n.default.parse(e._focusExpression, t))),
                            e.closest(".section") && e.closest(".section").scrollTo(0, 0);
                    }, i),
                        "-1" === e.getAttribute("tabindex") && e.blur();
                }
            }
            _isEnabledWhen(e) {
                const t = document.documentElement.classList,
                    i = e.getAttribute("data-focus-enabled-when") || "enhanced";
                return t.contains(i);
            }
            _setTabIndex() {
                this._els.forEach((e) => {
                    let t = -1;
                    e.hasOwnProperty("_tabIndex") && (t = e._tabIndex), e.setAttribute("tabindex", t);
                });
            }
            _removeTabIndex() {
                this._els.forEach((e) => e.removeAttribute("tabindex"));
            }
            static IS_SUPPORTED() {
                return !0;
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(23)),
            r = i(7),
            a = s(i(190));
        const o = r.FEATURE_ENHANCED;
        class l extends n.default {
            static IS_SUPPORTED() {
                return !0;
            }
            constructor(e) {
                super(e),
                    (this.featureDetect = o),
                    (this.enhancedScrollGroup = this.anim.createScrollGroup(this.el)),
                    (this.enhancedScrollGroup.name = "Highlights - Gallery - Enhanced"),
                    "Section - Component - Enhanced" === this.enhancedScrollGroup.name && this.logger.error(`${this.componentName}: rename default scroll group`);
            }
            mounted() {
                this.highlightsGallery = new a.default({ el: this.el });
            }
            onUnenhance() {
                this.unenhanced || ((this.unenhanced = !0), this.highlightsGallery.fallbackToStatic());
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        const s = i(52),
            n = i(199),
            r = i(204),
            a = i(205),
            o = i(206),
            l = i(90),
            h = i(207),
            d = i(84),
            c = i(208),
            u = i(209),
            m = i(230),
            p = i(93),
            f = i(54),
            _ = {
                beforeCreate() {
                    (this.sectionEle = this.el.closest("section")),
                        (this.model.PrefersReducedMotion = document.documentElement.classList.contains("reduced-motion")),
                        (this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir")),
                        (this.model.IsTouch = "ontouchstart" in document.documentElement),
                        (this.model.Item.Selector = ".item-container .gallery-item"),
                        (this.model.Slide.Selector = ".item-container"),
                        (this.model.SwipeDrag.movementRateMultiplier = 1.2),
                        (this.model.SwipeDrag.velocityMultiplier = 4);
                },
                mounted() {
                    (this.isPlaying = !1),
                        (this.highlightsContent = this.el),
                        (this.tabListWrapper = this.el.querySelector(".tablist-wrapper")),
                        (this.playPauseButton = this.el.querySelector(".play-pause-button")),
                        (this.currentItems = this.tabListWrapper.querySelectorAll(".current")),
                        (this.galleryContainer = this.el.querySelector(".media-gallery")),
                        (this.dotnavItems = this.el.querySelectorAll(".dotnav-link")),
                        (this._setupEvents = this._setupEvents.bind(this)),
                        (this._playHighlightsGallery = this._playHighlightsGallery.bind(this)),
                        (this._pauseHighlightsGallery = this._pauseHighlightsGallery.bind(this)),
                        (this._resetHighlightsGallery = this._resetHighlightsGallery.bind(this)),
                        (this.abortPreloadingMedia = this.abortPreloadingMedia.bind(this)),
                        (this.startPreloadingMedia = this.startPreloadingMedia.bind(this)),
                        (this._preloadOnKeyframe = this._preloadOnKeyframe.bind(this)),
                        (this._preloadOnPriorSectionLoaded = this._preloadOnPriorSectionLoaded.bind(this)),
                        (this._togglePlayPause = this._togglePlayPause.bind(this)),
                        (this._preloadStrategies = { keyframe: this._preloadOnKeyframe, "prior-section": this._preloadOnPriorSectionLoaded }),
                        this.anim.addEvent(this.el, { anchors: ["body"], start: "a0t - 100vh", end: "b", onExit: this.abortPreloadingMedia, event: "abort-preload-on-exit-kf", disabledWhen: ["reduced-motion", "aow"] }),
                        this.anim.addEvent(this.el, {
                            anchors: ["#media-gallery"],
                            start: "a0t + css(--hlts-anim-play-percent-in-view, a0) * 1a0h - 100vh",
                            end: "a0t - css(--hlts-anim-pause-remaining-to-top)",
                            onEnter: () => {
                                this.galleryHasEnded || this._playHighlightsGallery();
                            },
                            onExit: () => {
                                this.galleryHasEnded || this._pauseHighlightsGallery();
                            },
                            event: "play-pause-kf",
                            disabledWhen: ["reduced-motion"],
                        }),
                        (this.highlightsTimeGroup = this.anim.createTimeGroup()),
                        this._setupEvents();
                },
                _executePreloadStrategy() {
                    const e = this.galleryContainer.getAttribute("data-preload-strategy");
                    "string" == typeof e &&
                        e.split(/,\s*/).forEach((e) => {
                            const t = this._preloadStrategies[e];
                            if (!t) throw new Error(`"${e}" is not a valid preload-strategy. Please select from any of the following values: ${Object.keys(this._preloadStrategies).join(", ")}`);
                            t();
                        });
                },
                _preloadOnKeyframe() {
                    this.anim.addEvent(this.el, { anchors: ["#media-gallery"], start: "a0t - 100vh", end: "b", event: "preload-kf", onEnter: this.startPreloadingMedia, disabledWhen: ["reduced-motion", "aow"] });
                },
                _preloadOnPriorSectionLoaded() {
                    const e = this._getPriorSectionVideos(),
                        t = [];
                    e.forEach((e, i) => {
                        t[i] = new Promise((t, i) => {
                            e.addEventListener("progress", (i) => {
                                e.buffered.length && e.buffered.end(0) === e.duration && t();
                            }),
                                e.addEventListener("error", (e) => {
                                    t();
                                });
                        });
                    }),
                        Promise.all(t).then(this.startPreloadingMedia);
                },
                _getPriorSectionVideos() {
                    const e = this.sectionEle.previousElementSibling;
                    return e ? Array.from(e.querySelectorAll("video")) : [];
                },
                _setupEvents() {
                    const e = 6.15;
                    let t = 0;
                    this.playPauseButton.addEventListener("click", this._togglePlayPause),
                        this.galleryContainer.addEventListener("click", this._togglePlayPause),
                        this.dotnavItems.forEach((i, s) => {
                            this.highlightsTimeGroup.addKeyframe(i, { start: t, end: t + e, event: "play-animation" }).controller.on("play-animation:exit", () => {
                                if (!this.isTransitioning && this.currentIndex === s) {
                                    this.lastInteractionEvent = { event: "timeout" };
                                    const e = (this.currentIndex + 1) % this._items.length;
                                    this.animateToItem(e);
                                }
                            }),
                                (t = t + e + 0.1),
                                i.addEventListener("click", () => {
                                    this.galleryHasEnded && this._pauseHighlightsGallery(),
                                        (this.galleryHasEnded = !1),
                                        (this.isTransitioning = !0),
                                        this.highlightsTimeGroup.time(6.25 * this.currentIndex),
                                        requestAnimationFrame(() => {
                                            this.isTransitioning = !1;
                                        });
                                });
                        }),
                        this.highlightsTimeGroup.on("complete", () => {
                            (this.isPlaying = !1),
                                this.highlightsContent.classList.add("ended"),
                                this.highlightsContent.classList.remove("playing"),
                                this.highlightsContent.classList.remove("paused"),
                                this._updateAnalytics("Replay"),
                                (this.galleryHasEnded = !0);
                        }),
                        this.onSlideChangeCompleted((e) => {
                            ("swipe" !== e.type && "keynav" !== e.type) ||
                                ((this.isTransitioning = !0),
                                this.highlightsTimeGroup.time(6.25 * e.entered.index),
                                this.galleryHasEnded && ((this.galleryHasEnded = !1), this._pauseHighlightsGallery()),
                                requestAnimationFrame(() => {
                                    this.isTransitioning = !1;
                                }));
                        });
                    const i = this.sectionEle.querySelector("[data-films-modal-link]");
                    i && i.addEventListener("click", this._pauseHighlightsGallery), this.galleryContainer.classList.add("media-gallery-initialized"), this._executePreloadStrategy();
                },
                _playHighlightsGallery() {
                    this.galleryHasEnded ? ((this.galleryHasEnded = !1), this._resetHighlightsGallery()) : this.playCurrentMediaGalleryItem(),
                        (this.isPlaying = !0),
                        this.highlightsContent.classList.add("playing"),
                        this.highlightsContent.classList.remove("paused"),
                        this.highlightsContent.classList.remove("ended"),
                        requestAnimationFrame(() => {
                            this._updateAnalytics("Pause");
                        }),
                        this.highlightsTimeGroup.play();
                },
                _pauseHighlightsGallery() {
                    (this.isPlaying = !1),
                        this.highlightsContent.classList.add("paused"),
                        this.highlightsContent.classList.remove("playing"),
                        this.highlightsContent.classList.remove("ended"),
                        requestAnimationFrame(() => {
                            this._updateAnalytics("Play");
                        }),
                        this.highlightsTimeGroup.pause(),
                        this.pauseCurrentMediaGalleryItem();
                },
                _togglePlayPause() {
                    this.isPlaying ? this._pauseHighlightsGallery() : this._playHighlightsGallery();
                },
                _resetHighlightsGallery() {
                    this.highlightsTimeGroup.restart(),
                        this.currentItems.forEach((e) => {
                            e.classList.remove("current"),
                                requestAnimationFrame(() => {
                                    e.classList.add("current");
                                });
                        }),
                        requestAnimationFrame(() => {
                            this.animateToItem(0);
                        });
                },
                _updateAnalytics(e) {
                    this.playPauseButton.setAttribute("data-analytics-title", this.playPauseButton.dataset[`analyticsTitle${e}`]),
                        this.playPauseButton.setAttribute("data-analytics-click", this.playPauseButton.dataset[`analyticsClick${e}`]),
                        this.playPauseButton.setAttribute("aria-label", this.playPauseButton.dataset[`aria${e}`]),
                        (this.currentAlanyticsValue = e);
                },
            };
        t.default = s.withMixins(_, f, n, r, a, o, h, l, d, c, u, m, p);
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            PrefersReducedMotion: !1,
            IsRTL: !1,
            IsTouch: !1,
            Slide: { Selector: ".item-container", duration: 1 },
            Fade: { duration: 0.5 },
            Item: { Selector: ".item-container .gallery-item", ConstructorFunction: i(192) },
            DotNav: { Selector: ".dotnav" },
            PaddleNav: { Selector: ".paddlenav" },
            ChapterPlayer: { defaultEase: (e) => e },
            FadeCaptionOnChange: { ItemSelector: ".captions-gallery [data-captions-gallery-item]" },
            TabNav: { ItemSelector: ".tablist-wrapper li", RoamingTabIndexSelector: "a" },
            SwipeDetect: { DesktopSwipe: !1, LimitIndexChange: !0, movementRateMultiplier: 1.5, velocityMultiplier: 8 },
            SwipeDrag: { DesktopSwipe: !1, movementRateMultiplier: 1.5, velocityMultiplier: 8 },
            InitialIndexFromHashLink: { Enabled: !1, ScrollReset: !1 },
            Theme: { classPrefix: "theme" },
            Events: { ITEM_CHANGE_INITIATED: "ITEM_CHANGE_INITIATED", ITEM_CHANGE_OCCURRED: "ITEM_CHANGE_OCCURRED", ITEM_CHANGE_COMPLETED: "ITEM_CHANGE_COMPLETED" },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(8).EventEmitterMicro,
            n = {};
        "undefined" != typeof window && ((n.draw = i(1)), (n.cancelDraw = i(24)));
        e.exports = class extends s {
            constructor(e) {
                super(),
                    (this.index = e.index),
                    (this.el = e.el),
                    (this._x = 0),
                    (this._y = 0),
                    (this._opacity = 0),
                    (this._width = 0),
                    (this._height = 0),
                    (this._zIndex = 0),
                    (this.id = this.el.getAttribute("id")),
                    (this.analyticsId = this.el.getAttribute("data-analytics-gallery-item-id") || this.el.getAttribute("id")),
                    (this.applyDraw = this.applyDraw.bind(this)),
                    this.measure();
            }
            measure() {
                const e = getComputedStyle(this.el);
                (this._width = this.el.clientWidth), (this._height = this.el.clientHeight), (this._zIndex = parseInt(e.getPropertyValue("z-index"))), (this._opacity = parseFloat(e.getPropertyValue("opacity")));
            }
            select() {
                this.el.classList.add("current"), this.trigger("select", this);
            }
            deselect() {
                this.el.classList.remove("current"), this.trigger("deselect", this);
            }
            progress(e) {}
            needsRedraw() {
                n.cancelDraw(this._rafID), (this._rafID = n.draw(this.applyDraw, !0));
            }
            applyDraw() {
                (this.el.style.zIndex = this._zIndex), (this.el.style.opacity = this._opacity), (this.el.style.transform = `translate(${this._x}px, ${this._y}px)`);
            }
            get height() {
                return this._height;
            }
            set height(e) {
                (this._height = e), this.needsRedraw();
            }
            get width() {
                return this._width;
            }
            set width(e) {
                (this._width = e), this.needsRedraw();
            }
            get x() {
                return this._x;
            }
            set x(e) {
                (this._x = e), this.needsRedraw();
            }
            get y() {
                return this._y;
            }
            set y(e) {
                (this._y = e), this.needsRedraw();
            }
            get opacity() {
                return this._opacity;
            }
            set opacity(e) {
                (this._opacity = e), this.needsRedraw();
            }
            get zIndex() {
                return this._zIndex;
            }
            set zIndex(e) {
                (this._zIndex = e), this.needsRedraw();
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeCreate() {
                Object.defineProperties(this, { currentItem: { configurable: !0, get: () => this._items[this.wrappedIndex(this.currentIndex)] } });
            },
            wrappedIndex(e) {
                return (e %= this._items.length) < 0 ? this._items.length + e : e;
            },
            getItemForTrigger(e) {
                return this._items.find((t) => t.id === e);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            itemsCreated(e) {
                this.model.options.gum ||
                    this._isVue ||
                    (this.anim.on("ON_RESIZE_IMMEDIATE", this.onResizeImmediate),
                    this.anim.on("ON_RESIZE_DEBOUNCED", this.onResizeDebounced),
                    this.anim.on("ON_BREAKPOINT_CHANGE", this.onBreakpointChange),
                    requestAnimationFrame(this.mounted));
            },
            destroy() {
                this.model.options.gum ||
                    this._isVue ||
                    (this.anim.off("ON_RESIZE_IMMEDIATE", this.onResizeImmediate), this.anim.off("ON_RESIZE_DEBOUNCED", this.onResizeDebounced), this.anim.off("ON_BREAKPOINT_CHANGE", this.onBreakpointChange));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeCreate() {
                document.body._animInfo && ((this.anim = document.body._animInfo.group.anim), (this.model.pageMetrics = this.anim.model.pageMetrics));
            },
            addKeyframe(e) {
                const t = e.el || this.el;
                return (e.group || this.anim).addKeyframe(t, e);
            },
            addDiscreteEvent(e) {
                e.event = e.event || "Generic-Event-Name-" + tmpUUID++;
                let t = void 0 !== e.end && e.end !== e.start;
                const i = this.addKeyframe(e);
                return (
                    t
                        ? (e.onEnterOnce && i.controller.once(e.event + ":enter", e.onEnterOnce),
                          e.onExitOnce && i.controller.once(e.event + ":exit", e.onExitOnce),
                          e.onEnter && i.controller.on(e.event + ":enter", e.onEnter),
                          e.onExit && i.controller.on(e.event + ":exit", e.onExit))
                        : (e.onEventOnce && i.controller.once(e.event, e.onEventOnce),
                          e.onEventReverseOnce && i.controller.once(e.event + ":reverse", e.onEventReverseOnce),
                          e.onEvent && i.controller.on(e.event, e.onEvent),
                          e.onEventReverse && i.controller.on(e.event + ":reverse", e.onEventReverse)),
                    i
                );
            },
            addRAFLoop(e) {
                let t = ["start", "end"];
                if (!t.every((t) => e.hasOwnProperty(t))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
                const i = new RAFEmitter.create();
                i.on("update", e.onUpdate || noop), i.on("draw", e.onDraw || noop), i.on("draw", () => i.run());
                const { onEnter: s, onExit: n } = e;
                return (
                    (e.onEnter = () => {
                        i.run(), s && s();
                    }),
                    (e.onExit = () => {
                        i.cancel(), n && n();
                    }),
                    this.addDiscreteEvent(e)
                );
            },
            addContinuousEvent(e) {
                e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"),
                    (e.event = e.event || "Generic-Event-Name-" + tmpUUID++);
                let t = this.addKeyframe(e);
                return t.controller.on(e.event, e.onDraw), t;
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeCreate() {
                this.selections = { initiated: { current: null, previous: null }, occurred: { current: null, previous: null }, completed: { current: null, previous: null } };
            },
            onItemChangeInitiated(e) {
                (this.selections.initiated.previous = this.selections.initiated.current), (this.selections.initiated.current = this.selections.initiated.next), (this.selections.initiated.next = e.next);
            },
            onItemChangeOccurred(e) {
                (this.selections.occurred.previous = e.previous = this.selections.occurred.current), (this.selections.occurred.current = e.current);
            },
            onItemChangeCompleted(e) {
                (this.selections.completed.previous = e.previous = this.selections.completed.current), (this.selections.completed.current = e.current);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            createItems(e) {
                if (this._items.length) this.itemsCreated(e);
                else {
                    if (!this.model.Item.ConstructorFunction) throw new ReferenceError("MixinGallery::AutoCreateItems - this.model.Item.ConstructorFunction is null");
                    if (0 === this._items.length) {
                        (this._items = []),
                            Array.from(this.el.querySelectorAll(this.model.Item.Selector)).forEach((e, t) => {
                                const i = new this.model.Item.ConstructorFunction({ el: e, index: t });
                                this._items.push(i);
                            });
                        let e = this._items[this._items.length - 1];
                        for (let t = 0; t < this._items.length; t++) {
                            const i = this._items[t];
                            (i.prev = e), (i.next = this._items[t + 1]), (e = i);
                        }
                        e.next = this._items[0];
                    }
                    this.itemsCreated(e);
                }
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            mounted() {
                const e = this._items[this.wrappedIndex(this.currentIndex)],
                    t = this;
                this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: t, next: e }),
                    this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, { gallery: t, current: e }),
                    this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: t, current: e });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(116),
            n = i(100),
            r = i(9),
            a = i(1),
            o = i(24),
            l = i(78);
        e.exports = {
            beforeCreate() {
                Object.defineProperties(this, { widthOfItem: { configurable: !0, get: () => this._items[0].width } });
            },
            created(e) {
                (this.position = 0), (this.target = 0), (this.slideContainer = this.el.querySelector(this.model.Slide.Selector)), (this.sign = this.model.IsRTL ? -1 : 1), (this.mountUpdateId = 0), (this.mountDrawId = 0);
            },
            mounted() {
                this.mountUpdateId = r(() => {
                    this._items.forEach((e) => {
                        e.measure(), (e.x = e.width * e.index * this.sign);
                    }),
                        (this.mountDrawId = a(() => {
                            (this.mountDrawId = null),
                                (this.position = this.target = this.convertSlideIndexToHorizontalPosition(this.wrappedIndex(this.currentIndex))),
                                (this.slideContainer.style.transform = `translate3d(${-this.position}px, 0,0)`),
                                this.checkForSlideUpdate(!0);
                        }));
                });
            },
            animateToItem(e) {
                const t = this.wrappedIndex(e);
                if (this.currentIndex === t) return;
                this.el.parentElement.scrollLeft = 0;
                let i = "cubic-bezier(0.645, 0.045, 0.355, 1)";
                this.clip && this.clip._isPlaying && (this.clip.destroy(), (i = "cubic-bezier(0.23, 1, 0.32, 1)"));
                const r = this.target,
                    a = this.convertSlideIndexToHorizontalPosition(e),
                    o = this.model.PrefersReducedMotion ? 0.001 : this.model.Slide.duration,
                    l = this._items[this.wrappedIndex(e)];
                (this.clip = new s(o, {
                    ease: n.fromCSSString(i),
                    prepare: () => this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: l }),
                    update: (e) => {
                        (e = Math.min(1, Math.max(e, 0))), (this.target = r + (a - r) * e);
                    },
                    draw: () => this.draw(1),
                    finish: () => this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: l }),
                })),
                    (this.slideContainer.style.transition = `transform ${o}s ${i}`),
                    (this.slideContainer.style.transform = `translate3d(${-a}px, 0,0)`),
                    this.clip.play().then(() => {
                        this.clip.destroy(), (this.clip = null);
                    });
            },
            draw() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    t = this.target - this.position;
                this.position += t * e;
                const i = Math.abs(this.position - this.target);
                i < 0.1 && (this.position = this.target),
                    this.checkForSlideUpdate(),
                    1 !== e &&
                        ((this.slideContainer.style.transition = "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)"),
                        (this.slideContainer.style.transform = `translate(${-this.position}px, 0)`),
                        Math.abs(i) > 0 && (o(this.dragDrawId), a(() => this.draw(e)))),
                    this._items.forEach((e) => {
                        let t = (e.x - this.position) / this.widthOfItem;
                        e.progress(t);
                    });
            },
            checkForSlideUpdate(e) {
                let t = Math.floor((this.position * this.sign + 0.5 * this.widthOfItem) / this.widthOfItem);
                isNaN(t) || ((t !== this.currentIndex || e) && ((this.currentIndex = t), this.wrapSlideItems(), this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, { gallery: this, current: this.currentItem })));
            },
            wrapSlideItems() {
                this.clampedIndex ||
                    this._items.length < 2 ||
                    ((this.currentItem.x = this.convertSlideIndexToHorizontalPosition(this.currentIndex)),
                    (this.currentItem.prev.x = this.convertSlideIndexToHorizontalPosition(this.currentIndex - 1)),
                    (this.currentItem.next.x = this.convertSlideIndexToHorizontalPosition(this.currentIndex + 1)));
            },
            onResizeImmediate() {
                this.clip && (this.clip.destroy(), (this.clip = null)),
                    this._items.forEach((e) => {
                        e.measure(), (e.x = e.width * e.index * this.sign);
                    }),
                    (this.currentIndex = this.wrappedIndex(this.currentItem.index)),
                    this.wrapSlideItems(),
                    (this.position = this.target = this.convertSlideIndexToHorizontalPosition(this.currentIndex)),
                    (this.slideContainer.style.transition = "none"),
                    a(() => {
                        this.slideContainer.style.transform = `translate3d(${-this.position}px, 0,0)`;
                    });
            },
            convertSlideIndexToHorizontalPosition(e) {
                return e * this.widthOfItem * this.sign;
            },
            destroy() {
                this.mountUpdateId && l(this.mountUpdateId),
                    this.mountDrawId && o(this.mountDrawId),
                    this.clip && (this.clip.destroy(), (this.clip = null)),
                    this._items.forEach((e) => {
                        e.measure(), (e.x = 0), (e.zIndex = e === this.currentItem ? 2 : 0);
                    }),
                    this.slideContainer.removeAttribute("style");
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t) {
            e instanceof Promise ? e.then(t) : t();
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            return "function" == typeof e ? e : null;
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t) {
            const i = t.length;
            let s = 0;
            !(function n() {
                "function" == typeof t[s] && e(t[s]), s++, s < i && n();
            })();
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e, t, i) {
            return Math.min(Math.max(e, t), i);
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(1),
            n = i(24);
        e.exports = {
            created(e) {
                (this.swipeDrag = {
                    movementRateMultiplier: this.model.SwipeDrag.movementRateMultiplier,
                    velocityMultiplier: this.model.SwipeDrag.velocityMultiplier,
                    dragDrawId: -1,
                    waitingToReachTargetDrawId: -1,
                    inputStart: { x: 0, y: 0 },
                    swipeVelocity: 0,
                    isDragging: !1,
                }),
                    (this._onStartDrag = this._onStartDrag.bind(this)),
                    (this._onDrag = this._onDrag.bind(this)),
                    (this._onStopDrag = this._onStopDrag.bind(this)),
                    (this.waitingToReachTarget = this.waitingToReachTarget.bind(this));
            },
            mounted() {
                (this.inputMoveEventName = this.model.IsTouch ? "touchmove" : "mousemove"),
                    (this.inputUpEventName = this.model.IsTouch ? "touchend" : "mouseup"),
                    (this.inputDownEvent = this.model.IsTouch ? "touchstart" : "mousedown"),
                    (this.model.IsTouch || this.model.SwipeDrag.DesktopSwipe) && (this.el.removeEventListener(this.inputDownEvent, this._onStartDrag), this.el.addEventListener(this.inputDownEvent, this._onStartDrag));
            },
            _onStartDrag(e) {
                n(this.swipeDrag.dragDrawId), n(this.swipeDrag.waitingToReachTargetDrawId);
                const t = e.target || e.relatedTarget;
                switch (!0) {
                    case "A" === t.tagName:
                    case "BUTTON" === t.tagName:
                    case !e.touches && 1 !== e.which:
                        return;
                }
                this.clip && this.clip.destroy(), (this.lastInteractionEvent = e), (this.swipeDrag.swipeVelocity = 0), (this.swipeDrag.isDragging = !1);
                const i = this.model.IsTouch ? e.touches[0] : e;
                let { screenX: s, screenY: r } = i;
                (this.swipeDrag.inputStart = { x: s, y: r }), window.addEventListener(this.inputMoveEventName, this._onDrag, { passive: !1 }), window.addEventListener(this.inputUpEventName, this._onStopDrag);
            },
            _onDrag(e) {
                this.swipeDrag.isDragging && e.cancelable && e.preventDefault();
                const t = this.model.IsTouch ? e.touches[0] : e;
                let { screenX: i, screenY: r } = t,
                    a = this.swipeDrag.inputStart.x - i,
                    o = this.swipeDrag.inputStart.y - r;
                (this.swipeDrag.inputStart = { x: i, y: r }),
                    this.swipeDrag.isDragging || (this.swipeDrag.isDragging = Math.abs(a) > 3 && Math.abs(a) > Math.abs(o)),
                    this.swipeDrag.isDragging &&
                        ((this.target += a * this.swipeDrag.movementRateMultiplier),
                        (this.swipeDrag.swipeVelocity = a * this.swipeDrag.velocityMultiplier),
                        this.clampedIndex &&
                            (this.model.IsRTL
                                ? (this.target = Math.max(this.widthOfItem * this.sign * (this._items.length - 1), Math.min(0, this.target)))
                                : (this.target = Math.min(this.widthOfItem * (this._items.length - 1), Math.max(0, this.target)))),
                        n(this.swipeDrag.dragDrawId),
                        (this.swipeDrag.dragDrawId = s(() => this.draw(0.3))));
            },
            _onStopDrag(e) {
                if ((window.removeEventListener(this.inputMoveEventName, this._onDrag), window.removeEventListener(this.inputUpEventName, this._onStopDrag), !this.swipeDrag.isDragging)) return;
                let t = [this.currentIndex - 1, this.currentIndex, this.currentIndex + 1],
                    i = 0,
                    r = Number.MAX_VALUE;
                for (let e = 0, s = t.length; e < s; e++) {
                    let s = t[e] * this.widthOfItem,
                        n = Math.abs(s - (this.position + this.swipeDrag.swipeVelocity) * this.sign);
                    n < r && ((r = n), (i = e));
                }
                this.lastInteractionEvent = e;
                let a = t[i];
                this.clampedIndex && (a = this.wrappedIndex(a)),
                    (this.target = this.convertSlideIndexToHorizontalPosition(a)),
                    n(this.swipeDrag.dragDrawId),
                    n(this.swipeDrag.waitingToReachTargetDrawId),
                    (this.swipeDrag.dragDrawId = s(() => {
                        this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: this._items[this.wrappedIndex(a)] }), this.draw(0.2), this.waitingToReachTarget(a);
                    }));
            },
            waitingToReachTarget(e) {
                if (Math.abs(this.position - this.target) > 0.1) return void (this.swipeDrag.waitingToReachTargetDrawId = s(() => this.waitingToReachTarget(e)));
                const t = this.selections.occurred.current;
                this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: t });
            },
            destroy() {
                this.el.removeEventListener(this.inputDownEvent, this._onStartDrag), window.removeEventListener(this.inputMoveEventName, this._onDrag), window.removeEventListener(this.inputUpEventName, this._onStopDrag);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(117),
            n = i(32),
            r = i(85);
        e.exports = {
            created() {
                this.tabNav = { items: [], current: null };
            },
            itemsCreated() {
                Array.from(this.el.querySelectorAll(this.model.TabNav.ItemSelector)).forEach((e, t) => {
                    const i = new a(e, t),
                        s = this.getItemForTrigger(i.trigger);
                    s || console.error(`MixinGallery '${this.el.id}': Could not match tav/dot nav item with trigger '${i.trigger}', to gallery any item. Double check to make sure the triggers match the item id's.`),
                        (i.onSelected = (e) => {
                            (this.lastInteractionEvent = e), e.preventDefault();
                            let i = t - this.wrappedIndex(this.currentIndex),
                                s = this.currentIndex + i;
                            this.animateToItem(s);
                        }),
                        s.on("select", () => {
                            e.classList.add("current"), i.anchorEl.classList.add("current");
                        }),
                        s.on("deselect", () => {
                            e.classList.remove("current"), i.anchorEl.classList.remove("current");
                        }),
                        i.anchorEl.addEventListener("click", i.onSelected),
                        this.tabNav.items.push(i);
                }),
                    this._items.forEach((e, t) => {
                        e.el.setAttribute("role", r.TABPANEL), e.el.setAttribute(n.LABELLEDBY, this.tabNav.items[t].anchorEl.id), this.tabNav.items[t].anchorEl.setAttribute(n.CONTROLS, e.el.id);
                    });
            },
            mounted() {
                const e = this.tabNav.items[0].el.parentElement;
                this.roamingTabIndex = new s(e, { selector: this.model.TabNav.RoamingTabIndexSelector });
            },
            onItemChangeCompleted(e) {
                let t = this.tabNav.items.filter((t) => t.trigger === e.current.id)[0];
                this.setCurrentItem(t), this.roamingTabIndex.setSelectedItemByIndex(t.index, !0), document.activeElement.parentElement.parentElement === t.el.parentElement && t.anchorEl.focus();
            },
            setCurrentItem(e) {
                e !== this.tabNav.current && (this.tabNav.current = e);
            },
            destroy() {
                this.tabNav.items.forEach((e) => {
                    e.el.classList.remove("current"), (e.el = null), e.anchorEl.classList.remove("current"), e.anchorEl.removeEventListener("click", e.onSelected), (e.anchorEl = null);
                }),
                    (this.tabNav.items = []),
                    (this.tabNav.current = null);
            },
        };
        class a {
            constructor(e, t) {
                (this.el = e), (this.index = t), (this.anchorEl = e.querySelector("a")), (this.trigger = this.anchorEl.getAttribute("data-ac-gallery-trigger")), this.anchorEl.setAttribute("role", r.TAB);
            }
        }
    },
    function (e, t, i) {
        "use strict";
        const s = ["INPUT", "SELECT", "TEXTAREA"];
        e.exports = {
            created() {
                (this.handleIntersect = this.handleIntersect.bind(this)), (this.onKeyDown = this.onKeyDown.bind(this)), (this.observer = new IntersectionObserver(this.handleIntersect)), this.observer.observe(this.el), (this.isInView = !1);
            },
            destroy() {
                window.removeEventListener("keydown", this.onKeyDown), this.observer.disconnect(), (this.observer = null), (this.isInView = !1);
            },
            handleIntersect(e) {
                e.forEach((e) => {
                    (this.isInView = e.isIntersecting), e.isIntersecting ? window.addEventListener("keydown", this.onKeyDown) : window.removeEventListener("keydown", this.onKeyDown);
                });
            },
            onKeyDown(e) {
                if ((37 !== e.keyCode && 39 !== e.keyCode) || this.inputHasFocus()) return;
                let t = this.model.IsRTL ? -1 : 1,
                    i = 37 === e.keyCode ? -1 : 1;
                this.lastInteractionEvent = e;
                const s = this.currentIndex + i * t;
                this.animateToItem(s);
            },
            inputHasFocus: function () {
                return -1 !== s.indexOf(document.activeElement.nodeName);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            itemsCreated() {
                this._items.forEach((e) => {
                    e.measure(), (e.x = 0), (e.zIndex = e === this.currentItem ? 2 : 0);
                });
            },
            animateToItem(e) {
                if (((e = Math.min(Math.max(0, e), this._items.length - 1)), this.currentIndex === e)) return;
                this.currentIndex = e;
                const t = this.selections.occurred.previous,
                    i = this.selections.occurred.current,
                    s = this._items[this.wrappedIndex(e)];
                t && (t.zIndex = 0),
                    i && (i.zIndex = 1),
                    (s.opacity = 1),
                    (s.zIndex = 2),
                    document.activeElement.id && 0 === document.activeElement.id.indexOf("media-gallery-item-") && document.activeElement.blur(),
                    this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: s }),
                    this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, { gallery: this, current: s }),
                    this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: s });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeMount() {
                (this._actuallyEndedEventName = "ITEM_CHANGE_ACTUALLY_COMPLETED"), (this._actuallyBegunEventName = "ITEM_CHANGE_ACTUALLY_BEGUN");
            },
            mounted() {
                this.on(this.model.Events.ITEM_CHANGE_COMPLETED, (e) => {
                    let t = null;
                    this.lastInteractionEvent &&
                        (this.lastInteractionEvent.type
                            ? (t = { keydown: "keynav", touchend: "swipe", mouseup: "swipe", click: "link" }[this.lastInteractionEvent.type])
                            : this.lastInteractionEvent.event && (t = this.lastInteractionEvent.event)),
                        t || (t = "unknown");
                    let i = null;
                    if ("swipe" === t || !e.previous || (e.previous && e.previous.index === e.current.index)) {
                        const s = "number" == typeof this._actualPreviousItem;
                        s && (i = this._actualPreviousItem < e.current.index ? "+" : "-"),
                            this.trigger(this._actuallyEndedEventName, { type: t, direction: i, entered: this._items[e.current.index], exited: s ? this._items[this._actualPreviousItem] : null }),
                            (this._actualPreviousItem = e.current.index);
                    } else {
                        const s = "number" == typeof this._actualPreviousItem;
                        s && (i = this._actualPreviousItem < e.current.index ? "+" : "-"),
                            this.trigger(this._actuallyBegunEventName, { type: t, direction: i, entering: this._items[e.current.index], exiting: s ? this._items[this._actualPreviousItem] : null });
                    }
                });
            },
            onSlideChangeCompleted(e) {
                this.on(this._actuallyEndedEventName, e);
            },
            onSlideChangeBegun(e) {
                this.on(this._actuallyBegunEventName, e);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(210);
        e.exports = {
            mounted() {
                this._setWingVisibilityStatus(),
                    (this._mediaGalleryItems = []),
                    this._items.forEach((e, t) => {
                        const i = e.el,
                            n = i.getAttribute("data-media-handler"),
                            r = i.getAttribute("data-media-argument");
                        this._mediaGalleryItems[t] = { index: t, type: n, originalItem: e };
                        const a = s[n],
                            o = [this._mediaGalleryItems[t], r];
                        a.apply(this, o);
                    }),
                    this.onSlideChangeBegun((e) => {
                        this.getMediaGalleryItem(e.exiting.index).exitSpotlightPosition(), e.exiting && this.pauseMediaGalleryItem(e.exiting.index);
                    }),
                    this.onSlideChangeCompleted((e) => {
                        (e.exited && e.exited.index === e.entered.index) || (this.getMediaGalleryItem(e.entered.index).enterSpotlightPosition(), this.isPlaying && this.playCurrentMediaGalleryItem(), e.exited && this.resetOffScreenItems());
                    }),
                    this.fallbackOnMounted && this.fallbackToStatic();
            },
            resetOffScreenItems() {
                let e = [this.currentIndex];
                this.galleryHasVisibleWings && (e.push(this.currentIndex + 1, this.currentIndex - 1), (e = e.filter((e) => e >= 0 && e < this._mediaGalleryItems.length))),
                    this._mediaGalleryItems.forEach(function (t) {
                        -1 === e.indexOf(t.index) && t.reset();
                    });
            },
            fallbackToStatic() {
                this._mediaGalleryItems
                    ? this._mediaGalleryItems.forEach((e) => {
                          e.showStaticFallback();
                      })
                    : (this.fallbackOnMounted = !0);
            },
            _setWingVisibilityStatus() {
                const e = parseInt(window.getComputedStyle(this.el).getPropertyValue("--hlts-glry-max-width")) + 2 * parseInt(window.getComputedStyle(this.el).getPropertyValue("--hlts-glry-slide-gap"));
                this.galleryHasVisibleWings = window.innerWidth > e;
            },
            _handleAllVideoItemsPreloaded() {
                this.trigger("MEDIA_PRELOAD_COMPLETED");
            },
            startPreloadingMedia() {
                const e = this._mediaGalleryItems.find((e) => "video" === e.type);
                e && e.load();
            },
            abortPreloadingMedia() {
                this._mediaGalleryItems
                    .filter((e) => "video" === e.type)
                    .forEach((e) => {
                        e.abortPreload(!e.isCurrentItem);
                    });
            },
            onResizeDebounced() {
                this._setWingVisibilityStatus();
            },
            getMediaGalleryItem(e) {
                return this._mediaGalleryItems[e];
            },
            playCurrentMediaGalleryItem() {
                this.playMediaGalleryItem(this.currentIndex);
            },
            pauseCurrentMediaGalleryItem() {
                this.pauseMediaGalleryItem(this.currentIndex);
            },
            playMediaGalleryItem(e) {
                this.getMediaGalleryItem(e).play();
            },
            pauseMediaGalleryItem(e) {
                this.getMediaGalleryItem(e).pause();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = { static: i(211), animation: i(212), video: i(213) };
    },
    function (e, t, i) {
        "use strict";
        const s = i(91);
        e.exports = function (e, t) {
            s.apply(this, arguments);
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(91);
        e.exports = function (e, t) {
            s.apply(this, arguments),
                (e.figureEl = e.originalItem.el.querySelector(".gallery-figure")),
                (e.animationStartClassname = t),
                (e.play = function () {
                    e.isFallback || (e.figureEl.classList.add(e.animationStartClassname), e.figureEl.classList.remove("animation-pause"), e.figureEl.classList.add("animation-play"));
                }),
                (e.pause = function () {
                    e.isFallback || (e.figureEl.classList.remove("animation-play"), e.figureEl.classList.add("animation-pause"));
                }),
                (e.reset = function () {
                    e.isFallback || (e.figureEl.classList.remove(e.animationStartClassname), e.pause());
                }),
                (e.showStaticFallback = function () {
                    (e.isFallback = !0),
                        e.figureEl.classList.remove(e.animationStartClassname),
                        e.figureEl.classList.remove("animation-play"),
                        e.figureEl.classList.add("animation-pause"),
                        e.figureEl.classList.add(e.animationStartClassname),
                        e.figureEl.classList.add("animation-static-end");
                });
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(91),
            { Media: n } = i(53);
        e.exports = function (e, t) {
            s.apply(this, arguments),
                (e.mediaCanPlay = !1),
                (e.isFallback = !1),
                (e.mediaPath = t),
                (e.figureWrapperEle = e.originalItem.el.querySelector(".gallery-figure")),
                (e.staticFallbackEle = e.originalItem.el.querySelector(".positioned-media-element.static")),
                (e.videoElement = e.originalItem.el.querySelector(".positioned-media-element.media")),
                (e.startframeEle = e.originalItem.el.querySelector(".positioned-media-element.startframe")),
                (e.endframeEle = e.originalItem.el.querySelector(".positioned-media-element.endframe")),
                (e.originalClassifications = [
                    { ele: e.staticFallbackEle, className: e.staticFallbackEle.className },
                    { ele: e.videoElement, className: e.videoElement.className },
                    { ele: e.startframeEle, className: e.startframeEle.className },
                    { ele: e.endframeEle, className: e.endframeEle.className },
                ]),
                (e.getViewportVideoPath = function () {
                    const t = ["xlarge", "large", "medium", "small"],
                        i = window.devicePixelRatio > 1 ? "_2x" : "",
                        s = (e.originalItem.el.getAttribute("data-media-excluded-viewports") || "").split(/,\s*/);
                    let n = getComputedStyle(e.videoElement).getPropertyValue("--hlts-glry-current-viewport");
                    for (; s.indexOf(n) > -1 && "small" !== n; ) n = t[t.indexOf(n) + 1];
                    return `${e.mediaPath}${n}${i}.mp4`;
                }),
                (e.inlineMediaInstance = new n({ el: e.videoElement, loadCompleteEvent: "canplaythrough" })),
                (e.load = async function () {
                    return e.isFallback
                        ? Promise.resolve()
                        : (e._loadNextItemDeferred(),
                          new Promise((t, i) => {
                              e.inlineMediaInstance.on("MEDIA_LOAD_COMPLETE", () => {
                                  (e.mediaCanPlay = !0), t();
                              }),
                                  e.inlineMediaInstance.load(e.getViewportVideoPath()).catch(() => {
                                      e.showStaticFallback(), i();
                                  });
                          }));
                }),
                (e._loadNextVideoItemNow = function () {
                    const t = this._mediaGalleryItems.slice(e.index + 1).find((e) => "video" === e.type);
                    t ? t.load() : this._handleAllVideoItemsPreloaded();
                }.bind(this)),
                (e._loadNextItemDeferred = function () {
                    e.preparingNextItem ||
                        ((e.preparingNextItem = !0),
                        e.videoElement.addEventListener("progress", (t) => {
                            e.videoElement.buffered.length && e.videoElement.buffered.end(0) === e.videoElement.duration && !e.preloadAborted && e._loadNextVideoItemNow();
                        }));
                }),
                (e.abortPreload = function () {
                    e.preloadAborted = !0;
                }),
                (e.play = async function () {
                    let t;
                    if (e.isFallback) t = await Promise.resolve();
                    else {
                        const i = e.mediaCanPlay ? Promise.resolve() : e.load();
                        t = await i
                            .catch(e.showStaticFallback)
                            .then(() => {
                                (e.hasPlayed = !0), e.startframeEle.classList.add("hide");
                            })
                            .then(() => {
                                e.videoElement.play().catch(e.showStaticFallback);
                            });
                    }
                    return t;
                }),
                (e.pause = function () {
                    e.isFallback || ("playing" === e.inlineMediaInstance.playbackState && e.videoElement.pause());
                }),
                (e.abortLoad = function (t) {
                    e.isFallback || ((e.mediaCanPlay = !1), t && (e.videoElement.setAttribute("src", ""), e.reset()));
                }),
                (e.reset = function () {
                    e.isFallback ||
                        (e.hasPlayed &&
                            (e.originalClassifications.forEach((e) => {
                                e.ele.className = e.className;
                            }),
                            e.mediaCanPlay && (e.pause(), (e.videoElement.currentTime = 0)),
                            (e.hasPlayed = !1)));
                }),
                (e.showStaticFallback = function () {
                    e.isFallback || (e.abortLoad(), e.figureWrapperEle.classList.add("static-fallback-only"), e.staticFallbackEle.classList.remove("hide"), (e.isFallback = !0));
                }),
                (e.enterSpotlightPosition = function () {
                    e.mediaCanPlay && (e.pause(), (e.videoElement.currentTime = 0));
                });
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = class {
            constructor() {
                this._events = {};
            }
            on(e, t) {
                return (this._events[e] = this._events[e] || []), this._events[e].unshift(t), t;
            }
            once(e, t) {
                const i = (s) => {
                    this.off(e, i), void 0 !== s ? t(s) : t();
                };
                return this.on(e, i);
            }
            off(e, t) {
                if (!this.has(e)) return;
                if (!t) return void delete this._events[e];
                const i = this._events[e].indexOf(t);
                -1 !== i && this._events[e].splice(i, 1);
            }
            trigger(e, t) {
                if (this.has(e)) for (let i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]();
            }
            has(e) {
                return e in this._events && 0 !== this._events[e].length;
            }
            destroy() {
                this._events = null;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e || (e = document);
                const i = e.querySelectorAll(`[${o}]`),
                    s = [];
                for (const e of i) {
                    const i = e.dataset,
                        a = i.inlineMediaPlugins ? i.inlineMediaPlugins.split(",").map((e) => e.trim()) : [],
                        o = [];
                    for (const e of a)
                        if (!n.pluginCache[e]) {
                            if (!r.default[e]) throw new Error(`Error Trying to use undefined Plugin named: ${e} . Ensure you call Media.addPlugin() first to register this custom plugin!`);
                            o.push(async () => {
                                const t = (await r.default[e]()).default;
                                n.default.addPlugin(e, t);
                            });
                        }
                    await Promise.all(o.map(async (e) => e())), s.push(new n.default(Object.assign({ el: e, plugins: a.map((e) => n.pluginCache[e]) }, t)));
                }
                return s;
            });
        var n = (function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var i = a(t);
                if (i && i.has(e)) return i.get(e);
                var s = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(s, r, o) : (s[r] = e[r]);
                    }
                return (s.default = e), i && i.set(e, s), s;
            })(i(121)),
            r = s(i(122));
        function a(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
                i = new WeakMap();
            return (a = function (e) {
                return e ? i : t;
            })(e);
        }
        const o = "data-inline-media";
    },
    function (e, t, i) {
        "use strict";
        var s = i(217);
        e.exports = function (e) {
            return function () {
                if (s && "object" == typeof window.console && "function" == typeof console[e]) return console[e].apply(console, Array.prototype.slice.call(arguments, 0));
            };
        };
    },
    function (e, t, i) {
        "use strict";
        var s = !1,
            n = {};
        "undefined" != typeof window && (n = window || self);
        try {
            s = !!n.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0");
        } catch (e) {}
        e.exports = s;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(42)),
            r = s(i(12)),
            a = s(i(43)),
            o = s(i(11)),
            l = s(i(219)),
            h = s(i(220));
        const d = (e) => e,
            c = (e) => (e ? e.split(",").map((e) => e.trim()) : null);
        class u extends o.default {
            constructor(e) {
                super(e);
                const t = (t, i, s) => {
                    const n = "inlineMedia" + t[0].toUpperCase() + t.slice(1);
                    return i(this.media.el.dataset[n]) || e[t] || s;
                };
                (this._disabledStates = new h.default({ features: t("disabledWhen", c, []), onActivate: this.disable.bind(this), onDeactivate: this.enable.bind(this) })),
                    (this._destroyStates = new h.default({ features: t("destroyWhen", c, []), onActivate: this.destroyMedia.bind(this) })),
                    (this._pausedStates = new h.default({ features: t("pausedWhen", c, []), onActivate: this.pauseMedia.bind(this) })),
                    (this._autoplayStates = new h.default({ features: t("autoplayWhen", c, []), onActivate: this.autoplayMedia.bind(this), onDeactivate: this.disableAutoplay.bind(this) }));
                const i = e.featureDetect || {};
                var s;
                (this.featureCallbacks = Object.entries(i).map((e) => {
                    let [t, i] = e;
                    return new l.default({ featureClass: t, callback: i });
                })),
                    (this._featureElement = (s = t("featureElement", d, document.documentElement)) instanceof HTMLElement ? s : document.querySelector(s)),
                    (this.featureSets = [this._autoplayStates, this._pausedStates, this._disabledStates, this._destroyStates]),
                    (this._featuresUpdated = this._featuresUpdated.bind(this)),
                    (this.play = !1),
                    (this._observer = new MutationObserver(this._featuresUpdated)),
                    this._observer.observe(this._featureElement, { attributes: !0, attributeFilter: ["class"] }),
                    this._featuresUpdated();
            }
            get loadingState() {
                return this._disabledStates.isDetected ? n.default.DISABLED : void 0;
            }
            get playbackState() {
                return this._disabledStates.isDetected ? a.default.PAUSED : void 0;
            }
            _featuresUpdated() {
                const e = this._featureElement.classList;
                this.featureSets.filter((t) => (t.updateFeatureState(e), t.detectionChanged)).forEach((e) => e.applyEffect()),
                    this.featureCallbacks.forEach((t) => {
                        t.updatePresence(e), t.isPresent && t.presenceChanged && t.triggerCallback(this.media);
                    });
            }
            autoplayMedia() {
                this.media.el.setAttribute("autoplay", !0), this.media.play();
            }
            disableAutoplay() {
                this.media.el.setAttribute("autoplay", !1);
            }
            pauseMedia() {
                this.media.el.pause();
            }
            destroyMedia() {
                this.media.destroy();
            }
            destroy() {
                this._observer.disconnect();
            }
            disable() {
                this.media.abortLoad(), this.media.el.pause(), (this.play = d), this.media.trigger(r.default.LOADING_STATE_CHANGE), this.media.trigger(r.default.PLAYBACK_STATE_CHANGE);
            }
            enable() {
                (this.play = !1), this.media.trigger(r.default.LOADING_STATE_CHANGE), this.media.trigger(r.default.PLAYBACK_STATE_CHANGE);
            }
        }
        t.default = u;
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = class {
            constructor(e) {
                (this.featureClass = e.featureClass), (this._callback = e.callback), (this._isPresent = !1), (this._wasPresent = !1);
            }
            get presenceChanged() {
                return this._isPresent !== this._wasPresent;
            }
            get isPresent() {
                return this._isPresent;
            }
            updatePresence(e) {
                (this._wasPresent = this._isPresent), (this._isPresent = e.contains(this.featureClass));
            }
            triggerCallback(e) {
                return this._callback(e);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        const s = () => {};
        t.default = class {
            constructor(e) {
                var t;
                (this._features = new Set(((t = e.features), Array.isArray(t) ? t : t ? [t] : []))), (this._isDetected = !1), (this._wasDetected = !1), (this._onActivate = e.onActivate || s), (this._onDeactivate = e.onDeactivate || s);
            }
            get detectionChanged() {
                return this._isDetected !== this._wasDetected;
            }
            get isDetected() {
                return this._isDetected;
            }
            updateFeatureState(e) {
                this._wasDetected = this._isDetected;
                for (const t of e) if (this._features.has(t)) return void (this._isDetected = !0);
                this._isDetected = !1;
            }
            applyEffect() {
                this._isDetected ? this._onActivate() : this._onDeactivate();
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(12)),
            r = s(i(11));
        const a = "inline-media-timeout";
        class o extends r.default {
            static get LOAD_TIMEOUT_EVENT() {
                return a;
            }
            constructor(e) {
                super(e);
                const t = this.media.el.dataset;
                (this._timeoutDelay = t.loadTimeout || e.loadTimeout || 3e4),
                    (this._onLoadStart = this._onLoadStart.bind(this)),
                    (this._onLoadComplete = this._onLoadComplete.bind(this)),
                    (this._onTimerComplete = this._onTimerComplete.bind(this)),
                    this.media.on(n.default.MEDIA_LOAD_START, this._onLoadStart),
                    this.media.on(n.default.MEDIA_LOAD_COMPLETE, this._onLoadComplete);
            }
            _onLoadStart() {
                clearTimeout(this._timer), (this._timer = setTimeout(this._onTimerComplete, this._timeoutDelay));
            }
            _onLoadComplete() {
                clearTimeout(this._timer);
            }
            _onTimerComplete() {
                this.media.trigger(a), this.media.destroy(), this.media.el.parentElement && this.media.el.parentElement.removeChild(this.media.el);
            }
            destroy() {
                clearTimeout(this._timer), this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart);
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(12)),
            r = s(i(43)),
            a = s(i(11));
        const o = '[data-inline-media-control="PlayPause"]',
            l = "[data-inline-media-controller='{id}']",
            h = "Pause",
            d = "Play",
            c = "Replay",
            u = { CLICK: "data-analytics-click", TITLE: "data-analytics-title" };
        class m extends a.default {
            constructor(e) {
                super(e),
                    (this._container = e.container || this.media.el.parentElement),
                    (this._button = this._findButton()),
                    (this._onClick = this._onClick.bind(this)),
                    (this._onPlaybackStateChange = this._onPlaybackStateChange.bind(this));
                const t = this._button.dataset;
                (this._ariaLabels = { playing: t.ariaPlaying || e.ariaPlaying || h, paused: t.ariaPaused || e.ariaPaused || d, ended: t.ariaEnded || e.ariaEnded || c }),
                    this._button.addEventListener("click", this._onClick),
                    this.media.on(n.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange),
                    (this._activeAnalytics = Object.values(u).filter((e) => (this._button.hasAttribute(e + "-play") && this._button.hasAttribute(e + "-pause")) || this._button.hasAttribute(e + "-replay")));
            }
            _findButton() {
                if (this.options.playPauseButton) return this.options.playPauseButton;
                let e = this._container.querySelector(`${o}`);
                if (!e) {
                    const t = document.querySelectorAll(l.replace("{id}", this.media.id));
                    for (const i of t) e = "PlayPause" === i.getAttribute("data-inline-media-control") ? i : i.querySelector(`${o}`);
                }
                return e;
            }
            _onPlaybackStateChange() {
                switch (this.media.playbackState) {
                    case r.default.PLAYING:
                        this._button.setAttribute("aria-label", this._ariaLabels.playing);
                        break;
                    case r.default.ENDED:
                        this._button.setAttribute("aria-label", this._ariaLabels.ended);
                        break;
                    default:
                        this._button.setAttribute("aria-label", this._ariaLabels.paused);
                }
                this._setAnalyticsState();
            }
            _setAnalyticsState() {
                let e;
                switch (this.media.playbackState) {
                    case r.default.PLAYING:
                        e = "pause";
                        break;
                    case r.default.ENDED:
                        e = "replay";
                        break;
                    default:
                        e = "play";
                }
                for (const t of this._activeAnalytics) {
                    let i = e;
                    "replay" !== e || this._button.hasAttribute(`${t}-${i}`) || (i = "play"), this._button.setAttribute(t, this._button.getAttribute(`${t}-${i}`));
                }
            }
            _onClick(e) {
                e.preventDefault(), this.media.el.paused ? this.media.play() : this.media.el.pause();
            }
            destroy() {
                this._button.removeEventListener("click", this._onClick), this.media.off(n.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange);
            }
        }
        t.default = m;
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = { small: 0, medium: 570, large: 780, xlarge: 1280 };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(225)),
            r = s(i(126));
        class a extends r.default {
            constructor(e) {
                super(e);
            }
            _initialize() {
                (this._anim = this.options.anim),
                    (this._bpMap = this.options.animBreakpointMap || n.default),
                    (this._updateBreakpoint = this._updateBreakpoint.bind(this)),
                    (this._callback = this.options.callback),
                    this._addEventListeners(),
                    this._updateBreakpoint();
            }
            _addEventListeners() {
                this._anim.on("ON_BREAKPOINT_CHANGE", this._updateBreakpoint);
            }
            _removeEventListeners() {
                this._anim.off("ON_BREAKPOINT_CHANGE", this._updateBreakpoint);
            }
            _updateBreakpoint() {
                const e = this._bpMap[this._anim.model.pageMetrics.breakpoint];
                let t = !1;
                this._currentBreakpoint && this._currentBreakpoint !== e && (t = !0), (this._currentBreakpoint = e), t && this._callback();
            }
            destroy() {
                super.destroy();
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = { S: "small", M: "medium", L: "large", X: "xlarge" };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(227)),
            r = s(i(128)),
            a = s(i(228)),
            o = s(i(229));
        t.default = [o.default, r.default, a.default, n.default];
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(42)),
            r = s(i(12)),
            a = s(i(127)),
            o = s(i(43)),
            l = s(i(11));
        const h = [
                a.default.LOADED_DATA,
                a.default.LOAD_START,
                a.default.CAN_PLAY,
                a.default.CAN_PLAY_THROUGH,
                a.default.PLAY,
                a.default.PLAYING,
                a.default.PAUSE,
                a.default.WAITING,
                a.default.SEEKING,
                a.default.SEEKED,
                a.default.ERROR,
                a.default.ENDED,
            ],
            d = "[data-inline-media-controller={id}]";
        class c extends l.default {
            constructor(e) {
                super(e),
                    (this._container = e.container || this.media.el.parentElement),
                    (this._playbackState = o.default.IDLE),
                    (this._loadingState = n.default.EMPTY),
                    (this._elementsToDecorate = []),
                    this._container && this._elementsToDecorate.push(this._container),
                    this.media.id && this._elementsToDecorate.push(...Array.from(document.querySelectorAll(d.replace("{id}", this.media.id))));
                for (const e of this._elementsToDecorate) e.classList.add(this._playbackState), e.classList.add(this._loadingState);
                (this.updateState = this.updateState.bind(this)), this._addEventListeners();
            }
            _addEventListeners() {
                for (const e of h) this.media.el.addEventListener(e, this.updateState);
                this.media.on(r.default.LOADING_STATE_CHANGE, this.updateState), this.media.on(r.default.PLAYBACK_STATE_CHANGE, this.updateState);
            }
            _removeEventListeners() {
                for (const e of h) this.media.el.removeEventListener(e, this.updateState);
                this.media.off(r.default.LOADING_STATE_CHANGE, this.updateState), this.media.off(r.default.PLAYBACK_STATE_CHANGE, this.updateState);
            }
            updateState(e) {
                const t = this.media.playbackState,
                    i = this._playbackState,
                    s = this.media.loadingState,
                    n = this._loadingState;
                if (((this._playbackState = t), (this._loadingState = s), t !== i)) {
                    for (const e of this._elementsToDecorate) e.classList.add(t), e.classList.remove(i);
                    this.media.trigger(r.default.PLAYBACK_STATE_CHANGE);
                }
                if (s !== n) {
                    for (const e of this._elementsToDecorate) e.classList.add(s), e.classList.remove(n);
                    this.media.trigger(r.default.LOADING_STATE_CHANGE);
                }
            }
            destroy() {
                for (const e of this._elementsToDecorate) e.classList.remove(this._playbackState), e.classList.remove(this._loadingState);
                this._removeEventListeners(), super.destroy();
            }
        }
        t.default = c;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(43)),
            r = s(i(11));
        const { HAVE_METADATA: a, HAVE_CURRENT_DATA: o } = HTMLVideoElement;
        class l extends r.default {
            constructor(e) {
                super(e), this._initialize();
            }
            _initialize() {
                (this.media.el.playsInline = !0), this.media.el.autoplay && (this._autoPlayTimer = setTimeout(() => this.media.play()));
            }
            async play() {
                this.media.el.readyState < a && (await this.media.load()), await this.media.el.play();
            }
            get playbackState() {
                return this.media.el.ended ? n.default.ENDED : this.media.el.paused ? n.default.PAUSED : n.default.PLAYING;
            }
            destroy() {
                clearTimeout(this._autoPlayTimer), super.destroy();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(11));
        class r extends n.default {
            get src() {
                if (!this.media.el.currentSrc && !this.media.el.src) for (const e of this.media.el.querySelectorAll("source")) if (this.media.el.canPlayType(e.type)) return e.src;
                return this.media.el.currentSrc || this.media.el.src;
            }
        }
        t.default = r;
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            itemsCreated() {
                this._items.forEach((e) => {
                    (e.progress = function (e) {
                        if (void 0 === e) return this._progress;
                        (this._progress = e), this.el.style.setProperty("--progress", e);
                    }),
                        e.progress(e.index);
                });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s,
            n = i(14),
            r = i(8).EventEmitterMicro;
        function a(e, t) {
            r.call(this),
                (t = t || {}),
                (this._fps = e || 0),
                (this._delta = 0),
                (this._currentFps = 0),
                (this._rafEmitter = t.rafEmitter || new n()),
                (this._lastThrottledTime = 0),
                (this._didEmitFrameData = !1),
                (this._rafEmitterEvent = null),
                (this._shouldDraw = !1),
                (this._boundOnRAFEmitterUpdate = this._onRAFEmitterUpdate.bind(this)),
                (this._boundOnRAFEmitterDraw = this._onRAFEmitterDraw.bind(this)),
                (this._boundOnRAFEmitterStop = this._onRAFEmitterStop.bind(this)),
                this._rafEmitter.on("update", this._boundOnRAFEmitterUpdate),
                this._rafEmitter.on("draw", this._boundOnRAFEmitterDraw),
                this._rafEmitter.on("stop", this._boundOnRAFEmitterStop);
        }
        ((s = a.prototype = Object.create(r.prototype)).setFps = function (e) {
            return e !== this._fps && ((this._fps = e), !0);
        }),
            (s.getFps = function () {
                return this._fps;
            }),
            (s.run = function () {
                return this._rafEmitter.run();
            }),
            (s.cancel = function () {
                return this._rafEmitter.cancel();
            }),
            (s.willRun = function () {
                return this._rafEmitter.willRun();
            }),
            (s.isRunning = function () {
                return this._rafEmitter.isRunning();
            }),
            (s.destroy = function () {
                var e = this._rafEmitter.destroy();
                return r.prototype.destroy.call(this), (this._rafEmitter = null), (this._boundOnRAFEmitterUpdate = null), (this._boundOnRAFEmitterDraw = null), (this._boundOnRAFEmitterStop = null), (this._rafEmitterEvent = null), e;
            }),
            (s._onRAFEmitterUpdate = function (e) {
                if ((0 === this._lastThrottledTime && (this._lastThrottledTime = this._rafEmitter.executor.lastFrameTime), (this._delta = e.time - this._lastThrottledTime), !this._fps)) throw new TypeError("FPS is not defined.");
                (this._currentFps = 1e3 / this._delta),
                    this._currentFps > this._fps
                        ? this._rafEmitter.run()
                        : ((this._rafEmitterEvent = Object.assign({}, e)),
                          (this._rafEmitterEvent.delta = this._delta),
                          (this._rafEmitterEvent.fps = this._currentFps),
                          (this._lastThrottledTime = this._rafEmitterEvent.time),
                          (this._shouldDraw = !0),
                          this._didEmitFrameData || (this.trigger("start", this._rafEmitterEvent), (this._didEmitFrameData = !0)),
                          this.trigger("update", this._rafEmitterEvent));
            }),
            (s._onRAFEmitterDraw = function () {
                this._shouldDraw && ((this._shouldDraw = !1), this.trigger("draw", this._rafEmitterEvent));
            }),
            (s._onRAFEmitterStop = function () {
                (this._lastThrottledTime = 0), (this._didEmitFrameData = !1), this.trigger("stop", this._rafEmitterEvent);
            }),
            (e.exports = a);
    },
    function (e, t, i) {
        "use strict";
        var s = i(15);
        e.exports = s.cancelAnimationFrame("external");
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e, t, i) {
                const s = e.createScrollGroup(t, { getPosition: () => t.scrollTop, getMaxPosition: () => t.scrollHeight });
                s.name = i;
                const n = () => s.updateTimeline();
                return t.addEventListener("scroll", n), { scrollGroup: s, removeScrollGroupEvents: () => t.removeEventListener("scroll", n) };
            });
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
                let t = e.getAttribute(n.ANIM_SCROLLGROUP_NAME_ATTRIB);
                if (!t) {
                    s.DevLogger.warn(`The following element was not provided an Anim Scroll GroupName via ${n.ANIM_SCROLLGROUP_NAME_ATTRIB}`, e);
                    t = `Name Not Provided : ${parseInt(1e3 * Math.random())}`;
                }
                return t;
            });
        var s = i(16),
            n = i(4);
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e, t) {
                const i = t.closest(n.MODAL_SELECTOR);
                if (!i) return s.DevLogger.warn("The following nested element does not appear to be in a L2Modal", t), null;
                const r = i.getAttribute(n.MODAL_COMPONENT_REF_ATTRIB);
                if (!r) return s.DevLogger.error(`The following L2Modal element appears to be missing the dynamically applied ${n.MODAL_COMPONENT_REF_ATTRIB} attribute`, i), null;
                return e.getComponentsOfType(n.GUM_COMPONENT_NAME).find((e) => e.refId === r);
            });
        var s = i(16),
            n = i(4);
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(42)),
            r = s(i(128)),
            a = i(30);
        const { HAVE_NOTHING: o, HAVE_CURRENT_DATA: l, NETWORK_EMPTY: h, NETWORK_NO_SOURCE: d } = HTMLMediaElement,
            { MEDIA_ERR_SRC_NOT_SUPPORTED: c } = MediaError;
        class u extends r.default {
            unload() {
                return void 0 === this.media._destroyed && this.media.trigger(a.EVT_UNLOAD), this.media.el.setAttribute("src", ""), this.media.el.load();
            }
            get loadingState() {
                if (this.media.el.error) {
                    return "" === this.media.el.getAttribute("src") && this.media.el.error.code === c ? n.default.LOADED : n.default.ERROR;
                }
                return [h, d].includes(this.media.el.networkState) && this.media.el.readyState === o
                    ? n.default.EMPTY
                    : this.media.el.readyState < l
                    ? this.media.el.buffered.length && 0 === this.media.el.buffered.start(0) && this.media.el.buffered.end(0) === this.media.el.duration
                        ? n.default.LOADED
                        : n.default.LOADING
                    : n.default.LOADED;
            }
        }
        t.default = u;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(94)),
            r = s(i(130)),
            a = s(i(55)),
            o = s(i(131));
        class l extends n.default {
            addCustomPlugins() {
                this.injectPlugins({ AnimLoad: r.default, AnimPlay: a.default, ViewportSourceOnce: o.default });
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(132)),
            r = i(45),
            a = s(i(23)),
            o = i(258),
            l = i(4);
        class h extends a.default {
            IS_SUPPORTED() {
                return !0;
            }
            constructor(e) {
                super(e);
                const t = this.el.querySelector(`[${l.CONTENT_WRAPPER_ATTRIB}]`),
                    i = this.el.querySelector(`[${l.BTN_OPEN_ATTRIB}]`);
                this._modal = this._createModal(t, i);
            }
            get refId() {
                return this.modal.refId;
            }
            get modal() {
                return this._modal;
            }
            get name() {
                return this.modal.name;
            }
            get animScrollGroup() {
                return this.modal.animScrollGroup;
            }
            _createModal(e, t) {
                if (!e) return this.logger.error("An L2Modal for the following L1 element is unable to find the required content wrapper element", this.el), {};
                const i = e.hasAttribute(l.USE_ANIM_LIFECYCLE_ATTRIB) ? o.AnimLifecycleEvents : {};
                return new (n.default.withMixins(
                    o.AnalyticsScrollDepth,
                    i,
                    o.AnimScrollGroup,
                    o.AriaLabelledby,
                    o.CloseElements,
                    r.Focus,
                    o.GumComponentRefId,
                    r.Keyboard,
                    o.LazyImage,
                    o.ModalId,
                    o.OpenButton,
                    o.OpenCloseAnimation,
                    o.OverwriteModel,
                    o.ScrollBuffer,
                    r.ScrollPosition,
                    o.SosumiLinks
                ))(e, { attributes: {}, btnOpen: t });
            }
        }
        t.default = h;
    },
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.nodeType);
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(80));
        t.default = {
            beforeCreate() {
                document.body._animInfo
                    ? ((this.anim = document.body._animInfo.group.anim), this._setViewport(this.anim.model.pageMetrics))
                    : ((this.viewportEmitterMicro = new n.default()), (this.viewportEmitterMicro.CHANGE_EVENTS = n.default.CHANGE_EVENTS), this._setViewport(this.viewportEmitterMicro));
            },
            onBreakpointChange(e) {
                this._setViewport(e), this._setPreviousViewport(e);
            },
            onOpen() {
                this.opened = !0;
            },
            onClose() {
                this.opened = !1;
            },
            _setViewport(e) {
                this._viewport = this.anim ? this._getValidViewport(e.breakpoint) : this._getValidViewport(e.viewport);
            },
            _setPreviousViewport(e) {
                this._previousViewport = this.anim ? this._getValidViewport(e.previousBreakpoint) : this._getValidViewport(e.oldViewport);
            },
            _getValidViewport(e) {
                const t = { X: "L", L: "L", M: "M", S: "S" };
                if (!Object.keys(t).includes(e)) throw `The viewport ${e} is not valid. Valid viewports are: ${Object.keys(t)}`;
                return t[e] || "";
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            created() {
                this._createModalElements();
            },
            beforeMount() {
                this._setDialogAriaLabel(), this.appendModalElements();
            },
            destroy() {
                document.body.removeChild(this.elements.container), this._releaseEvents();
                for (let e in this) Object.prototype.hasOwnProperty.call(this, e) && (this[e] = null);
            },
            getModalElementKey(e) {
                let t;
                for (const i in e.dataset)
                    if (i.includes("modalElement")) {
                        const e = i.substring(12);
                        t = e[0].toLowerCase() + e.slice(1);
                    }
                return t;
            },
            appendContentElement() {
                this.appendContent(this.elements.content, this.elements.contentContainer), this.trigger(this.model.Events.CONTENT_APPENDED);
            },
            appendModalElements() {
                document.body.appendChild(this.elements.container), this.trigger(this.model.Events.RENDERED);
            },
            _createModalElements() {
                this._createTemplates(), this._createElementsFromTemplate();
                for (const e in this.templates) this._setChildElements(this.elements[e]);
                this._setDialogRoleElement(), this._setElementAttributes(), this.appendContentElement();
            },
            _createTemplates() {
                for (const e in this.model.Elements) {
                    const t = this.model.Elements[e].Template;
                    t && !this.templates[e] && (this.templates[e] = t);
                }
            },
            _createElementsFromTemplate() {
                for (const e in this.templates) this.elements[e] = new DOMParser().parseFromString(this.templates[e], "text/html").body.childNodes[0];
            },
            _setChildElements(e) {
                [...e.children].forEach((e) => {
                    this.getModalElementKey(e) && (this.elements[this.getModalElementKey(e)] = e), this._setChildElements(e);
                });
            },
            _setDialogRoleElement() {
                this.dialogRoleElement || (this.dialogRoleElement = this.elements.container.querySelector(this.model.DialogRole.Selector) || this.elements.container);
                for (const e in this.model.DialogRole.Attributes) this.dialogRoleElement.setAttribute(e, this.model.DialogRole.Attributes[e]);
            },
            _setElementAttributes() {
                let e = {},
                    t = {};
                for (const t in this.model.Elements) this.model.Elements[t].Attributes && (e[t] = this.model.Elements[t].Attributes);
                for (const i in e) {
                    t[i] = Object.assign({}, e[i], this.options.attributes[i]);
                    for (const i in this.options.attributes) "undefined" !== t[i] && (t[i] = Object.assign({}, e[i], this.options.attributes[i]));
                }
                for (const e in t)
                    for (const i in t[e]) {
                        let s = t[e][i];
                        if (!this.elements[e]) return;
                        if ("class" === i) Array.isArray(s) && (s = s.join(" ")), (this.elements[e].className = `${this.elements[e].className} ${s}`.trim());
                        else this.elements[e].setAttribute(i, s);
                    }
            },
            _setDialogAriaLabel() {
                if (this.elements.content && this.elements.content.dataset.modalDialogLabel) {
                    let e = this.elements.content.dataset.modalDialogLabel;
                    this.dialogRoleElement.setAttribute("aria-label", e);
                } else this.dialogRoleElement.hasAttribute("aria-label") || this.dialogRoleElement.hasAttribute("aria-labelledby") || this.dialogRoleElement.setAttribute("aria-label", "Modal");
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            created() {
                this.options.gum ||
                    this._isVue ||
                    (this.anim
                        ? (this.anim.on(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate),
                          this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced),
                          this.anim.on(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange))
                        : (window.addEventListener("resize", this.onResizeImmediate), this.viewportEmitterMicro.on(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange)),
                    (this._mountedRaf = requestAnimationFrame(this.mounted)));
            },
            onResizeImmediate() {
                this.anim || (window.clearTimeout(this._resizeTimeout), (this._resizeTimeout = window.setTimeout(this.onResizeDebounced, 250)));
            },
            destroy() {
                cancelAnimationFrame(this._mountedRaf),
                    this.anim
                        ? (this.anim.off(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate),
                          this.anim.off(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced),
                          this.anim.off(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange))
                        : (window.removeEventListener("resize", this.onResizeImmediate), this.viewportEmitterMicro.off(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            created() {
                this.close = this.close.bind(this);
            },
            onWillOpen() {
                this._attachCloseEvents();
            },
            onClose() {
                this._removeCloseEvents(), document.documentElement.classList.remove(...this.model.Open.Document.ClassNames), this.elements.container.classList.remove(...this.model.Open.Container.ClassNames);
            },
            mounted() {
                this.close.elements = Array.from(document.querySelectorAll(this.model.Close.Selector));
            },
            destroy() {
                this.close();
            },
            close(e) {
                this.opened && ((e && "click" === e.type && !this.close.elements.includes(e.target)) || (this.trigger(this.model.Events.WILLCLOSE), this.trigger(this.model.Events.CLOSE)));
            },
            _removeCloseEvents() {
                this.elements.container && this.elements.container.removeEventListener("click", this.close);
            },
            _attachCloseEvents() {
                this.elements.container && this.elements.container.addEventListener("click", this.close);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            created() {
                this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
            },
            beforeMount() {
                this._setCloseAriaLabel(), this.appendCloseButton();
            },
            mounted() {
                this.elements.closeButton.addEventListener("click", this.onCloseButtonClick);
            },
            destroy() {
                this.elements.closeButton.removeEventListener("click", this.onCloseButtonClick);
            },
            appendCloseButton() {
                (this.elements.container.querySelector(this.model.Elements.closeButton.ParentSelector) || this.elements.container).appendChild(this.elements.closeButton);
            },
            onCloseButtonClick(e) {
                this.close(e);
            },
            _setCloseAriaLabel() {
                if (this.elements.content && this.elements.content.dataset.modalCloseLabel) {
                    let e = this.elements.content.dataset.modalCloseLabel;
                    this.elements.closeButton.setAttribute("aria-label", e);
                }
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(133)),
            r = s(i(33));
        t.default = {
            created() {
                this.scrollToModalTop = this.scrollToModalTop.bind(this);
            },
            mounted() {
                r.default.getTabbableElements(this.dialogRoleElement).length && (this._circularTab = new n.default(this.dialogRoleElement));
            },
            onOpen() {
                this._giveModalFocus();
            },
            onWillClose() {
                this._removeModalFocus();
            },
            destroy() {
                clearTimeout(this._focusTimeout), this._removeModalFocus(), this._circularTab && this._circularTab.destroy();
            },
            _giveModalFocus() {
                this.dialogRoleElement.removeAttribute("aria-hidden"),
                    this.elements.container.classList.add("modal-touch-lock"),
                    (this._activeElement = document.activeElement),
                    this._circularTab && this._circularTab.start(!0),
                    this.elements.container.addEventListener("scroll", this.scrollToModalTop),
                    (this._focusTimeout = setTimeout(() => {
                        this.dialogRoleElement.focus({ preventScroll: !0 }),
                            requestAnimationFrame(() => {
                                this.elements.container.removeEventListener("scroll", this.scrollToModalTop), this.elements.container.classList.remove("modal-touch-lock");
                            });
                    }, 300));
            },
            _removeModalFocus() {
                this._circularTab && this._circularTab.stop(),
                    this.dialogRoleElement.setAttribute("aria-hidden", "true"),
                    this.elements.container.removeEventListener("scroll", this.scrollToModalTop),
                    this._activeElement && (this._activeElement.focus(), (this._activeElement = null));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            beforeCreate() {
                this.model.Open.Document.ClassNames.push("has-modal-full-bleed");
            },
            beforeMount() {
                this.elements.container.classList.add(...this.model.FullBleed.ClassNames);
            },
            destroy() {
                this.elements.container.classList.remove(...this.model.FullBleed.ClassNames);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(248);
        e.exports = {
            beforeCreate() {
                (this._keysToOpen = this.model.Keyboard.open.keys), (this._keysToClose = this.model.Keyboard.close.keys), (this._enabledKeysToOpen = []), (this._enabledKeysToClose = []);
            },
            onWillOpen() {
                this._keysToOpen.forEach(this.disableKeyToOpen, this), this._keysToClose.forEach(this.enableKeyToClose, this);
            },
            onWillClose() {
                this._keysToOpen.forEach(this.enableKeyToOpen, this), this._keysToClose.forEach(this.disableKeyToClose, this);
            },
            destroy() {
                this._keysToOpen.forEach(this.disableKeyToOpen, this), this._keysToClose.forEach(this.disableKeyToClose, this);
            },
            addKeyToOpen(e) {
                -1 === this._keysToOpen.indexOf(e) && (this._keysToOpen.push(e), this.enableKeyToOpen(e));
            },
            addKeyToClose(e) {
                -1 === this._keysToClose.indexOf(e) && (this._keysToClose.push(e), this.enableKeyToClose(e));
            },
            removeKeyToOpen(e) {
                const t = this._keysToOpen.indexOf(e);
                -1 !== t && (this._keysToOpen.splice(t, 1), this.disableKeyToOpen(e));
            },
            removeAllKeysToOpen() {
                this._keysToOpen.forEach(this.disableKeyToOpen, this), this._keysToOpen.splice(0, this._keysToOpen.length);
            },
            removeKeyToClose(e) {
                const t = this._keysToClose.indexOf(e);
                -1 !== t && (this._keysToClose.splice(t, 1), this.disableKeyToClose(e));
            },
            removeAllKeysToClose() {
                this._keysToClose.forEach(this.disableKeyToClose, this), this._keysToClose.splice(0, this._keysToClose.length);
            },
            enableKeyToOpen(e) {
                -1 === this._enabledKeysToOpen.indexOf(e) && (s.onUp(e, this.open, this), this._enabledKeysToOpen.push(e));
            },
            enableKeyToClose(e) {
                -1 === this._enabledKeysToClose.indexOf(e) && (s.onUp(e, this.close, this), this._enabledKeysToClose.push(e));
            },
            disableKeyToOpen(e) {
                const t = this._enabledKeysToOpen.indexOf(e);
                -1 !== t && (s.offUp(e, this.open, this), this._enabledKeysToOpen.splice(t, 1));
            },
            disableKeyToClose(e) {
                const t = this._enabledKeysToClose.indexOf(e);
                -1 !== t && (s.offUp(e, this.close, this), this._enabledKeysToClose.splice(t, 1));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(249);
        e.exports = new s();
    },
    function (e, t, i) {
        "use strict";
        const s = i(6),
            n = i(250),
            r = "keydown",
            a = "keyup";
        e.exports = class extends s {
            constructor(e) {
                super(),
                    (this._keysDown = {}),
                    (this._DOMKeyDown = this._DOMKeyDown.bind(this)),
                    (this._DOMKeyUp = this._DOMKeyUp.bind(this)),
                    (this._context = e || document),
                    this._context.addEventListener(r, this._DOMKeyDown, !0),
                    this._context.addEventListener(a, this._DOMKeyUp, !0);
            }
            onDown(e, t) {
                return this.on(r + ":" + e, t);
            }
            onceDown(e, t) {
                return this.once(r + ":" + e, t);
            }
            offDown(e, t) {
                return this.off(r + ":" + e, t);
            }
            onUp(e, t) {
                return this.on(a + ":" + e, t);
            }
            onceUp(e, t) {
                return this.once(a + ":" + e, t);
            }
            offUp(e, t) {
                return this.off(a + ":" + e, t);
            }
            isDown(e) {
                return (e += ""), this._keysDown[e] || !1;
            }
            isUp(e) {
                return !this.isDown(e);
            }
            destroy() {
                return this._context.removeEventListener(r, this._DOMKeyDown, !0), this._context.removeEventListener(a, this._DOMKeyUp, !0), (this._keysDown = null), (this._context = null), super.destroy(), this;
            }
            _DOMKeyDown(e) {
                var t = this._normalizeKeyboardEvent(e),
                    i = (t.keyCode += "");
                this._trackKeyDown(i), this.trigger(r + ":" + i, t);
            }
            _DOMKeyUp(e) {
                var t = this._normalizeKeyboardEvent(e),
                    i = (t.keyCode += "");
                this._trackKeyUp(i), this.trigger(a + ":" + i, t);
            }
            _normalizeKeyboardEvent(e) {
                return new n(e);
            }
            _trackKeyUp(e) {
                this._keysDown[e] && (this._keysDown[e] = !1);
            }
            _trackKeyDown(e) {
                this._keysDown[e] || (this._keysDown[e] = !0);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(251),
            n = ["keyLocation", "keyIdentifier"],
            r = "keyCode";
        e.exports = class {
            constructor(e) {
                this.originalEvent = e;
                for (let t in e) -1 === n.indexOf(t) && "function" != typeof e[t] && (this[t] = e[t]);
                this[r] || (this[r] = this._getKeyCode()), (this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation);
            }
            preventDefault() {
                if ("function" == typeof this.originalEvent.preventDefault) return this.originalEvent.preventDefault();
                this.originalEvent.returnValue = !1;
            }
            stopPropagation() {
                return this.originalEvent.stopPropagation();
            }
            _getKeyCode() {
                return s[this.code] || -1;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            NumpadEnter: 13,
            ShiftLeft: 16,
            ShiftRight: 16,
            ControlLeft: 17,
            ControlRight: 17,
            AltLeft: 18,
            AltRight: 18,
            CapsLock: 20,
            Escape: 27,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowLeft: 37,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            Delete: 46,
            Digit0: 48,
            Digit1: 49,
            Digit2: 50,
            Digit3: 51,
            Digit4: 52,
            Digit5: 53,
            Digit6: 54,
            Digit7: 55,
            Digit8: 56,
            Digit9: 57,
            KeyA: 65,
            KeyB: 66,
            KeyC: 67,
            KeyD: 68,
            KeyE: 69,
            KeyF: 70,
            KeyG: 71,
            KeyH: 72,
            KeyI: 73,
            KeyJ: 74,
            KeyK: 75,
            KeyL: 76,
            KeyM: 77,
            KeyN: 78,
            KeyO: 79,
            KeyP: 80,
            KeyQ: 81,
            KeyR: 82,
            KeyS: 83,
            KeyT: 84,
            KeyU: 85,
            KeyV: 86,
            KeyW: 87,
            KeyX: 88,
            KeyY: 89,
            KeyZ: 90,
            Numpad0: 96,
            Numpad1: 97,
            Numpad2: 98,
            Numpad3: 99,
            Numpad4: 100,
            Numpad5: 101,
            Numpad6: 102,
            Numpad7: 103,
            Numpad8: 104,
            Numpad9: 105,
            NumpadMultiply: 106,
            NumpadAdd: 107,
            NumpadSubtract: 109,
            NumpadDecimal: 110,
            NumpadDivide: 111,
            NumpadEqual: 187,
            Backquote: 192,
            BracketLeft: 219,
            BracketRight: 221,
            Backslash: 220,
            Semicolon: 186,
            Quote: 222,
            Space: 32,
            Equal: 187,
            Comma: 188,
            Minus: 189,
            Period: 190,
            Slash: 191,
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            created() {
                this.open = this.open.bind(this);
            },
            onWillOpen() {
                document.documentElement.classList.add(...this.model.Open.Document.ClassNames), this.elements.container.classList.add(...this.model.Open.Container.ClassNames), this.scrollToModalTop();
            },
            open() {
                this.opened || (this.trigger(this.model.Events.WILLOPEN), this.trigger(this.model.Events.OPEN));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            beforeCreate() {
                this.model.Open.Document.ClassNames.push("has-modal-page-overlay"), (this._scrollBarWidth = 0);
            },
            beforeMount() {
                this.elements.container.classList.add(...this.model.PageOverlay.ClassNames);
            },
            mounted() {
                this._saveScrollBarWidth();
            },
            onResizeDebounced() {
                this.opened || this._saveScrollBarWidth();
            },
            onWillOpen() {
                document.documentElement.style.setProperty("--modal-scrollbar-buffer", this._scrollBarWidth);
            },
            onClose() {
                document.documentElement.style.removeProperty("--modal-scrollbar-buffer");
            },
            destroy() {
                this.elements.container.classList.remove(...this.model.PageOverlay.ClassNames);
            },
            _saveScrollBarWidth() {
                this._scrollBarWidth = window.innerWidth - document.body.clientWidth + "px";
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            created() {
                (this._scrollX = 0), (this._scrollY = 0);
            },
            onWillOpen() {
                this._saveScrollPosition();
            },
            onClose() {
                this._restoreScrollPosition();
            },
            _saveScrollPosition() {
                (this._scrollX = document.documentElement.scrollLeft), (this._scrollY = document.documentElement.scrollTop);
            },
            _restoreScrollPosition() {
                window.scrollTo(this._scrollX, this._scrollY);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(45);
        t.default = [s.Close, s.CloseButton];
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(45);
        t.default = [...s.CloseBundle, s.Focus, s.Keyboard, s.Open, s.FullBleed, s.ScrollPosition];
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(45);
        t.default = [...s.CloseBundle, s.Focus, s.Keyboard, s.Open, s.PageOverlay, s.ScrollPosition];
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "AnalyticsScrollDepth", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(t, "AnimLifecycleEvents", {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            }),
            Object.defineProperty(t, "AnimScrollGroup", {
                enumerable: !0,
                get: function () {
                    return a.default;
                },
            }),
            Object.defineProperty(t, "AriaLabelledby", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
            Object.defineProperty(t, "CloseElements", {
                enumerable: !0,
                get: function () {
                    return l.default;
                },
            }),
            Object.defineProperty(t, "GumComponentRefId", {
                enumerable: !0,
                get: function () {
                    return h.default;
                },
            }),
            Object.defineProperty(t, "LazyImage", {
                enumerable: !0,
                get: function () {
                    return d.default;
                },
            }),
            Object.defineProperty(t, "ModalId", {
                enumerable: !0,
                get: function () {
                    return c.default;
                },
            }),
            Object.defineProperty(t, "OpenButton", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            }),
            Object.defineProperty(t, "OpenCloseAnimation", {
                enumerable: !0,
                get: function () {
                    return m.default;
                },
            }),
            Object.defineProperty(t, "OverwriteModel", {
                enumerable: !0,
                get: function () {
                    return p.default;
                },
            }),
            Object.defineProperty(t, "ScrollBuffer", {
                enumerable: !0,
                get: function () {
                    return f.default;
                },
            }),
            Object.defineProperty(t, "SosumiLinks", {
                enumerable: !0,
                get: function () {
                    return _.default;
                },
            });
        var n = s(i(259)),
            r = s(i(260)),
            a = s(i(261)),
            o = s(i(262)),
            l = s(i(263)),
            h = s(i(266)),
            d = s(i(267)),
            c = s(i(268)),
            u = s(i(269)),
            m = s(i(270)),
            p = s(i(271)),
            f = s(i(272)),
            _ = s(i(273));
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(16),
            n = i(4),
            r = i(44);
        let a = null;
        try {
            a = i(39);
        } catch (e) {}
        function o(e, t) {
            const i = { 25: 74, 50: 75, 75: 76, 100: 72 };
            "string" != typeof e && s.DevLogger.error("Required modal analytics prop3 name not provided"),
                t || s.DevLogger.error("Required progress markers not provided."),
                (t = parseInt(t)),
                (!isNaN(t) && Object.keys(i).includes(t.toString())) || s.DevLogger.error("Invalid progress marker");
            let n = `${t}% Viewed`,
                r = `${e} - ${t}% Viewed`;
            return 100 === t && ((n = "Modal End"), (r = `${e} - modal end`)), { title: n, prop3: r, events: `event${i[t]}` };
        }
        t.default = {
            beforeCreate() {
                const e = this.elements.content.getAttribute(n.ANALYTICS_REGION_ID_ATTRIB);
                (this._scrollDepthAnalytics = { hasTracked: !1, progressMarkers: [25, 50, 75, 100], prop3ModalName: e, scrollGroup: null, removeScrollGroupEvents: () => {} }),
                    "string" != typeof e && s.DevLogger.error("Required modal analytics prop3 name not provided");
            },
            mounted() {
                const { scrollGroup: e, removeScrollGroupEvents: t } = (0, r.createCustomAnimScrollGroup)(this.anim, this.elements.container, `${this.friendlyName} : Analytics : ScrollDepth`);
                (this._scrollDepthAnalytics.scrollGroup = e), (this._scrollDepthAnalytics.removeScrollGroupEvents = t);
            },
            onOpen() {
                const { hasTracked: e, progressMarkers: t, prop3ModalName: i, scrollGroup: n } = this._scrollDepthAnalytics;
                if (e) return;
                const r = o.bind(this, i);
                for (const e of t) {
                    const t = 100 === e ? "b - 100vh" : `t + ${e}h - 100vh`,
                        o = `${i}-${e}`,
                        l = () => {
                            const t = r(e);
                            //a.track(t), s.DevLogger.info("Modal Track Depth", t);
                        };
                    n.addEvent(this.elements.content, { start: t, event: o, onEventOnce: l });
                }
                this._scrollDepthAnalytics.hasTracked = !0;
            },
            onWillClose() {
                const { scrollGroup: e, removeScrollGroupEvents: t } = this._scrollDepthAnalytics;
                null !== e &&
                    (t(),
                    e.remove().then(() => {
                        this._scrollDepthAnalytics.scrollGroup = null;
                    }));
            },
            destroy() {
                this.onWillClose();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(4);
        t.default = {
            created() {
                this.anim.trigger(s.LIFECYCLE_EVTS.CREATED, this);
            },
            mounted() {
                this.anim.trigger(s.LIFECYCLE_EVTS.MOUNTED, this);
            },
            onWillOpen() {
                this.anim.trigger(s.LIFECYCLE_EVTS.WILLOPEN, this);
            },
            onOpen() {
                this.anim.trigger(s.LIFECYCLE_EVTS.OPEN, this);
            },
            onWillClose() {
                this.anim.trigger(s.LIFECYCLE_EVTS.WILLCLOSE, this);
            },
            onClose() {
                this.anim.trigger(s.LIFECYCLE_EVTS.CLOSE, this);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(44);
        t.default = {
            beforeCreate() {
                (this.animScrollGroup = null), (this.friendlyName = (0, s.getFriendlyName)(this.elements.content));
            },
            beforeMount() {
                const { scrollGroup: e } = (0, s.createCustomAnimScrollGroup)(this.anim, this.elements.container, this.friendlyName);
                this.animScrollGroup = e;
            },
            onOpen() {
                this.animScrollGroup.forceUpdate();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(4);
        t.default = {
            beforeCreate() {
                const e = this.elements.content.getAttribute(s.MODAL_LABELLEDBY_ATTRIB);
                e && (this.model.DialogRole.Attributes["aria-labelledby"] = e);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(4),
            n = i(136);
        t.default = {
            beforeCreate() {
                (this.model.Elements.closeIcon.Attributes = { class: "modal-close-icon" }),
                    (this.model.Elements.closeBtnWrapper = { Template: n.CloseBtnWrapper, Selector: "[data-modal-element-close-btn-wrapper]", Attributes: { class: "modal-close-btn-wrapper" } });
            },
            created() {
                this.elements.close = [];
            },
            beforeMount() {
                this._setCloseAriaLabel(), this._appendCloseButton();
            },
            mounted() {
                const e = this.elements.container.querySelectorAll(this.model.Close.Selector);
                this.elements.close = Array.from(e);
                if ((this.elements.container.hasAttribute(s.BTN_CLOSE_ATTRIB) && this.elements.close.push(this.elements.container), this.elements.close.length > 1))
                    for (const e of this.elements.close) e.addEventListener("click", this.close);
            },
            destroy() {
                if (this.elements.close.length > 1) for (const e of this.elements.close) e.removeEventListener("click", this.close);
            },
            _appendCloseButton() {
                const e = this.model.Elements.closeButton.ParentSelector,
                    t = this.elements.container.querySelector(e),
                    i = this.elements.closeBtnWrapper;
                i.appendChild(this.elements.closeButton), t.appendChild(i);
            },
            _setCloseAriaLabel() {
                if (this.elements.content && this.elements.content.dataset.modalCloseLabel) {
                    const e = this.elements.content.dataset.modalCloseLabel;
                    this.elements.closeButton.setAttribute("aria-label", e);
                }
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = "<div data-modal-element-close-btn-wrapper></div>";
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = "<div data-modal-element-container>\n\t<div data-modal-element-content-container></div>\n</div>";
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(4);
        t.default = {
            beforeCreate() {
                (this.refId = (function () {
                    return `${arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : `${s.MODAL_L2_CLASSNAME}`}-${parseInt(1e3 * Math.random())}`;
                })()),
                    (this.model.Elements.container.Attributes[s.MODAL_COMPONENT_REF_ATTRIB] = this.refId);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(79),
            n = i(16);
        const r = i(111),
            a = {
                start: "t - 200vh",
                end: "b + 100vh",
                event: "l2-lazy-load",
                onEnterOnce: (e) => {
                    e.element.removeAttribute(`${r.DATA_ATTRIBUTE}`), e.element.forceLoad ? e.element.forceLoad() : e.element.forceLazyLoad && e.element.forceLazyLoad();
                },
            };
        t.default = {
            mounted() {
                this._hasOpened = !1;
            },
            onWillOpen() {
                if (!this._hasOpened) {
                    ((e, t) => {
                        e.querySelectorAll(`[${r.DATA_ATTRIBUTE}], [data-lazy]`).forEach((e) => {
                            const i = e[s.LAZY_LOAD_STORED_OPTIONS_NAME];
                            i ? t.addEvent(e, { ...a, ...i }) : n.DevLogger.warn("LazyImage modal mixin is missing a stored keyframe", e);
                        });
                    })(this.elements.container, this.animScrollGroup),
                        (this._hasOpened = !0);
                }
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(4);
        t.default = {
            beforeCreate() {
                const e = this.elements.content.getAttribute(s.MODAL_ID_ATTRIB);
                e && ((this.model.Elements.container.Attributes.id = e), (this.id = e));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
            beforeMount() {
                const e = this.options.btnOpen;
                if (!this.options.btnOpen || 1 !== e.nodeType) throw new TypeError(`option.btnOpen is required at modal instantiation; modal affected ${this.elements.container}`);
                e.addEventListener("click", this.open);
            },
            destroy() {
                this.options.btnOpen.removeEventListener("click", this.open);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(25),
            n = i(16),
            r = i(4);
        t.default = {
            beforeCreate() {
                const e = document.documentElement.classList.contains("reduced-motion");
                (this.elements.close = []),
                    (this._reduceOpenCloseAnimation = e),
                    (this._localNav = document.getElementById("ac-localnav")),
                    (this._openCloseAnimTargetValues = {}),
                    (this._openCloseAnimTimeline = null),
                    (this._openCloseSharedKfOpts = { duration: 0.8, ease: e ? "easeInOutSin" : "easeInOutCubic" }),
                    (this.close = this.close.bind(this)),
                    (this.open = this.open.bind(this));
            },
            async mounted() {
                (this._openCloseAnimTimeline = this.anim.createTimeGroup()),
                    (this._openCloseAnimTimeline.name = `${this.friendlyName} : Open/Close Timeline`),
                    (this._openCloseAnimTargetValues = await this._getAnimatedStyles()),
                    this._setupScrimAnimation(),
                    this._setupContentAnimation(),
                    this._setupLocalNavAnimation(),
                    this._attachTimelineCompleteEvents();
            },
            onBreakpointChange() {
                this._updateLocalNavAnimProps();
            },
            open() {
                this.opened || this.trigger(this.model.Events.WILLOPEN);
            },
            onWillOpen() {
                const e = this.model.Open.Document.ClassNames[0],
                    t = this.model.Open.Container.ClassNames[0];
                (0, s.update)(() => {
                    (0, s.draw)(() => {
                        document.documentElement.classList.add(e), this.elements.container.classList.add(t);
                        this._isModalContentScrollable() && (this.elements.contentContainer.style.marginRight = this._scrollBarWidth),
                            this.scrollToModalTop(),
                            (this.elements.container.style.overflow = "hidden"),
                            (this.elements.container.style.opacity = 1),
                            this.trigger(this.model.Events.OPEN);
                    });
                });
            },
            onOpen() {
                this._openCloseAnimTimeline.play();
            },
            _onOpenComplete() {
                (0, s.draw)(() => {
                    (this.elements.container.style.overflow = ""), (this.elements.contentContainer.style.marginRight = ""), this.trigger(r.ANIMATION_EVTS.OPEN_COMPLETE);
                });
            },
            close(e) {
                this.opened && ((e && "click" === e.type && !this.elements.close.includes(e.target)) || ((this.opened = !1), this.trigger(this.model.Events.WILLCLOSE)));
            },
            onWillClose() {
                this.trigger(this.model.Events.CLOSE);
            },
            onClose() {
                this._openCloseAnimTimeline.reverse();
            },
            _onCloseComplete() {
                const e = this.model.Open.Container.ClassNames[0],
                    t = this.model.Open.Document.ClassNames[0];
                (0, s.draw)(() => {
                    document.documentElement.classList.remove(t),
                        this.elements.container.classList.remove(e),
                        (this.elements.container.style.overflow = ""),
                        (this.elements.container.style.opacity = 0),
                        this.trigger(r.ANIMATION_EVTS.CLOSE_COMPLETE);
                });
            },
            destroy() {
                this.close(), this._removeCloseEvents();
            },
            _attachTimelineCompleteEvents() {
                const e = this._openCloseAnimTimeline;
                e.on("update", (t) => {
                    e.paused() || (0 === e.progress() && e.reversed() && this._onCloseComplete(), 1 === e.progress() && (e.reversed() || this._onOpenComplete()));
                });
            },
            _isModalContentScrollable() {
                return this.elements.contentContainer.getBoundingClientRect().height > window.innerHeight;
            },
            _getAnimatedStyles() {
                return new Promise((e, t) => {
                    try {
                        (0, s.draw)(() => {
                            const t = getComputedStyle(this.elements.container),
                                i = getComputedStyle(this._localNav),
                                s = t.getPropertyValue(r.SCRIM.CSS_VAR_FILL),
                                n = t.getPropertyValue(r.SCRIM.CSS_VAR_BLUR),
                                a = i.getPropertyValue("--r-localnav-height");
                            e({ scrimFill: s, scrimBlur: n, localNavHeight: a });
                        });
                    } catch (e) {
                        n.DevLogger.error("Something went wrong retrieving starting values for L2Modal Open/Close animated styles"), t(e);
                    }
                });
            },
            _setupScrimAnimation() {
                const { duration: e, ease: t } = this._openCloseSharedKfOpts,
                    { scrimBlur: i, scrimFill: n } = this._openCloseAnimTargetValues,
                    a = n.match(/\d+\.*\d*/g),
                    o = a.slice(0, 3).join(),
                    l = a[3],
                    h = parseFloat(i),
                    d = this._openCloseAnimTimeline,
                    c = d.addKeyframe(this.elements.container, { start: 0, end: e, alpha: [0, l], blur: [0, h, "px"], easeFunction: t });
                d.on("update", (e) => {
                    if (d.paused()) return;
                    const t = c.controller.group.progress(),
                        s = c.controller.tweenProps.alpha.current.toFixed(2);
                    let a = `rgba(${o}, ${s})`,
                        l = `${c.controller.tweenProps.blur.current}px`;
                    1 === t && ((a = n), (l = i)), this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_FILL, a), this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_BLUR, l);
                }),
                    (0, s.draw)(() => {
                        this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_FILL, `rgba(${o}, 0)`), this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_BLUR, "0px");
                    });
            },
            _setupLocalNavAnimation() {
                if (this._reduceOpenCloseAnimation) return;
                const { duration: e } = this._openCloseSharedKfOpts,
                    { localNavHeight: t } = this._openCloseAnimTargetValues;
                this._openCloseAnimTimeline.addKeyframe(this._localNav, { start: 0, end: e, y: [0, -1 * parseFloat(t)], easeFunction: "easeInOutQuad" });
            },
            async _updateLocalNavAnimProps() {
                this._openCloseAnimTargetValues = await this._getAnimatedStyles();
                const e = this._openCloseAnimTimeline.getControllerForTarget(this._localNav);
                if (!e) return;
                const t = e.getNearestKeyframeForAttribute("y"),
                    { localNavHeight: i } = this._openCloseAnimTargetValues;
                t.overwriteProps({ y: [0, -1 * parseFloat(i)] });
            },
            _setupContentAnimation() {
                this._reduceOpenCloseAnimation ? this._setupContentBaseAnimation() : this._setupContentEnhancedAnimation();
            },
            _setupContentBaseAnimation() {
                const { duration: e, ease: t } = this._openCloseSharedKfOpts;
                this._openCloseAnimTimeline.addKeyframe(this.elements.contentContainer, { start: 0, end: e, opacity: [0, 1], easeFunction: t });
            },
            _setupContentEnhancedAnimation() {
                const { duration: e, ease: t } = this._openCloseSharedKfOpts,
                    i = this._openCloseAnimTimeline,
                    s = "100vh",
                    n = i.addKeyframe(this.elements.contentContainer, { start: 0, end: e, opacity: [1, 1], y: [s, 0], easeFunction: t });
                this.on(r.ANIMATION_EVTS.WILLCLOSE, () => {
                    n.overwriteProps({ opacity: [0, 1], y: [0, 0], easeFunction: "easeInOutQuad" });
                }),
                    this.on(r.ANIMATION_EVTS.CLOSE_COMPLETE, () => {
                        n.overwriteProps({ opacity: [1, 1], y: [s, 0], easeFunction: t });
                    });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(4),
            n = i(136);
        t.default = {
            beforeCreate() {
                const e = this.elements.content.getAttribute(s.THEME_ATTRIB) || s.THEME_DEFAULT,
                    t = this.elements.content.getAttribute(s.MODAL_CUSTOM_CLASSNAME_ATTRIB),
                    i = this.elements.content.getAttribute(s.SCRIM.BLUR_ATTRIB);
                let r = `${s.MODAL_L2_CLASSNAME} ${s.SCRIM.ELEMENT_CLASSNAME} ${s.THEME_CLASSNAME_NAMESPACE}-${e}`;
                var a;
                t && (r = `${r} ${((a = t), a.split(/\s+|,+/).join(" "))}`),
                    "true" === i && (r = `${r} ${s.SCRIM.BLUR_CLASSNAME}`),
                    (this.model.Elements.container.Template = n.ModalContainer),
                    (this.model.Elements.container.Attributes.class = r),
                    (this.model.Elements.container.Attributes[s.BTN_CLOSE_ATTRIB] = ""),
                    (this.model.Elements.contentContainer = { Selector: "[data-modal-element-overlay]", Attributes: { class: "modal-overlay", "data-modal-close-button-parent": "" } }),
                    delete this.model.PageOverlay,
                    delete this.model.FullBleed;
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(25),
            n = i(4);
        t.default = {
            beforeCreate() {
                this._scrollBarWidth = 0;
            },
            mounted() {
                this._saveScrollBarWidth();
            },
            onResizeDebounced() {
                this.opened || this._saveScrollBarWidth();
            },
            _saveScrollBarWidth() {
                (0, s.update)(() => {
                    (this._scrollBarWidth = window.innerWidth - document.body.clientWidth + "px"),
                        (0, s.draw)(() => {
                            document.documentElement.style.setProperty(n.SCROLLBAR_BUFFER_CSS_VAR, this._scrollBarWidth);
                        });
                });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var s = i(16),
            n = i(4);
        function r(e) {
            e.preventDefault();
            const t = document.activeElement === e.target,
                i = document.querySelector(e.target.hash),
                s = "instant";
            t
                ? this.once(n.ANIMATION_EVTS.CLOSE_COMPLETE, () => {
                      this.options.btnOpen && this.options.btnOpen.focus(), i.scrollIntoView({ behavior: s });
                  })
                : i.scrollIntoView({ behavior: s });
        }
        t.default = {
            beforeCreate() {
                (this._footnoteLinks = []), (this.model.Close.Selector = `${this.model.Close.Selector}, ${n.SOSUMI_FOOTNOTE_LINK_SELECTOR}`), (this._onSosumiFootnoteLinkClick = r.bind(this));
            },
            created() {
                this._footnoteLinks = Array.from(this.elements.content.querySelectorAll(`${n.SOSUMI_FOOTNOTE_LINK_SELECTOR}`));
            },
            mounted() {
                (this.options.btnOpen && 1 === this.options.btnOpen.nodeType) || s.DevLogger.error(`option.btnOpen is required at modal instantiation; modal affected ${this.elements.container}`);
                for (const e of this._footnoteLinks) (e.ariaLabel = `${e.ariaLabel}, ${this.elements.closeButton.ariaLabel}`), e.addEventListener("click", this._onSosumiFootnoteLinkClick);
            },
            destroy() {
                for (const e of this._footnoteLinks) e.removeEventListener("click", this._onSosumiFootnoteLinkClick);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(1)),
            r = s(i(3)),
            a = s(i(113)),
            o = i(21),
            l = i(16),
            h = i(7),
            d = s(i(275)),
            c = (function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                var i = m(t);
                if (i && i.has(e)) return i.get(e);
                var s = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        a && (a.get || a.set) ? Object.defineProperty(s, r, a) : (s[r] = e[r]);
                    }
                return (s.default = e), i && i.set(e, s), s;
            })(i(46)),
            u = i(49);
        function m(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
                i = new WeakMap();
            return (m = function (e) {
                return e ? i : t;
            })(e);
        }
        const p = "vp-valid",
            f = "not-small-desktop",
            _ = "single-breakpoint",
            g = "text-zoom-off",
            E = { [p]: "invalid-viewport", [f]: "small-desktop", [_]: "breakpoint-changed", [g]: "text-zoom" };
        class y extends r.default {
            static IS_SUPPORTED() {
                return !0;
            }
            constructor(e) {
                super(e), (this.scrollGroupPromises = []), (this.defaultEnhancedViewports = e.viewports || u.ENHANCED_VIEWPORTS), (this.disableViewports = e.disableViewports), document.documentElement.classList.add(p, f, _, g);
            }
            get logger() {
                return l.DevLogger;
            }
            mounted() {
                this._setupTextZoom(), this.disableViewports || this._setUnenhanceViewports();
            }
            onBreakpointChange() {
                c.isSmallOnDesktop() && this._unenhanceFeature(f), this._unenhanceFeature(_);
            }
            isEnhanced() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.FEATURE_ENHANCED;
                return document.documentElement.classList.contains(e);
            }
            _setupTextZoom() {
                (this._textZoomDetect = new d.default()),
                    this._textZoomDetect.on(h.EVT_TEXT_ZOOM, () => {
                        this._unenhanceFeature(g);
                    });
            }
            _setUnenhanceViewports() {
                c.isSmallOnDesktop() && this._unenhanceFeature(f),
                    c.setupViewportTracker({ defaultViewports: this.defaultEnhancedViewports }).then(() => {
                        this._unenhanceFeature(p);
                    });
            }
            async _unenhanceFeature(e) {
                const t = window.location.search.includes("enhanced");
                this.isEnhanced(e) &&
                    !t &&
                    (this.logger.log("PageXpController: unenhance: ", e),
                    this.isEnhanced() && ((0, o.setCauseForBase)(E[e]), await c.removeFeatureDetectClass(h.FEATURE_ENHANCED), this.anim.trigger(h.EVT_UNENHANCE), await this._cleanupKeyframes(), (0, o.trackPageState)()),
                    await c.removeFeatureDetectClass(e),
                    this.anim.trigger(h.EVT_UNENHANCE_FEATURE, e),
                    new a.default(),
                    (0, n.default)(() => {
                        this.anim.forceUpdate();
                    }));
            }
            _cleanupKeyframes() {
                return Promise.all(this.scrollGroupPromises)
                    .then(() => {
                        this.anim.forceUpdate();
                    })
                    .catch(() => {});
            }
        }
        t.default = y;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(6)),
            r = i(7);
        class a extends n.default {
            constructor(e) {
                super(e), (this._onTextZoomResize = this._onTextZoomResize.bind(this)), this._setupTextZoom();
            }
            _setupTextZoom() {
                (this._textZoomResolver = null),
                    (this._textZoomPromise = new Promise((e, t) => {
                        this._textZoomResolver = e;
                    })),
                    this._textZoomPromise.then(() => {
                        this.trigger(r.EVT_TEXT_ZOOM), this._removeTextZoomListener();
                    }),
                    this._applyTextZoomListener();
            }
            _applyTextZoomListener() {
                document.documentElement.classList.contains("text-zoom") ? this._textZoomResolver() : window.addEventListener("resize:text-zoom", this._onTextZoomResize);
            }
            _removeTextZoomListener() {
                window.removeEventListener("resize:text-zoom", this._onTextZoomResize);
            }
            _onTextZoomResize(e) {
                e.detail.originalSize < e.detail.currentSize && this._textZoomResolver();
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(3));
        const r = i(52),
            a = i(277),
            o = i(278),
            l = i(279),
            h = i(280),
            d = i(137),
            c = i(93),
            u = i(138),
            m = i(90),
            p = i(81),
            f = i(54);
        class _ extends n.default {
            constructor(e) {
                super(e), (this._els = { gallery: this.el });
            }
            mounted() {
                this._setupGallery(), this.addKeyframe({ start: "t - 100vh", end: "b + 100vh", cssClass: "will-change", toggle: !0 });
            }
            _setupGallery() {
                const e = {
                        beforeCreate() {
                            (this.model.PrefersReducedMotion = document.documentElement.classList.contains("reduced-motion")),
                                (this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir")),
                                (this.model.IsTouch = "ontouchstart" in document.documentElement),
                                (this.model.duration = 0.5),
                                (this.model.gum = this.gum),
                                (this.model.startIndex = 0);
                        },
                        mounted() {
                            this.trigger("gallery-mounted");
                        },
                    },
                    t = r.withMixins(e, f, h, u, c, m, a, o, l, d);
                var i;
                (i = t),
                    ["itemsCreated", "onItemChangeCompleted"].forEach((e) => {
                        const t = i.prototype[`__${e}`].indexOf(p[e]);
                        i.prototype[`__${e}`].splice(t, 1);
                    });
                const s = this._els.gallery;
                (this._gallery = new t({ el: s })),
                    this._gallery.once("gallery-mounted", () => {
                        this.addDiscreteEvent({
                            start: "css(--photos-slide-gallery-build-trigger)",
                            onEventOnce: () => {
                                this._gallery.trigger("build-in-gallery");
                            },
                            disabledWhen: "no-enhanced",
                        });
                    });
            }
        }
        t.default = _;
    },
    function (e, t, i) {
        "use strict";
        const s = (e, t) => {
            t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
        };
        e.exports = {
            mounted() {
                (this.captions = Array.from(this.el.querySelectorAll(".card-caption"))),
                    this.captions.length &&
                        this.captions.forEach((e, t) => {
                            t !== this.currentIndex && s(e, !0);
                        });
            },
            onItemChangeCompleted(e) {
                this.captions.length && (e.previous && s(this.captions[e.previous.index], !0), e.current && s(this.captions[e.current.index], !1));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(17),
            n = s.browser.safari && s.browser.version.major <= 14;
        e.exports = {
            mounted() {
                (this.scrollContainer = this.el.querySelector(".scroll-container")),
                    (this.itemContainer = this.el.querySelector(".item-container")),
                    (this.onScroll = this.onScroll.bind(this)),
                    (this.setCurrentIndex = this.setCurrentIndex.bind(this)),
                    (this.cacheSizeInfo = this.cacheSizeInfo.bind(this)),
                    (this.dir = this.model.IsRTL ? -1 : 1),
                    this.cacheSizeInfo(),
                    this.model.startIndex && (this.scrollContainer.scrollLeft = this.itemOffsets[this.model.startIndex]),
                    this.setCurrentIndex(),
                    this.scrollContainer.addEventListener("scroll", this.onScroll);
            },
            debounceScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                clearTimeout(this.timer), (this.timer = setTimeout(this.setCurrentIndex, e));
            },
            onScroll(e) {
                (this.lastInteractionEvent = { type: "swipe", target: e.target, srcElement: e.srcElement }), this.debounceScroll();
            },
            closest: (e, t) =>
                t.reduce((t, i) => {
                    const s = Math.abs(t - e),
                        n = Math.abs(i - e);
                    return s === n ? (t > i ? t : i) : n < s ? i : t;
                }),
            setCurrentIndex() {
                const e = this.closest(this.scrollContainer.scrollLeft, this.itemOffsets),
                    t = this.itemOffsets.findIndex((t) => t === e);
                if (t === this.currentIndex) return;
                this.currentIndex = t;
                const i = this._items[this.currentIndex];
                this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: i }), this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: i });
            },
            animateToItem(e) {
                if (this.galleryTl) return;
                if (this.scrollContainer.scrollLeft === this.scrollWidth && e > this.currentIndex) return;
                const t = this._items[e];
                this.scrollContainer.removeEventListener("scroll", this.onScroll), this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: t });
                const i = this.scrollContainer.scrollLeft,
                    s = this.itemOffsets[e];
                if (void 0 === s) return;
                const r = () => {
                        n || (this.scrollContainer.style["scroll-snap-type"] = "none");
                    },
                    a = () => {
                        (this.currentIndex = e),
                            n || (this.scrollContainer.style["scroll-snap-type"] = "x mandatory"),
                            this.scrollContainer.addEventListener("scroll", this.onScroll),
                            this.galleryTl && this.galleryTl.remove().then(() => (this.galleryTl = null)),
                            this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: t });
                    };
                if (this.model.PrefersReducedMotion) return r(), (this.scrollContainer.scrollLeft = s), void a();
                (this.galleryTl = this.anim.createTimeGroup(this.itemContainer)),
                    (this.kf = this.galleryTl.addKeyframe(this.scrollContainer, { start: 0, end: this.model.duration, scrollLeft: [i, s], easeFunction: "easeInOutQuad" })),
                    this.galleryTl.addEvent(this.scrollContainer, {
                        start: 0,
                        onEvent: () => {
                            r();
                        },
                    }),
                    this.galleryTl.addEvent(this.scrollContainer, {
                        start: this.galleryTl.duration,
                        onEvent: () => {
                            a();
                        },
                    }),
                    this.galleryTl.play();
            },
            cacheSizeInfo() {
                const e = getComputedStyle(this.itemContainer);
                (this.contentWidth = parseFloat(e.width)),
                    (this.contentPadding = parseFloat(e.paddingInlineStart)),
                    (this.scrollWidth = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth),
                    (this.scrollContainerWidth = this.scrollContainer.offsetWidth),
                    (this.itemOffsets = []);
                let t = 0;
                this._items.forEach((e, i) => {
                    let s;
                    0 === i && (t = e.el.offsetLeft);
                    if ("center" === getComputedStyle(e.el).scrollSnapAlign) {
                        const t = e.el.offsetWidth / 2;
                        s = Math.floor(e.el.offsetLeft - this.scrollContainerWidth / 2 + t);
                    } else s = Math.floor(e.el.offsetLeft - t);
                    (e._offset = s * this.dir), this.itemOffsets.push(s * this.dir);
                });
            },
            onResizeImmediate() {
                this.scrollContainer.removeEventListener("scroll", this.onScroll);
            },
            onResizeDebounced() {
                this.scrollContainer.addEventListener("scroll", this.onScroll);
            },
            onBreakpointChange() {
                requestAnimationFrame(() => {
                    this.cacheSizeInfo(), (this.scrollContainer.scrollLeft = this.itemOffsets[this.currentIndex]);
                });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const { EVT_UNENHANCE: s } = i(7),
            n = i(7).FEATURE_ENHANCED,
            r = `no-${n}`;
        e.exports = {
            mounted() {
                (this.scrollContainer = this.el.querySelector(".scroll-container")),
                    (this.itemContainer = this.el.querySelector(".item-container")),
                    (this.paddlenav = this.el.querySelector(".paddlenav")),
                    (this.withCaptions = this.el.classList.contains("with-captions")),
                    this.withCaptions && (this.captions = this.el.querySelectorAll(".card-caption")),
                    (this.isEnhanced = document.documentElement.classList.contains(n)),
                    (this.isRTL = "rtl" === document.documentElement.getAttribute("dir")),
                    (this.galleryScrollGroup = this.anim.createScrollGroup(this.scrollContainer, { getPosition: () => this.scrollContainer.scrollLeft, getMaxPosition: () => this.scrollContainer.scrollWidth })),
                    this.scrollContainer.addEventListener("scroll", () => {
                        this.galleryScrollGroup.updateTimeline();
                    }),
                    this._items.forEach((e) => {
                        e.cardEl = e.el.querySelector(".card-item");
                    }),
                    this.generateXPositionKeyframes(),
                    this.isEnhanced ? this.generateBuildInKeyframes() : this.generateOpacityScaleKeyframes(),
                    (this._onUnenhancePageXp = this._onUnenhancePageXp.bind(this)),
                    this.anim.once(s, this._onUnenhancePageXp);
            },
            generateOpacityScaleKeyframes() {
                const e = this._items.length;
                this._items.forEach((t, i) => {
                    i < e - 1 &&
                        (0 === i && this.isRTL
                            ? this.galleryScrollGroup.addKeyframe(t.cardEl, { start: "a2l - 50a1w + 50a2w", end: "l - 50a1w + 50w", opacity: [0.3, 1], anchors: [this.itemContainer, this.scrollContainer, this._items[i + 1].el] })
                            : this.galleryScrollGroup.addKeyframe(t.cardEl, {
                                  start: "l - 50a1w + 50w",
                                  end: "l - 50a1w + w + 50a2w + css(row-gap, a0)",
                                  opacity: [1, 0.3],
                                  anchors: [this.itemContainer, this.scrollContainer, this._items[i + 1].el],
                              }),
                        this.withCaptions &&
                            (0 === i && this.isRTL
                                ? this.galleryScrollGroup.addKeyframe(this.captions[i], { start: "a1l - 50a0w + 50a1w - 25a1w", end: "a1l - 50a0w + 50a1w", opacity: [0, 1], anchors: [this.scrollContainer, t.el] })
                                : this.galleryScrollGroup.addKeyframe(this.captions[i], { start: "a1l - 50a0w + 50a1w", end: "a1l - 50a0w + 50a1w + 25a1w", opacity: [1, 0], anchors: [this.scrollContainer, t.el] }))),
                        0 !== i &&
                            (this.isRTL &&
                                this.galleryScrollGroup.addKeyframe(t.cardEl, {
                                    start: "l - 50a1w + 50w",
                                    end: "l - 50a1w + w + 50a2w + css(row-gap, a0)",
                                    scale: [1, "css(--photos-slide-gallery-scale-start, a0)"],
                                    anchors: [this.itemContainer, this.scrollContainer, this._items[i - 1].el],
                                    disabledWhen: [r],
                                }),
                            i === e - 1 && this.isRTL
                                ? this.galleryScrollGroup.addKeyframe(t.cardEl, { start: "l - 50a1w + 50w", end: "a2l - 50a1w + 50a2w", opacity: [1, 0.3], anchors: [this.itemContainer, this.scrollContainer, this._items[i - 1].el] })
                                : this.galleryScrollGroup.addKeyframe(t.cardEl, {
                                      start: "l - 50a1w - 50a2w - css(row-gap, a0)",
                                      end: "l - 50a1w + 50w",
                                      opacity: [0.3, 1],
                                      anchors: [this.itemContainer, this.scrollContainer, this._items[i - 1].el],
                                  }),
                            this.isRTL ||
                                this.galleryScrollGroup.addKeyframe(t.cardEl, {
                                    start: "l - 50a1w - 50a2w - css(row-gap, a0)",
                                    end: "l - 50a1w + 50w",
                                    scale: ["css(--photos-slide-gallery-scale-start, a0)", 1],
                                    anchors: [this.itemContainer, this.scrollContainer, this._items[i - 1].el],
                                    disabledWhen: [r],
                                }),
                            this.withCaptions &&
                                (i === e - 1 && this.isRTL
                                    ? this.galleryScrollGroup.addKeyframe(this.captions[i], { start: "a1l - 50a0w + 50a1w", end: "a1l - 50a0w + 50a1w + 25a1w", opacity: [1, 0], anchors: [this.scrollContainer, t.el] })
                                    : this.galleryScrollGroup.addKeyframe(this.captions[i], { start: "a1l - 50a0w + 50a1w - 25a1w", end: "a1l - 50a0w + 50a1w", opacity: [0, 1], anchors: [this.scrollContainer, t.el] })));
                });
            },
            generateXPositionKeyframes() {
                (this.anchors = [this.itemContainer, this.scrollContainer]),
                    this._items.forEach((e) => {
                        this.anchors.push(e.cardEl);
                    }),
                    (this.xPositions = []),
                    this._items.forEach((e, t) => {
                        if (t > 1) {
                            const i = [0];
                            for (let e = t; e > 1; e--) {
                                let s = "((";
                                for (let i = t - 1, n = 0; n < i; n++) {
                                    let r = 0;
                                    n <= t - e && (r = 1), (s += `css(--card-width, a${t + 1 - n}) * ${r}`), n !== i - 1 && (s += " + ");
                                }
                                (s += ") * (1 - css(--photos-slide-gallery-scale-start, a0))) * " + (this.isRTL ? 1 : -1)), i.push(s);
                            }
                            if ((this.xPositions.push(i), !this.isRTL))
                                for (let s = t; s > 1; s--) {
                                    const n = `a${s + 1}l - 50a1w - 50a${s}w - css(row-gap, a0)`,
                                        a = `a${s + 2}l - 50a1w - 50a${s + 1}w - css(row-gap, a0)`,
                                        o = [i[t - s + 1], i[t - s]];
                                    this.galleryScrollGroup.addKeyframe(e.cardEl, { start: n, end: a, x: o, anchors: this.anchors, disabledWhen: [r] });
                                }
                            if (this.isRTL)
                                for (let s = t; s > 1; s--) {
                                    const n = `a${s + 1}l - 50a1w + 50a${s + 1}w`,
                                        a = `a${s}l - 50a1w + 50a${s}w`,
                                        o = [i[t - s], i[t - s + 1]];
                                    this.galleryScrollGroup.addKeyframe(e.cardEl, { start: n, end: a, x: o, anchors: this.anchors, disabledWhen: [r] });
                                }
                        }
                    });
            },
            generateBuildInKeyframes() {
                (this.buildInTimeline = this.anim.createTimeGroup(this.el)),
                    this._items.forEach((e, t) => {
                        const i = this._items.length - t;
                        if (((e.el.style.zIndex = i), t === this.model.startIndex)) return;
                        let s = 0;
                        t > 1 && (s = this.xPositions[t - 2][this.xPositions[t - 2].length - 1]);
                        const n = this.anchors.length - 1;
                        let r = `(a${n + 1}l - l + (a${n + 1}w - w)) - abs(${s})}`;
                        t > this.model.startIndex &&
                            (r = `(a${n + 1}r - r - (a${n + 1}w - w)) ${this.isRTL ? "-" : "+"} abs(${s}) + 50a${n + 1}w * (1 - css(--photos-slide-gallery-scale-start, a${n + 2})) - (${
                                this.isRTL ? "50w" : `w - a${n + 1}w`
                            }) * css(--photos-slide-gallery-scale-start, a${n + 2})`),
                            this.buildInTimeline.addKeyframe(e.el, { start: 0, end: 1.5, x: [r, 0], easeFunction: "easeOutQuad", anchors: [...this.anchors, this._items[this.model.startIndex].el, this.itemContainer], preserveState: !0 }),
                            this.buildInTimeline.addKeyframe(e.cardEl, {
                                start: 0,
                                end: 1.5,
                                scale: ["css(--photos-slide-gallery-scale-start, a0) - 0.05", "css(--photos-slide-gallery-scale-start, a0)"],
                                anchors: [this.itemContainer],
                                preserveState: !0,
                            }),
                            this.buildInTimeline.addKeyframe(e.cardEl, { start: 1.2, end: 1.5, opacity: [1, 0.3], preserveState: !0 });
                    }),
                    this.buildInTimeline.addKeyframe(this._items[this.model.startIndex].el, {
                        start: 0,
                        end: 1.5,
                        scale: ["css(--photos-slide-gallery-scale-start, a0)", 1],
                        easeFunction: "easeOutQuad",
                        anchors: [this.itemContainer],
                        preserveState: !0,
                    }),
                    this.withCaptions && this.buildInTimeline.addKeyframe(this.captions[this.model.startIndex], { start: 1.2, end: 1.5, opacity: [0, 1], preserveState: !0 }),
                    this.buildInTimeline.addKeyframe(this.paddlenav, { start: 1.2, cssClass: "show", preserveState: !0 }),
                    this.buildInTimeline.addEvent(this._items[0].el, {
                        start: this.buildInTimeline.duration,
                        onEvent: () => {
                            this._destroyBuildIn();
                        },
                    }),
                    this.on("build-in-gallery", () => {
                        this.isEnhanced &&
                            ((this.scrollContainer.style["scroll-snap-type"] = "none"),
                            (this.scrollContainer.style.overflow = "hidden"),
                            requestAnimationFrame(() => {
                                this.buildInTimeline.play();
                            }));
                    });
            },
            _destroyBuildIn() {
                (this.scrollContainer.style["scroll-snap-type"] = "x mandatory"),
                    (this.scrollContainer.style.overflow = null),
                    !this.isEnhanced &&
                        this.buildInTimeline.keyframeControllers &&
                        this.buildInTimeline.keyframeControllers.forEach((e) => {
                            e._activeKeyframes.forEach((e) => {
                                e.overwriteProps({ preserveState: !1 });
                            });
                        }),
                    this.buildInTimeline.remove(),
                    this._items.forEach((e) => {
                        e.el.style.zIndex = null;
                    }),
                    requestAnimationFrame(() => {
                        this.generateOpacityScaleKeyframes();
                    });
            },
            _onUnenhancePageXp() {
                (this.isEnhanced = !1), this.buildInTimeline && this._destroyBuildIn();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = (e, t) => {
            t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true");
        };
        e.exports = {
            mounted() {
                const e = this.el.querySelector(this.model.PaddleNav.Selector),
                    t = this.el.querySelector(".scroll-container");
                (this.paddleNav = { previousEl: e.querySelector(".paddlenav-arrow-previous"), nextEl: e.querySelector(".paddlenav-arrow-next"), scrollContainer: t }),
                    (this.onPaddleNavSelected = this.onPaddleNavSelected.bind(this)),
                    [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e) => {
                        e.addEventListener("click", this.onPaddleNavSelected);
                    }),
                    (this.checkScrollPosition = this.checkScrollPosition.bind(this));
            },
            destroy() {
                [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e) => {
                    e.removeEventListener("click", this.onPaddleNavSelected);
                }),
                    (this.paddleNav = null);
            },
            checkScrollPosition() {
                let e = !0,
                    t = !0;
                0 === this.currentIndex && (t = !1), this.currentIndex === this._items.length - 1 && (e = !1), s(this.paddleNav.nextEl, e), s(this.paddleNav.previousEl, t);
            },
            onPaddleNavSelected(e) {
                const t = e.currentTarget.className.includes("previous") ? -1 : 1;
                this.lastInteractionEvent = e;
                const i = this.currentIndex + 1 * t;
                this.animateToItem(i);
            },
            onItemChangeCompleted() {
                this.checkScrollPosition();
            },
            onResizeDebounced() {
                this.checkScrollPosition();
            },
            onBreakpointChange() {
                requestAnimationFrame(() => {
                    setTimeout(this.checkScrollPosition, 100);
                });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = i(25),
            r = s(i(3));
        class a extends r.default {
            static IS_SUPPORTED() {
                return !0;
            }
            constructor(e) {
                super(e),
                    (this._gridRowConfig = {
                        badge: { var: "--badge-height", cells: [], maxHeight: void 0 },
                        headline: { var: "--headline-height", cells: [], maxHeight: void 0 },
                        subheading: { var: "--subheading-height", cells: [], maxHeight: void 0 },
                    }),
                    (this._gridColumns = null),
                    (this._context = null),
                    (this._plusGrids = null),
                    (this._plusGridRowMax = null);
            }
            mounted() {
                this._getEls(), this._determineContext(), this._findMaxPlusRows(), this._configurePlusRows(), this._equalize();
            }
            _getEls() {
                (this._gridColumns = this.el.querySelectorAll("[data-grid-column]")),
                    (this._gridRowConfig.badge.cells = this.el.querySelectorAll("[data-grid-row-badge]")),
                    (this._gridRowConfig.headline.cells = this.el.querySelectorAll("[data-grid-row-headline]")),
                    (this._gridRowConfig.subheading.cells = this.el.querySelectorAll("[data-grid-row-subheading]")),
                    (this._plusGrids = this.el.querySelectorAll("[data-grid-plus]"));
            }
            _determineContext() {
                this._context = getComputedStyle(this.el).getPropertyValue("--context");
            }
            _findMaxPlusRows() {
                const e = [];
                [...this._plusGrids].forEach((t) => {
                    e.push(t.children.length);
                }),
                    (this._plusGridRowMax = Math.max(...e));
            }
            _configurePlusRows() {
                for (let e = 1; e < this._plusGridRowMax + 1; e++)
                    (this._gridRowConfig[`plus-row-${e}`] = {}),
                        (this._gridRowConfig[`plus-row-${e}`].cells = this.el.querySelectorAll(`[data-grid-row-${e}]`)),
                        (this._gridRowConfig[`plus-row-${e}`].var = `--plus-row-${e}-height`),
                        (this._gridRowConfig[`plus-row-${e}`].maxHeight = void 0);
            }
            _getMaxRowHeights() {
                Object.values(this._gridRowConfig).forEach((e) => {
                    const t = [];
                    e.cells.forEach((e) => {
                        t.push(Math.ceil(e.getBoundingClientRect().height));
                    }),
                        t.length > 0 ? (e.maxHeight = Math.max(...t)) : (e.maxHeight = 0);
                });
            }
            _unsetMaxRowHeights() {
                this._gridColumns.forEach((e) => {
                    Object.values(this._gridRowConfig).forEach((t) => {
                        e.style.setProperty(`${t.var}`, "auto");
                    });
                });
            }
            _setMaxRowHeights() {
                this._gridColumns.forEach((e) => {
                    for (const [t, i] of Object.entries(this._gridRowConfig)) t.startsWith("plus-row-") ? e.style.setProperty(`${i.var}`, `minmax(${i.maxHeight}px, max-content)`) : e.style.setProperty(`${i.var}`, `${i.maxHeight}px`);
                });
            }
            onBreakpointChange() {
                this._equalize();
            }
            onResizeDebounced(e) {
                "S" === e.breakpoint && "contrast" === this._context && this._equalize();
            }
            _equalize() {
                (0, n.draw)(() => {
                    this._unsetMaxRowHeights(), this._getMaxRowHeights(), this._setMaxRowHeights();
                }),
                    this.anim.forceUpdate();
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(23)),
            r = i(18);
        class a extends n.default {
            static IS_SUPPORTED() {
                return document.documentElement.classList.contains("ar-quicklook");
            }
            constructor(e) {
                super(e),
                    (this._anchorEl = this.el.querySelector('a[rel="ar"]')),
                    (this._anchorLabel = this._anchorEl.querySelector("span").textContent.trim()),
                    (this._data = this._anchorEl.dataset),
                    (this._optionMap = JSON.parse(this._data.urlOptionMap)),
                    (this._defaultAriaLabel = this._anchorEl.ariaLabel),
                    (this._defaultAcaClick = this._data.analyticsClick),
                    (this._defaultAcaTitle = this._data.analyticsTitle),
                    (this.rtViewerEl = document.querySelector(".rt-viewer")),
                    (this.viewerUseStandardGallery = "true" === this.rtViewerEl.dataset.useStandardGallery),
                    (this._color = ""),
                    (this._size = ""),
                    (this._onAapColorChanged = this._onAapColorChanged.bind(this)),
                    (this._onAapSizeChanged = this._onAapSizeChanged.bind(this)),
                    this._anchorEl.addEventListener("click", () => {
                        this.anim.trigger(r.EVT_RT_VIEWER_QL_TRIGGERED);
                    });
            }
            onUnenhance() {
                this.viewerUseStandardGallery &&
                    (this._anchorEl.setAttribute("href", this._data.defaultPath),
                    this._anchorEl.setAttribute("aria-label", this._defaultAriaLabel),
                    this._anchorEl.setAttribute("data-analytics-title", this._defaultAcaTitle),
                    this._anchorEl.setAttribute("data-analytics-click", this._defaultAcaClick),
                    this._removeAAPEvents());
            }
            mounted() {
                if (!this._data.aapId) throw Error(`no aap id supplied: ${this.el}`);
                this._addAAPEvents();
            }
            _addAAPEvents() {
                this.anim.on(r.EVT_AAP_COLOR_CHANGED, this._onAapColorChanged), this.anim.on(r.EVT_AAP_SIZE_CHANGED, this._onAapSizeChanged);
            }
            _removeAAPEvents() {
                this.anim.off(r.EVT_AAP_COLOR_CHANGED, this._onAapColorChanged), this.anim.off(r.EVT_AAP_SIZE_CHANGED, this._onAapSizeChanged);
            }
            _onAapColorChanged(e) {
                (this._color = e.color), this._updateTargetPath();
            }
            _onAapSizeChanged(e) {
                const t = document.documentElement.classList.contains(r.RT_VIEWER_FEATURE_DETECT) ? e.size : "base";
                (this._size = t), this._updateTargetPath();
            }
            _updateTargetPath() {
                if ("" === this._color || "" === this._size) return;
                const e = this._optionMap[this._size][this._color];
                if (!e) return;
                const { urlRoot: t, urlProduct: i } = this._data;
                (this._anchorEl.href = `${t}/${i}/${e.model}`),
                    this._anchorEl.setAttribute("aria-label", e.ariaLabel),
                    this._anchorEl.setAttribute("data-analytics-title", e.acaTitle),
                    this._anchorEl.setAttribute("data-analytics-click", e.acaClick);
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(23)),
            r = i(18),
            a = i(21),
            o = i(284);
        class l extends n.default {
            static IS_SUPPORTED() {
                return document.documentElement.classList.contains(r.RT_VIEWER_FEATURE_DETECT);
            }
            constructor(e) {
                super(e),
                    (this.onLoadTimeout = this.onLoadTimeout.bind(this)),
                    (this.onAapColorChanged = this.onAapColorChanged.bind(this)),
                    (this.onAapSizeChanged = this.onAapSizeChanged.bind(this)),
                    (this.onViewerReady = this.onViewerReady.bind(this)),
                    (this.onViewerTriggerLoad = this.onViewerTriggerLoad.bind(this)),
                    (this.onViewerTriggerDestroy = this.onViewerTriggerDestroy.bind(this)),
                    (this.onViewerError = this.onViewerError.bind(this)),
                    (this.mainElm = document.querySelector("main")),
                    this.el.addEventListener("click", () => {
                        this.hasInteracted = !0;
                    }),
                    (this.isLoading = !1),
                    (this.rtvIsReady = !1),
                    (this.loaderTimeout = parseInt(this.el.dataset.rtLoaderTimeout, 10) || 3e4),
                    this.anim.on(r.EVT_RT_VIEWER_TRIGGER_LOAD, this.onViewerTriggerLoad),
                    this.anim.on(r.EVT_RT_VIEWER_ESCAPE, this.onViewerError),
                    this.anim.on(r.EVT_RT_VIEWER_READY, this.onViewerReady),
                    this.anim.on(r.EVT_RT_VIEWER_TRIGGER_DESTROY, this.onViewerTriggerDestroy),
                    this.anim.on(r.EVT_RT_VIEWER_QL_TRIGGERED, () => {
                        this.stopLoadTimer();
                    }),
                    (this.onViewerAnimationStart = this.onViewerAnimationStart.bind(this)),
                    (this.onViewerAnimationUpdate = this.onViewerAnimationUpdate.bind(this)),
                    (this.onViewerAnimationEnded = this.onViewerAnimationEnded.bind(this));
            }
            _addAnimationEvents() {
                this.anim.on(r.EVT_RT_VIEWER_ANIMATION_START, this.onViewerAnimationStart),
                    this.anim.on(r.EVT_RT_VIEWER_ANIMATION_UPDATE, this.onViewerAnimationUpdate),
                    this.anim.on(r.EVT_RT_VIEWER_ANIMATION_ENDED, this.onViewerAnimationEnded);
            }
            _removeAnimationEvents() {
                this.anim.off(r.EVT_RT_VIEWER_ANIMATION_START, this.onViewerAnimationStart),
                    this.anim.off(r.EVT_RT_VIEWER_ANIMATION_UPDATE, this.onViewerAnimationUpdate),
                    this.anim.off(r.EVT_RT_VIEWER_ANIMATION_ENDED, this.onViewerAnimationEnded);
            }
            _addAAPEvents() {
                this.anim.on(r.EVT_AAP_COLOR_CHANGED, this.onAapColorChanged), this.anim.on(r.EVT_AAP_SIZE_CHANGED, this.onAapSizeChanged);
            }
            _removeAAPEvents() {
                this.anim.off(r.EVT_AAP_COLOR_CHANGED, this.onAapColorChanged), this.anim.off(r.EVT_AAP_SIZE_CHANGED, this.onAapSizeChanged);
            }
            mounted() {
                const e = parseInt(this.el.dataset.rtLoadAsapTimeout || 0, 10),
                    t = Object.assign(
                        {},
                        { start: "a0t - 100vh", anchors: ["html"] },
                        {
                            event: "viewer:load:asap",
                            onEventOnce: () => {
                                this.loadKfTimeoutHandler = setTimeout(() => {
                                    this.asapScrollKeyframe && !this.asapScrollKeyframe.destroyed && this.asapScrollKeyframe.remove(), this.loadProductViewer();
                                }, e);
                            },
                            disabledWhen: [`no-${r.RT_VIEWER_FEATURE_DETECT}`],
                        }
                    );
                this.asapKeyframe = this.anim.addEvent(this.el, t);
                const i = Object.assign(
                    {},
                    { start: "a0t + 10px", anchors: ["html"] },
                    {
                        event: "viewer:load:asap:immediateScroll",
                        onEventOnce: () => {
                            clearTimeout(this.loadKfTimeoutHandler), this.loadProductViewer();
                        },
                        disabledWhen: [`no-${r.RT_VIEWER_FEATURE_DETECT}`],
                    }
                );
                this.asapScrollKeyframe = this.anim.addEvent(this.el, i);
                const s = {
                    start: "a0t + a0h + 100vh",
                    anchors: ["[data-rt-viewer-id]"],
                    event: "viewer:exit",
                    onEventOnce: () => {
                        this.isLoading && this.anim.trigger(r.EVT_RT_VIEWER_ESCAPE, { causeForBase: "scrolled past" });
                    },
                    disabledWhen: [`no-${r.RT_VIEWER_FEATURE_DETECT}`],
                };
                this.exitLoadingKeyframe = this.addDiscreteEvent(s);
            }
            loadProductViewer() {
                (this.isLoading = !0), this.startLoadTimer(), this._addAnimationEvents(), o.ProductViewerWebGLSingleton.created(), o.ProductViewerWebGLSingleton.onCreate();
            }
            onUnenhance() {
                this.onViewerTriggerDestroy();
            }
            startLoadTimer() {
                this.stopLoadTimer(), (this._fallbackTimer = setTimeout(this.onLoadTimeout, this.loaderTimeout));
            }
            stopLoadTimer() {
                clearTimeout(this._fallbackTimer);
            }
            onLoadTimeout() {
                window.location.search.includes("no-timeout") || this.anim.trigger(r.EVT_RT_VIEWER_ESCAPE, { causeForBase: "loading timeout" });
            }
            onAapColorChanged(e) {
                const { color: t } = e;
                o.ProductViewerWebGLSingleton.scene.stopHintTimeout(), o.ProductViewerWebGLSingleton.onColorChange(t);
            }
            onAapSizeChanged(e) {
                const { size: t } = e;
                o.ProductViewerWebGLSingleton.scene.stopHintTimeout(), o.ProductViewerWebGLSingleton.onSizeChange(t, 1e3);
            }
            onViewerAnimationStart(e) {}
            onViewerAnimationUpdate(e) {}
            onViewerAnimationEnded(e) {
                "intro" === e.animation &&
                    (o.ProductViewerWebGLSingleton.scene.isInteracted ||
                        requestAnimationFrame(() => {
                            o.ProductViewerWebGLSingleton.scene.startHintTimeout();
                        }));
            }
            onViewerReady() {
                (this.isLoading = !1), (this.rtvIsReady = !0), this.stopLoadTimer(), this._addAAPEvents(), (0, a.trackViewerState)();
            }
            onViewerError(e) {
                e && e.causeForBase && (0, a.setCauseForViewerBase)(e.causeForBase), this.onViewerTriggerDestroy();
            }
            onViewerTriggerLoad() {
                this.loadProductViewer();
            }
            onViewerTriggerDestroy() {
                (this.isLoading = !1), (this.rtvIsReady = !1), this.stopLoadTimer(), this._removeAnimationEvents(), this._removeAAPEvents(), o.ProductViewerWebGLSingleton.destroy();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ProductViewerWebGLSingleton = t.ProductViewerWebGL = void 0);
        var n = s(i(40)),
            r = i(18);
        const a = i(285),
            o = i(17),
            l = "gallery--loading",
            h = "gallery--cached";
        class d {
            static IS_SUPPORTED() {
                return !0;
            }
            createPromise() {
                let e, t;
                const i = new Promise((i, s) => {
                    (e = i), (t = s);
                });
                return (i.resolve = e), (i.reject = t), i;
            }
            created() {
                this.createElements(), this.createLoader(), (this.lotusScript = this.createPromise()), (this.lotusInstance = this.createPromise());
            }
            createElements() {
                if (
                    ((this.gallery = document.querySelector("[data-rt-viewer-id]")),
                    (this.element = this.gallery.querySelector(".product-viewer-canvas")),
                    (this.loader = this.gallery.querySelector(".loader")),
                    (this.loaderIndicator = this.gallery.querySelector(".loader-progress-indicator")),
                    (this.loaderPreview = this.gallery.querySelector(".preview-image")),
                    (this.sceneData = this.gallery.dataset || {}),
                    (this.DEFAULT_SIZE = this.sceneData.rtDefaultSize || "small"),
                    (this.DEFAULT_COLOR = this.sceneData.rtDefaultColor || "DarkBlue"),
                    !this.sceneData.rtPath)
                )
                    throw Error("data-rt-path is required");
                (this.DEFAULT_PATH = this.sceneData.rtPath), (this.SCENES = JSON.parse(this.sceneData.rtScenes)), (this.DURATIONS = JSON.parse(this.sceneData.rtDuration)), (this.PARTS = JSON.parse(this.sceneData.rtParts || {}));
            }
            async createLotusScript() {
                if (this.isLotusScriptCreated) return;
                this.isLotusScriptCreated = !0;
                const e = (e) =>
                    new Promise((t) => {
                        const i = document.createElement("script");
                        (i.src = `${this.DEFAULT_PATH}/scripts/${e}`), (i.onload = () => t()), document.body.append(i);
                    });
                await e("vendors-059be3de.js"), await e("vendors-ce960567.js"), await e("main.js");
                const t = i(306).default;
                let s = this.SCENES.default;
                a.touchAvailable() && (s = window.outerWidth <= 884 ? this.SCENES.small : this.SCENES.large);
                const n = await window.fetch(`${this.DEFAULT_PATH}/scenes/${s}.json`),
                    r = await n.json();
                (this.scenesData = new Map()), this.scenesData.set("ProductViewerScene", r), (this.scenesClasses = new Map()), this.scenesClasses.set("ProductViewerScene", t), this.lotusScript.resolve();
            }
            onCreate() {
                this.createLotusScript(),
                    this.createLotusInstance(),
                    (this.timeout = setTimeout(() => {
                        this.createScene();
                    }, 400));
            }
            createLoader() {
                (this.onProgress = this.onProgress.bind(this)), this.gallery.classList.add(l), this.scenesData ? this.gallery.classList.add(h) : this.loaderIndicator.style.setProperty("--progress", "-100%");
            }
            async createLotusInstance() {
                this.isLotusInstanceCreated ||
                    ((this.isLotusInstanceCreated = !0),
                    await this.lotusScript,
                    (this.lotus = window.Lotus.instance()),
                    (this.lotus.tasks._frameThreshold = 1),
                    this.lotus.settings.initialize({ FeatureDetect: a, UserAgent: o }),
                    (this.lotus.settings.gltfTextureTasks = !0),
                    (this.lotus.settings.pmremCubeFaceSizeLimit = 256),
                    this.lotus.initialize({
                        dependencies: { AnimSystem: n.default },
                        paths: { assets: `${this.DEFAULT_PATH}`, dependencies: `${this.DEFAULT_PATH}/dependencies` },
                        scenesClasses: this.scenesClasses,
                        scenesData: this.scenesData,
                    }),
                    this.lotus.addEventListener("error", () => {
                        n.default.trigger(r.EVT_RT_VIEWER_ESCAPE, { failedToLoad: !0, causeForBase: "failed to load" });
                    }),
                    this.lotus.addEventListener("unsupported", () => {
                        n.default.trigger(r.EVT_RT_VIEWER_ESCAPE, { failedToLoad: !0, causeForBase: "lotus unsupported" });
                    }),
                    this.lotusInstance.resolve());
            }
            async createScene() {
                await this.lotusInstance;
                const e = this.gallery.classList.contains(h);
                (this.scene = await this.lotus.createScene({ element: this.element, id: "ProductViewerScene" })),
                    this.scene &&
                        (e || this.scene.loader.addEventListener("load", this.onProgress),
                        this.scene.frameReady.then(() => {
                            this.lotus.tasks.tasks.forEach((e) => {
                                this.lotus.tasks.resolve(e);
                            }),
                                this.stopLoadTimer && this.stopLoadTimer(),
                                a.touchAvailable() && (this.scene.camera.isMobile = !0),
                                e
                                    ? (this.loaderIndicator.style.setProperty("--progress", "0%"), this.gallery.classList.remove(h))
                                    : (this.scene.loader.removeEventListener("load", this.onProgress), this.loaderIndicator.style.setProperty("--progress", "0%")),
                                Object.keys(this.PARTS).forEach((e) => {
                                    this.scene.state.set("geo" === e ? "sidefire" : e, this.PARTS[e] ? "on" : "off");
                                }),
                                n.default.trigger(r.EVT_RT_VIEWER_READY),
                                (this.hideLoaderTimeout = setTimeout(() => {
                                    this.gallery.classList.remove(l), this.loaderIndicator.style.setProperty("--progress", "-100%");
                                }, 950));
                        }));
            }
            onProgress(e) {
                requestAnimationFrame(() => {
                    this.loaderIndicator.style.setProperty("--progress", `-${100 - e.progress}%`);
                });
            }
            onSizeChange(e) {
                void 0 === this.previousTarget && (this.previousTarget = "large"), e === this.previousTarget && ((this.previousTarget = "large" === e ? "small" : "large"), this.scene.onSizeChange(e));
            }
            onColorChange(e) {
                this.scene.state.set("global", e),
                    setTimeout(() => {
                        this.lotus.tasks.tasks.forEach((e) => {
                            this.lotus.tasks.resolve(e);
                        });
                    }, 800);
            }
            destroy() {
                clearTimeout(this.timeout), clearTimeout(this.hideLoaderTimeout), this.scene && (this.scene.destroy(), (this.scene = void 0));
            }
        }
        t.ProductViewerWebGL = d;
        t.ProductViewerWebGLSingleton = new d();
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            canvasAvailable: i(286),
            continuousScrollEventsAvailable: i(287),
            cookiesAvailable: i(288),
            cssLinearGradientAvailable: i(289),
            cssPropertyAvailable: i(57),
            cssViewportUnitsAvailable: i(290),
            elementAttributeAvailable: i(291),
            eventTypeAvailable: i(292),
            isDesktop: i(95),
            isHandheld: i(297),
            isRetina: i(298),
            isTablet: i(139),
            localStorageAvailable: i(299),
            mediaElementsAvailable: i(300),
            mediaQueriesAvailable: i(301),
            prefersReducedMotion: i(61),
            sessionStorageAvailable: i(302),
            svgAvailable: i(303),
            threeDTransformsAvailable: i(304),
            touchAvailable: i(20),
            webGLAvailable: i(305),
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2),
            r = function () {
                var e = s.getDocument().createElement("canvas");
                return !("function" != typeof e.getContext || !e.getContext("2d"));
            };
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(17),
            n = i(20).original,
            r = i(2);
        function a() {
            return !n() || (s.os.ios && s.os.version.major >= 8) || s.browser.chrome;
        }
        (e.exports = r(a)), (e.exports.original = a);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            var e = !1,
                t = s.getDocument(),
                i = s.getNavigator();
            try {
                "cookie" in t && i.cookieEnabled && ((t.cookie = "ac_feature_cookie=1"), (e = -1 !== t.cookie.indexOf("ac_feature_cookie")), (t.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"));
            } catch (e) {}
            return e;
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(28),
            n = i(2);
        function r() {
            return ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"].some(function (e) {
                return !!s("background-image", e);
            });
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(28),
            n = i(2);
        function r() {
            return !!s("margin", "1vw 1vh");
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(36);
        function r(e, t) {
            return (t = t || "div"), e in s.getDocument().createElement(t);
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(293),
            n = i(36);
        function r(e, t) {
            return !!s(e, t);
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(294),
            n = i(295),
            r = i(296),
            a = i(29),
            o = {};
        e.exports = function e(t, i) {
            var l, h, d;
            if (((i = i || "div"), (t = t.toLowerCase()), i in o || (o[i] = {}), t in (h = o[i]))) return h[t];
            if (s(t, i)) return (h[t] = t);
            if (t in n) for (d = 0; d < n[t].length; d++) if (((l = n[t][d]), s(l.toLowerCase(), i))) return (h[t] = l);
            for (d = 0; d < a.evt.length; d++) if (((l = a.evt[d] + t), s(l, i))) return a.reduce(d), (h[t] = l);
            return "window" !== i && r.indexOf(t) ? (h[t] = e(t, "window")) : (h[t] = !1);
        };
    },
    function (e, t, i) {
        "use strict";
        var s = { window: window, document: document };
        e.exports = function (e, t) {
            var i;
            return (e = "on" + e), t in s || (s[t] = document.createElement(t)), e in (i = s[t]) || ("setAttribute" in i && (i.setAttribute(e, "return;"), "function" == typeof i[e]));
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"],
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = ["transitionend", "animationstart", "animationend", "animationiteration"];
    },
    function (e, t, i) {
        "use strict";
        var s = i(95).original,
            n = i(139).original,
            r = i(2);
        function a() {
            return !s() && !n();
        }
        (e.exports = r(a)), (e.exports.original = a);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5);
        e.exports = function () {
            var e = s.getWindow();
            return "devicePixelRatio" in e && e.devicePixelRatio >= 1.5;
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            var e = s.getWindow(),
                t = !1;
            try {
                t = !(!e.localStorage || null === e.localStorage.non_existent);
            } catch (e) {}
            return t;
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            return "HTMLMediaElement" in s.getWindow();
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            var e = s.getWindow().matchMedia("only all");
            return !(!e || !e.matches);
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            var e = s.getWindow(),
                t = !1;
            try {
                "sessionStorage" in e && "function" == typeof e.sessionStorage.setItem && (e.sessionStorage.setItem("ac_feature", "test"), (t = !0), e.sessionStorage.removeItem("ac_feature", "test"));
            } catch (e) {}
            return t;
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            return !!s.getDocument().implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(28),
            n = i(2);
        function r() {
            return !(!s("perspective", "1px") || !s("transform", "translateZ(0)"));
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(5),
            n = i(2);
        function r() {
            var e = s.getDocument().createElement("canvas");
            return "function" == typeof e.getContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"));
        }
        (e.exports = n(r)), (e.exports.original = r);
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(40)),
            r = i(18),
            a = i(21),
            o = i(307),
            l = i(308);
        const { Lotus: h } = window,
            { CustomScene: d } = h,
            c = "[data-rt-viewer-id]";
        t.default = class extends d {
            async init() {
                h.instance().scripts.initialize({ ObjectTransform: o.ObjectTransform }),
                    super.init(),
                    (this.productViewer = window.document.querySelector(c)),
                    (this.LAYERS = JSON.parse(this.productViewer.dataset.rtLayers)),
                    (this.ANIMATION = JSON.parse(this.productViewer.dataset.rtAnimation));
                const { hint: { interval: e = 1e4 } = {} } = this.ANIMATION;
                (this.HINT_INTERVAL = e),
                    (this.analyticsObject = this.productViewer.dataset.rtAcaInteraction && JSON.parse(this.productViewer.dataset.rtAcaInteraction)),
                    await this.createLayerModel(),
                    await this.createLayerCamera(),
                    this.createElement(),
                    (this._setAnimationEventsAndTriggers = this._setAnimationEventsAndTriggers.bind(this)),
                    n.default.on(r.EVT_RT_VIEWER_READY, this._setAnimationEventsAndTriggers);
            }
            createElement() {
                this.element = document.querySelector(c);
            }
            async createLayerModel() {
                await this.layersCreated,
                    (this.models = {}),
                    (this.bboxes = {}),
                    (this.bboxesLayers = []),
                    (this.modelsPromises = []),
                    Object.keys(this.LAYERS.model).forEach((e) => {
                        (this.models[e] = this.getLayer(this.LAYERS.model[e].layer)),
                            (this.bboxes[e] = this.getLayer(this.LAYERS.model[e].bboxes[0])),
                            this.modelsPromises.push(this.models[e].ready),
                            this.bboxesLayers.push(...this.LAYERS.model[e].bboxes);
                    }),
                    await Promise.all(this.modelsPromises),
                    this.models.large.hide(),
                    (this.boundingBoxes = this.getObjects(this.bboxesLayers)),
                    (this.boundingBoxesUID = this.boundingBoxes.map((e) => e.uuid)),
                    (this.pointer.onPointerTest = (e) => {
                        const t = (() => {
                            let t = !1;
                            if (null !== e[0]) for (const t of e) if (this.boundingBoxesUID.includes(t.object.uuid)) return !0;
                            return t;
                        })();
                        return t && this.camera.enable && !this.sizeCameraDisable ? this.camera.enable() : this.camera.disable && this.camera.disable(), t;
                    });
            }
            async createLayerCamera() {
                const { camera: e } = this.LAYERS;
                (this.introCameraLayer = this.getLayer(e.intro)),
                    (this.mainCameraLayer = this.getLayer(e.main)),
                    (this.interpolationLayer = this.getLayer(e.interpolation)),
                    (this.interpolation = this.interpolationLayer.scripts.get("InteractiveCameraInterpolation")),
                    await Promise.all([this.introCameraLayer.ready, this.mainCameraLayer.ready]),
                    (this.introCamera = this.introCameraLayer.scripts.get("KeyframeTimelineCamera")),
                    (this.mainCamera = this.mainCameraLayer.scripts.get("InteractiveCamera")),
                    (this.mainCamera.near = 20),
                    (this.introCamera.near = 20);
            }
            _setAnimationEventsAndTriggers() {
                (this.animation = { progress: 0 }),
                    n.default.addEvent(this.element, {
                        start: "t - 115vh",
                        event: "reset",
                        disabledWhen: ["no-enhanced"],
                        onEvent: () => {
                            this.createScrollAnimation(), this.mainCamera && ((this.mainCamera._phi = 89.9), (this.mainCamera._closestYAngle = 89.9), h.instance().tryRequestAnimationFrame());
                        },
                    }),
                    (this.introCameraWrapper = this.introCameraLayer.element.parent.parent),
                    (this._onAnimationStart = this._onAnimationStart.bind(this)),
                    (this._onAnimationUpdate = this._onAnimationUpdate.bind(this)),
                    (this._onAnimationEnd = this._onAnimationEnd.bind(this)),
                    this.introCamera.addEventListener("animation:start", this._onAnimationStart),
                    this.introCamera.addEventListener("animation:ended", this._onAnimationEnd);
            }
            _onAnimationStart(e) {
                ("scroll" !== e.animation && "intro" !== e.animation) || this.stopHintTimeout();
            }
            onFrame() {
                if (this.scrollKeyframeCreated) {
                    this.timelineScroll.progress !== this.animation.progress && (this.timelineScroll.progress = this.animation.progress);
                }
            }
            _onAnimationUpdate(e) {
                const t = h.THREE.MathUtils.radToDeg(this.introCameraWrapper.rotation.y);
                (this.mainCamera._theta = t),
                    (this.mainCamera._proposedPositionTheta = t),
                    (this.mainCamera._closestXAngle = t),
                    this.scrollEnded ||
                        (1 === this.animation.progress &&
                            ((this.scrollEnded = !0),
                            this.introScrollKeyframe && !this.introScrollKeyframe.destroyed && this.introScrollKeyframe.remove(),
                            this.timelineScroll && this.timelineScroll._timeline && this.timelineScroll.destroy(),
                            this.playIntroAnimation()));
            }
            _onAnimationEnd(e) {
                if ((this.switchCamera(this.mainCamera), "intro" === e.animation)) {
                    if (this.isInteracted) return;
                    this.startHintTimeout();
                }
                "hint" === e.animation && this.introCamera.removeEventListener("animation:update", this._onAnimationUpdate), ("intro" !== e.animation && "hint" !== e.animation) || (this.mainCamera._proposedPositionTheta = 180);
            }
            onPointerStart() {
                !this.isInteracted && this.analyticsObject && (0, a.trackCustomEvent)(n.default, this.analyticsObject),
                    (this.isInteracted = !0),
                    this.introCamera.removeEventListener("animation:update", this._onAnimationUpdate),
                    n.default.trigger(r.EVT_RT_VIEWER_AAP_ENABLE),
                    this.stopHintTimeout(),
                    this.stopHintAnimation(),
                    this.stopIntroAnimation(),
                    this.scrollEnded || (this.scrollEnded = !0),
                    this.introScrollKeyframe && !this.introScrollKeyframe.destroyed && this.introScrollKeyframe.remove(),
                    this.timelineScroll && this.timelineScroll._timeline && this.timelineScroll.destroy(),
                    this.introTriggerEvent && !this.introTriggerEvent.destroyed && this.introTriggerEvent.remove();
            }
            playIntroAnimation() {
                this.switchCamera(this.introCamera), this.stopIntroAnimation(), (this.introTimeline = this.introCamera.createTimeline("intro")), this.introTimeline.play();
            }
            stopIntroAnimation() {
                this.introTimeline && this.introTimeline._timeline && this.introTimeline.destroy(), this.switchCamera(this.mainCamera);
            }
            playHintAnimation() {
                this.switchCamera(this.introCamera), this.stopHintAnimation(), (this.hintTimeline = this.introCamera.createTimeline("hint")), this.hintTimeline.play();
            }
            stopHintAnimation() {
                this.hintTimeline && this.hintTimeline._timeline && this.hintTimeline.destroy(), this.switchCamera(this.mainCamera);
            }
            startHintTimeout() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.HINT_INTERVAL;
                this.stopHintTimeout(),
                    (this.hintTimeout = setTimeout(() => {
                        this.playHintAnimation();
                    }, e));
            }
            stopHintTimeout() {
                this.hintTimeout && clearTimeout(this.hintTimeout);
            }
            createScrollAnimation() {
                if ((this.stopHintTimeout(), this.stopHintAnimation(), this.stopIntroAnimation(), this.introCamera.addEventListener("animation:update", this._onAnimationUpdate), this.ANIMATION.scroll)) {
                    (this.scrollEnded = !1),
                        (this.animation.progress = 0),
                        this.timelineScroll && this.timelineScroll._timeline && this.timelineScroll.destroy(),
                        (this.timelineScroll = this.introCamera.createTimeline("scroll")),
                        this.introScrollKeyframe && !this.introScrollKeyframe.destroyed && this.introScrollKeyframe.remove();
                    const e = Object.assign({ event: "intro:scroll", start: "a0t - 95vh", end: "a0b - 105vh", progress: [0, 1], anchors: [this.element] }, this.ANIMATION.scroll || {});
                    (this.introScrollKeyframe = n.default.addKeyframe(this.animation, e)),
                        this.introScrollKeyframe.controller.on("draw", () => {
                            this.scrollKeyframeCreated = !0;
                        });
                } else
                    (this.scrollEnded = !0),
                        this.switchCamera(this.introCamera),
                        (this.introTimeline = this.introCamera.createTimeline("intro")),
                        (this.introTriggerEvent = n.default.addEvent(
                            this.element,
                            Object.assign(this.ANIMATION.intro || { start: "t-50vh" }, {
                                disabledWhen: ["no-enhanced"],
                                onEvent: () => {
                                    this.introTriggerEvent.remove(),
                                        requestAnimationFrame(() => {
                                            this.introTimeline.play();
                                        });
                                },
                            })
                        ));
            }
            onSizeChange(e) {
                this.isSizeAnimating ||
                    ((this.isSizeAnimating = !0),
                    this.stopHintTimeout(),
                    this.stopHintAnimation(),
                    this.stopIntroAnimation(),
                    this.scrollEnded || (this.scrollEnded = !0),
                    this.introScrollKeyframe && !this.introScrollKeyframe.destroyed && this.introScrollKeyframe.remove(),
                    this.timelineScroll && this.timelineScroll._timeline && this.timelineScroll.destroy(),
                    this.introTriggerEvent && !this.introTriggerEvent.destroyed && this.introTriggerEvent.remove(),
                    n.default.trigger(r.EVT_RT_VIEWER_AAP_DISABLE),
                    requestAnimationFrame(() => {
                        this.mainCamera.disable && ((this.sizeCameraDisable = !0), this.mainCamera.disable()),
                            this.mainCamera.changeState("default", () => {
                                this.mainCamera._theta > 250 ? (this.mainCamera._closestXAngle = 360) : this.mainCamera._theta < 110 && (this.mainCamera._closestXAngle = 0), this.checkCameraAngle(e);
                            });
                    }));
            }
            checkCameraAngle(e) {
                this.loopRAF = requestAnimationFrame(this.checkCameraAngle.bind(this, e));
                const t = Math.round(1e3 * this.mainCamera._phi) / 1e3,
                    i = Math.round(1e3 * this.mainCamera._theta) / 1e3;
                Math.abs(this.mainCamera._closestXAngle - i) < 1 &&
                    Math.abs(this.mainCamera._closestYAngle - t) < 1 &&
                    (cancelAnimationFrame(this.loopRAF),
                    this.transitionSize(),
                    this.state.set("animations", e),
                    (this.target = this.models["large" === e ? "small" : "large"]),
                    requestAnimationFrame(() => {
                        Object.keys(this.models).forEach((e) => {
                            this.models[e].show();
                        });
                    }),
                    clearTimeout(this.sizeTimeout),
                    (this.sizeTimeout = setTimeout(() => {
                        this.target.hide(),
                            this.mainCamera.enable && ((this.sizeCameraDisable = !1), this.mainCamera.enable()),
                            h.instance().tryRequestAnimationFrame(),
                            n.default.trigger(r.EVT_RT_VIEWER_AAP_ENABLE),
                            (this.isSizeAnimating = !1),
                            this.target.element.translateX(100);
                    }, 1200 * this.ANIMATION.size["transition-duration"])));
            }
            transitionSize() {
                (0, l.SizeAnimationCases)(this.ANIMATION, this.interpolation.angle, this.models, this.bboxes);
            }
        };
    },
    function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ObjectTransform = void 0);
        const { Lotus: s } = window,
            { DisposeUtils: n, THREE: r, VariantsUtils: a } = s;
        class o {
            constructor(e) {
                let { fields: t, layer: i, scene: s } = e;
                (this.layer = i), (this.scene = s), this.scene.eventPool.register(this), this.onDataChange(t);
            }
            onStateChange() {
                this._fields.generateStateValues(), this.onValuesChange();
            }
            onDataChange(e) {
                this._fields && this._fields.destroy(), (this._fields = a.create(e, this.scene)), this.onValuesChange();
            }
            async onValuesChange() {
                await this.scene.ready, (this.camera = this.scene.camera), (this.case = this.scene.getObject(this._fields.case));
            }
            onLoop() {
                if (!this.camera || !this.case) return;
                let e = 0;
                const t = r.MathUtils.degToRad(this.camera._phi),
                    i = r.MathUtils.degToRad(this.camera._theta),
                    { angleFront: s, angleTop: n, angleLidGround: a, distanceCamera: o, distanceKeyboard: l, screenHeight: h, topPolar: d } = this._fields,
                    c = n - s,
                    u = 0.5 * Math.PI + Math.atan2(l, o),
                    m = 0.5 * Math.PI - r.MathUtils.degToRad(20),
                    p = (e) => r.MathUtils.clamp(e, 0, 1),
                    f = 1 - p((t - m) / (u - m)),
                    _ = 1 - p((t - d) / (m + (d - m) / 2 - d));
                (e = a + f * (1 - _) * (m - u)),
                    (e += (c - a) * _),
                    (e += s * Math.pow(Math.cos(i), 9)),
                    (this.case.rotation.x = e),
                    (this.layer.element.position.z = -h * Math.sin(e) * 0.5 * 100),
                    (this.layer.element.position.y = h * (1 - Math.cos(e)) * 100);
            }
            destroy() {
                n.destroy(this);
            }
        }
        (t.ObjectTransform = o),
            (o.fields = {
                case: { defaultValue: "", type: "String" },
                angleFront: { defaultValue: 0.05, type: "Number" },
                angleLidGround: { defaultValue: 0, type: "Number" },
                angleTop: { defaultValue: 0.083, type: "Number" },
                distanceCamera: { defaultValue: 1.73, type: "Number" },
                distanceKeyboard: { defaultValue: 0.09, type: "Number" },
                screenHeight: { defaultValue: 0.22, type: "Number" },
                topPolar: { defaultValue: 0.688, type: "Number" },
            });
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SizeAnimationCases = void 0);
        var n = s(i(40));
        let r, a, o, l, h, d, c, u, m, p;
        const { Lotus: f } = window;
        t.SizeAnimationCases = (e, t, i, s) => {
            const _ = e.size["travel-distance"],
                g = e.rotation["transition-amount"],
                E = e.size["transition-duration"],
                y = e.size["transition-delay-to"],
                v = e.size["transition-delay-from"],
                b = e.size["opacity-duration-to"],
                A = e.size["opacity-duration-from"],
                T = e.size["opacity-delay-to"],
                I = e.size["opacity-delay-from"],
                w = e.easing.curve;
            let C = i.large.isVisible;
            switch (t) {
                case "front":
                    if (((d = [0, 0]), (u = [0, 0]), (m = 0), (p = 0), C)) {
                        (r = i.large.element), (o = i.small.element), (a = s.large), (l = s.small), (h = [_, 0]), (c = [0, -_]);
                        break;
                    }
                    (r = i.small.element), (o = i.large.element), (a = s.small), (l = s.large), (h = [-_, 0]), (c = [0, _]);
                    break;
                case "back":
                    if (((d = [0, 0]), (u = [0, 0]), (m = 0), (p = 0), C)) {
                        (r = i.large.element), (o = i.small.element), (h = [-_, 0]), (c = [0, _]), (a = s.large), (l = s.small);
                        break;
                    }
                    (r = i.small.element), (o = i.large.element), (a = s.small), (l = s.large), (c = [0, -_]), (h = [_, 0]);
                    break;
                case "left":
                    if (((h = [0, 0]), (c = [0, 0]), (p = 0), C)) {
                        (r = i.large.element), (o = i.small.element), (a = s.large), (l = s.small), (d = [-_, 0]), (u = [0, _]), (m = g);
                        break;
                    }
                    (r = i.small.element), (o = i.large.element), (a = s.small), (l = s.large), (u = [0, -_]), (d = [_, 0]), (m = -g);
                    break;
                case "right":
                    if (((h = [0, 0]), (c = [0, 0]), (p = 0), C)) {
                        (r = i.large.element), (o = i.small.element), (a = s.large), (l = s.small), (d = [_, 0]), (u = [0, -_]), (m = g);
                        break;
                    }
                    (r = i.small.element), (o = i.large.element), (a = s.small), (l = s.large), (u = [0, _]), (d = [-_, 0]), (m = -g);
                    break;
                case "front-top":
                    if (((d = [0, 0]), (u = [0, 0]), (m = 0), C)) {
                        (r = i.large.element), (o = i.small.element), (a = s.large), (l = s.small), (h = [_, 0]), (c = [0, -_]), (p = g);
                        break;
                    }
                    (r = i.small.element), (o = i.large.element), (a = s.small), (l = s.large), (h = [-_, 0]), (c = [0, _]), (p = -g);
            }
            n.default.addTween(o.position, {
                duration: E,
                delay: y,
                easeFunction: w,
                x: h,
                z: d,
                onDraw: () => {
                    f.instance().tryRequestAnimationFrame();
                },
                onComplete: () => {
                    C = !C;
                },
            }),
                n.default.addTween(r.position, { duration: E, easeFunction: w, delay: v, x: c, z: u }),
                n.default.addTween(o.rotation, { duration: E, easeFunction: w, y: [m, 0], z: [p, 0] }),
                n.default.addTween(r.rotation, { duration: E, easeFunction: w, y: [0, -m], z: [0, -p] }),
                n.default.addTween(l.element.material, { duration: b, delay: T, easeFunction: "cubic-bezier(0.4,0,0.45,1)", opacity: [1, 0] }),
                n.default.addTween(a.element.material, {
                    duration: A,
                    delay: I,
                    easeFunction: "cubic-bezier(0.4,0,0.45,1)",
                    opacity: [0, 1],
                    onDraw: () => {
                        f.instance().tryRequestAnimationFrame();
                    },
                });
        };
    },
    function (e, t, i) {
        "use strict";
        const { EVT_AAP_COLOR_CHANGED: s, EVT_RT_BASE_INDEX_CHANGED: n, RT_VIEWER_FEATURE_DETECT: r } = i(18),
            a = i(52),
            o = i(54),
            l = i(310),
            h = i(90),
            d = i(84),
            c = i(311),
            { FEATURE_ENHANCED: u } = i(7),
            m = {
                beforeCreate() {
                    (this.model.PrefersReducedMotion = document.documentElement.classList.contains("reduced-motion")),
                        (this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir")),
                        (this.model.IsTouch = "ontouchstart" in document.documentElement),
                        (this.model.Item.Selector = ".item-container .gallery-item"),
                        (this.model.Slide.Selector = ".item-container"),
                        (this.model.Slide.duration = 1),
                        (this.model.InitialIndexFromHashLink.Enabled = !0),
                        (this.model.InitialIndexFromHashLink.ScrollReset = !0),
                        (this._onAapColorChanged = this._onAapColorChanged.bind(this));
                },
                mounted() {
                    this.anim.on(s, this._onAapColorChanged);
                },
                onItemChangeCompleted() {
                    this.anim.trigger(n, this.currentIndex);
                },
                _onAapColorChanged(e) {
                    const { index: t, lastInteractionEvent: i } = e;
                    (this.lastInteractionEvent = i), this.animateToItem(t);
                },
            },
            p = [`no-${u}`, `no-${r}`],
            f = [u, r],
            _ = c.combine([{ mixin: l, features: p }, { features: f }]),
            g = a.withMixins(m, d, h, o, _);
        e.exports = g;
    },
    function (e, t, i) {
        "use strict";
        const s = i(116),
            n = i(73);
        e.exports = {
            mounted() {
                this.el.classList.remove("peeking"),
                    this._items.forEach((e) => {
                        e.measure(), (e.x = 0), (e.zIndex = e === this.currentItem ? 2 : 0);
                    }),
                    this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, { gallery: this, previous: null, current: this.currentItem });
            },
            animateToItem(e) {
                if (this.currentIndex === e || this.currentIndex === this.wrappedIndex(e)) return;
                this.el.parentElement.scrollLeft = 0;
                let t = this.model.IsTouch ? "easeOutCubic" : "easeInOutCubic";
                this.clip && this.clip._isPlaying && ((t = "easeOutQuint"), this.clip.destroy());
                const i = this.selections.occurred.previous,
                    r = this.selections.occurred.current,
                    a = this._items[this.wrappedIndex(e)];
                (a.opacity = 0), i && (i.zIndex = 0), r && (r.zIndex = 1), (a.zIndex = 2);
                let o = !1;
                (this.clip = new s(this.model.Fade.duration, {
                    ease: n[t],
                    prepare: () => this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { gallery: this, next: a }),
                    update: (e) => {
                        e > 0.5 && !o && ((o = !0), (this.currentIndex = a.index), this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, { gallery: this, current: a })), (a.opacity = e);
                    },
                    draw: () => {},
                    finish: () => {
                        this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { gallery: this, current: a });
                    },
                })),
                    this.clip.play().then(() => {
                        this.clip.destroy(), (this.clip = null);
                    });
            },
            onResizeImmediate() {
                this.clip && (this.clip.destroy(), (this.clip = null)), this.resetFadeItems();
            },
            resetFadeItems() {
                this._items.forEach((e) => {
                    (e.zIndex = e === this.currentItem ? 2 : 0), (e.opacity = 1);
                });
            },
            destroy() {
                this.clip && this.clip.destroy(), this.resetFadeItems();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const { draw: s } = i(25);
        e.exports = {
            combine: function (e) {
                const t = "feature_mask_" + Math.random().toString(16).slice(2),
                    i = {
                        beforeCreate() {
                            (this.onFeatureChange = this.onFeatureChange.bind(this)),
                                (this.featureObserver = ((e, t) => {
                                    let i = e.className;
                                    const s = new MutationObserver((e) => {
                                        for (const s of e) "class" === s.attributeName && i !== s.target.className && ((i = s.target.className), t());
                                    });
                                    return s.observe(e, { attributes: !0, attributeOldValue: !0, childList: !1, subtree: !1 }), s;
                                })(document.documentElement, this.onFeatureChange)),
                                (this[t] = n(document.documentElement.classList)),
                                r(this, "beforeCreate");
                        },
                        onFeatureChange() {
                            const e = n(document.documentElement.classList);
                            e !== this[t] &&
                                (r(this, "destroy"),
                                (this[t] = e),
                                s(() => {
                                    r(this, "beforeCreate", this.model.options), r(this, "created", this.model.options), r(this, "beforeMount", this.model.options), r(this, "itemsCreated"), r(this, "mounted");
                                }, !1));
                        },
                        destroy() {
                            r(this, "destroy"), (this[t] = null);
                        },
                    },
                    n = function (t) {
                        const i = e.find((e) => Array.from(t).some((t) => e.features.includes(t)));
                        if (!i) throw Error(`Cannot find mode for current feature. Current Settings ${e}`);
                        return i.mixin;
                    },
                    r = function (e, i) {
                        if (e[t][i]) {
                            for (var s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) n[r - 2] = arguments[r];
                            return e[t][i].apply(e, n);
                        }
                    };
                return (
                    e.forEach(function (e) {
                        e.mixin || (e.mixin = {}),
                            Object.keys(e.mixin).forEach(
                                (e) =>
                                    (i[e] =
                                        i[e] ||
                                        function () {
                                            for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                                            return r(this, e, ...i);
                                        })
                            );
                    }),
                    i
                );
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(23)),
            r = i(18),
            a = i(21);
        class o extends n.default {
            static IS_SUPPORTED() {
                return !0;
            }
            constructor(e) {
                if ((super(e), (this.featureDetect = r.RT_VIEWER_FEATURE_DETECT), (this.destroyed = !document.documentElement.classList.contains(r.RT_VIEWER_FEATURE_DETECT)), (this.aapId = this.el.dataset.aapId), !this.aapId))
                    throw Error("No id supplid for AAP control");
                (this._canvasContainerEl = this.el.querySelector(".rt-viewer-enhanced-container")),
                    (this._aapContainer = document.getElementById(this.aapId)),
                    (this._aapElements = { colornav: [...this._aapContainer.querySelectorAll(".viewer-colornav-value")], sizenav: [...this._aapContainer.querySelectorAll(".viewer-sizenav-value")] }),
                    (this._aapColorNav = this._aapContainer.querySelector(".viewer-colornav-items")),
                    (this._aapSizeNav = this._aapContainer.querySelector(".viewer-sizenav-items")),
                    (this._aapSizeNavContainer = this._aapContainer.querySelector(".viewer-sizenav")),
                    (this._onChangeColor = this._onChangeColor.bind(this)),
                    (this._onChangeSize = this._onChangeSize.bind(this)),
                    (this._onAapMounted = this._onAapMounted.bind(this)),
                    (this._onViewerReady = this._onViewerReady.bind(this)),
                    (this._onViewerError = this._onViewerError.bind(this)),
                    (this._onGalleryIndexChanged = this._onGalleryIndexChanged.bind(this)),
                    (this._onAAPDisabled = this._onAAPDisabled.bind(this)),
                    (this._onAAPEnable = this._onAAPEnable.bind(this)),
                    this.anim.on(`aap-mounted--${this.aapId}`, this._onAapMounted),
                    this.anim.once(r.EVT_RT_VIEWER_READY, this._onViewerReady),
                    this.anim.once(r.EVT_RT_VIEWER_ESCAPE, this._onViewerError),
                    this.anim.on(r.EVT_RT_BASE_INDEX_CHANGED, this._onGalleryIndexChanged),
                    this.anim.on(r.EVT_RT_VIEWER_AAP_DISABLE, this._onAAPDisabled),
                    this.anim.on(r.EVT_RT_VIEWER_AAP_ENABLE, this._onAAPEnable);
            }
            mounted() {
                this._aapElements.colornav.forEach((e) => e.addEventListener("change", this._onChangeColor)),
                    this._aapElements.sizenav.forEach((e) => e.addEventListener("change", this._onChangeSize)),
                    this.destroyed && (0, a.trackViewerState)();
            }
            onUnenhance() {
                this._softDestroy();
            }
            _focusContainer(e) {
                e && document.activeElement === this.el && e.focus();
            }
            _onAapMounted(e) {
                (this.aap = e), (this._aapSizeNav.parentElement.style.pointerEvents = "all"), this.destroyed && this._aapShowFallback();
            }
            _aapShowFallback() {
                requestAnimationFrame(() => {
                    this.aap && this.aap.loadFallback();
                });
            }
            _aapShowEnhanced() {
                requestAnimationFrame(() => {
                    this.aap && this.aap.loadEnhanced();
                });
            }
            _updateCanvasAria() {
                this.destroyed ||
                    requestAnimationFrame(() => {
                        const e = this._aapSizeNav.querySelector(":checked");
                        this._canvasContainerEl.setAttribute("aria-label", e.getAttribute("aria-label"));
                    });
            }
            _onViewerReady() {
                this.destroyed || this._aapShowEnhanced();
            }
            _onViewerError() {
                this._softDestroy();
            }
            _onGalleryIndexChanged(e) {
                this._aapElements.colornav[e].checked = !0;
            }
            _onAAPDisabled() {
                [...this._aapElements.colornav, ...this._aapElements.sizenav].forEach((e) => {
                    e.checked || (e.disabled = !0);
                }),
                    (this._aapSizeNavContainer.disabled = !0);
            }
            _onAAPEnable() {
                [...this._aapElements.colornav, ...this._aapElements.sizenav].forEach((e) => {
                    e.disabled = !1;
                }),
                    (this._aapSizeNavContainer.disabled = !1);
            }
            _onChangeColor(e) {
                const t = this._aapElements.colornav.indexOf(e.target),
                    i = e.target.dataset.viewerValue;
                this._focusWasTriggered || ((this._focusWasTriggered = !0), this._focusContainer(e.target)),
                    i || this.logger.warn("RealTimeViewerConnector : `data-viewer-value` attribute is invalid:", e.target),
                    this._updateCanvasAria(),
                    this.anim.trigger(r.EVT_AAP_COLOR_CHANGED, { index: t, color: i, lastInteractionEvent: e });
            }
            _onChangeSize(e) {
                const t = this._aapElements.sizenav.indexOf(e.target),
                    i = e.target.dataset.viewerValue;
                i || this.logger.warn("RealTimeViewerConnector : `data-viewer-value` attribute is invalid:", e.target), this._updateCanvasAria(), this.anim.trigger(r.EVT_AAP_SIZE_CHANGED, { index: t, size: i });
            }
            async _softDestroy() {
                this.destroyed || ((this.destroyed = !0), await this.unenhanceFeatureClass(), this.anim.forceUpdate(), this._aapShowFallback(), (0, a.trackViewerState)());
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        const s = i(3),
            n = i(52),
            r = i(93),
            a = i(54),
            o = i(138),
            l = i(81),
            h = i(137),
            d = i(140),
            c = i(141);
        e.exports = class extends s {
            constructor(e) {
                super(e), (this._els = { gallery: this.el, slideGallery: this.el.querySelector(".gallery") });
            }
            mounted() {
                this._setupGallery(), this._showSlideGallery();
            }
            _setupGallery() {
                const e = {
                        beforeCreate() {
                            (this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir")), (this.model.duration = 0.5);
                        },
                    },
                    t = n.withMixins(r, a, e, o, c, d, h);
                var i;
                (i = t),
                    ["itemsCreated", "onItemChangeCompleted"].forEach((e) => {
                        const t = i.prototype[`__${e}`].indexOf(l[e]);
                        i.prototype[`__${e}`].splice(t, 1);
                    }),
                    (this.gallery = new t({ el: this._els.slideGallery }));
            }
            _showSlideGallery() {
                this._els.slideGallery.classList.contains("show") || this._els.slideGallery.classList.add("show");
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = { ua: window.navigator.userAgent, platform: window.navigator.platform, vendor: window.navigator.vendor };
        e.exports = i(315)(s);
    },
    function (e, t, i) {
        "use strict";
        var s = i(316),
            n = i(317);
        function r(e, t) {
            if ("function" == typeof e.parseVersion) return e.parseVersion(t);
            var i,
                s = e.version || e.userAgent;
            "string" == typeof s && (s = [s]);
            for (var n, r = s.length, a = 0; a < r; a++) if ((n = t.match(((i = s[a]), new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && n.length > 1) return n[1].replace(/_/g, ".");
        }
        function a(e, t, i) {
            for (var s, n, a = e.length, o = 0; o < a; o++)
                if (("function" == typeof e[o].test ? !0 === e[o].test(i) && (s = e[o].name) : i.ua.indexOf(e[o].userAgent) > -1 && (s = e[o].name), s)) {
                    if (((t[s] = !0), "string" == typeof (n = r(e[o], i.ua)))) {
                        var l = n.split(".");
                        (t.version.name = n), l && l.length > 0 && ((t.version.major = parseInt(l[0] || 0)), (t.version.minor = parseInt(l[1] || 0)), (t.version.patch = parseInt(l[2] || 0)));
                    } else "edge" === s && ((t.version.name = "12.0.0"), (t.version.major = "12"), (t.version.minor = "0"), (t.version.patch = "0"));
                    return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t;
                }
            return t;
        }
        e.exports = function (e) {
            var t = {};
            return (t.browser = a(n.browser, s.browser, e)), (t.os = a(n.os, s.os, e)), t;
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            browser: { safari: !1, chrome: !1, firefox: !1, ie: !1, opera: !1, android: !1, edge: !1, version: { name: "", major: 0, minor: 0, patch: 0, documentMode: !1 } },
            os: { osx: !1, ios: !1, android: !1, windows: !1, linux: !1, fireos: !1, chromeos: !1, version: { name: "", major: 0, minor: 0, patch: 0 } },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            browser: [
                {
                    name: "edge",
                    userAgent: "Edge",
                    version: ["rv", "Edge"],
                    test: function (e) {
                        return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua;
                    },
                },
                { name: "chrome", userAgent: "Chrome" },
                {
                    name: "firefox",
                    test: function (e) {
                        return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera");
                    },
                    version: "Firefox",
                },
                { name: "android", userAgent: "Android" },
                {
                    name: "safari",
                    test: function (e) {
                        return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1;
                    },
                    version: "Version",
                },
                {
                    name: "ie",
                    test: function (e) {
                        return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1;
                    },
                    version: ["MSIE", "rv"],
                    parseDocumentMode: function () {
                        var e = !1;
                        return document.documentMode && (e = parseInt(document.documentMode, 10)), e;
                    },
                },
                { name: "opera", userAgent: "Opera", version: ["Version", "Opera"] },
            ],
            os: [
                {
                    name: "windows",
                    test: function (e) {
                        return e.platform.indexOf("Win") > -1;
                    },
                    version: "Windows NT",
                },
                {
                    name: "osx",
                    userAgent: "Mac",
                    test: function (e) {
                        return e.platform.indexOf("Mac") > -1;
                    },
                },
                {
                    name: "ios",
                    test: function (e) {
                        return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1;
                    },
                    version: ["iPhone OS", "CPU OS"],
                },
                {
                    name: "linux",
                    userAgent: "Linux",
                    test: function (e) {
                        return e.platform.indexOf("Linux") > -1 && -1 === e.ua.indexOf("Android");
                    },
                },
                {
                    name: "fireos",
                    test: function (e) {
                        return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1;
                    },
                    version: "rv",
                },
                { name: "android", userAgent: "Android" },
                { name: "chromeos", userAgent: "CrOS" },
            ],
        };
    },
    function (e, t, i) {
        "use strict";
        const s = (e, t) => {
            t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true");
        };
        e.exports = {
            mounted() {
                const e = this.el.querySelector(this.model.PaddleNav.Selector);
                (this.paddleNav = { previousEl: e.querySelector(".paddlenav-arrow-previous"), nextEl: e.querySelector(".paddlenav-arrow-next") }),
                    (this.onPaddleNavSelected = this.onPaddleNavSelected.bind(this)),
                    [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e) => {
                        e.addEventListener("click", this.onPaddleNavSelected);
                    });
            },
            destroy() {
                [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e) => {
                    e.removeEventListener("click", this.onPaddleNavSelected);
                }),
                    (this.paddleNav = null);
            },
            onPaddleNavSelected(e) {
                let t = e.currentTarget.className.includes("previous") ? -1 : 1;
                this.lastInteractionEvent = e;
                const i = this.currentIndex + 1 * t;
                this.animateToItem(i);
            },
            onItemChangeCompleted(e) {
                const t = this.wrappedIndex(this.currentIndex + 1) !== this.currentIndex;
                s(this.paddleNav.nextEl, t);
                const i = this.wrappedIndex(this.currentIndex + -1) !== this.currentIndex;
                s(this.paddleNav.previousEl, i);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(3));
        const r = i(132).default,
            { PageOverlayBundle: a } = i(45),
            o = r.withMixins(...a);
        class l extends n.default {
            static IS_SUPPORTED() {
                return !0;
            }
            constructor(e) {
                super(e);
                const t = this.el.querySelector(".icon-card-modal-content"),
                    i = new o(t, { attributes: { overlay: { "aria-labelledby": "modal-headline" } } });
                this.el.querySelector(".modal-trigger").addEventListener("click", (e) => {
                    i.open();
                });
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(321)),
            r = s(i(328)),
            a = s(i(329)),
            o = s(i(330)),
            l = s(i(331)),
            h = s(i(332)),
            d = s(i(120)),
            c = i(25),
            u = s(i(3));
        class m extends u.default {
            constructor(e) {
                super(e),
                    (this._els = {
                        accordion: this.el,
                        accordionItems: this.el.querySelectorAll("[data-accordion-item]"),
                        accordionTitles: this.el.querySelectorAll(".accordion-title"),
                        accordionContent: Array.from(this.el.querySelectorAll(".accordion-content")),
                    });
            }
            async mounted() {
                await this._cacheSizeInfo(), this._setupAccordion();
            }
            _cacheSizeInfo() {
                let e = 0;
                const t = this._els.accordionContent.map((e) => e.offsetHeight).reduce((e, t) => Math.max(e, t));
                return (
                    (e += t),
                    new Promise((t, i) => {
                        (0, c.update)(() => {
                            this._els.accordionItems.forEach((t, i) => {
                                e += this._els.accordionTitles[i].offsetHeight;
                                const s = getComputedStyle(t)["border-top-width"],
                                    n = parseFloat(s);
                                e += n;
                            }),
                                (0, c.draw)(() => {
                                    this.el.style.setProperty("--accordion-height", `${e}px`), (this._accordionHeightRemoved = !1), this.anim.forceUpdate(), t();
                                });
                        });
                    })
                );
            }
            _setupAccordion() {
                const e = {
                        itemsCreated() {
                            Object.values(this.items).forEach((e) => {
                                (e.triggerEl.onkeydown = (t) => {
                                    (e.state !== this.model.Item.States.expanded && e.state !== this.model.Item.States.expanding) || (t.keyCode !== d.default.SPACEBAR && t.keyCode !== d.default.ENTER) || t.preventDefault();
                                }),
                                    (e.imageEl = this.el.querySelector(`.${e.key}-image`));
                            });
                        },
                        _toggleAccordionItems(e) {
                            const t = Object.values(e.accordion.items);
                            t.forEach((e) => {
                                e.on("EXPAND_INITIATED", () => {
                                    e.imageEl.classList.remove("hidden"), this.el.classList.add("animating");
                                }),
                                    e.on("EXPAND_COMPLETED", () => {
                                        e.imageEl.classList.remove("hidden"), this.el.classList.remove("animating");
                                    }),
                                    e.on("COLLAPSE_INITIATED", () => {
                                        e.imageEl.classList.add("hidden");
                                    });
                            });
                            const i = t.filter((t) => t.key !== e.item.key);
                            for (const e of i)
                                if (e.state === this.model.Item.ExpandedClassName) {
                                    const t = { accordion: this, item: this.items[e.key] };
                                    this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, t);
                                }
                        },
                        onItemChangeInitiated(e) {
                            this._toggleAccordionItems(e);
                        },
                    },
                    t = n.default.withMixins(e, r.default, a.default, o.default, l.default, h.default),
                    i = this._els.accordion;
                this._accordion = new t({ el: i });
            }
            onResizeImmediate() {
                this._accordionHeightRemoved || (this.el.style.removeProperty("--accordion-height"), (this._accordionHeightRemoved = !0));
            }
            async onResizeDebounced() {
                await this._cacheSizeInfo();
            }
        }
        t.default = m;
    },
    function (e, t, i) {
        "use strict";
        const s = i(6),
            n = i(322),
            r = i(326),
            a = i(327),
            o = [
                "beforeCreate",
                "created",
                "beforeMount",
                "createItems",
                "itemsCreated",
                "mounted",
                "animateItem",
                "onItemChangeInitiated",
                "onItemChangeCompleted",
                "onResizeImmediate",
                "onBreakpointChange",
                "onResizeDebounced",
                "destroy",
            ];
        class l extends s {
            constructor(e) {
                var t;
                super(e),
                    (t = this),
                    (this.el = e.el),
                    (this.model = Object.assign({ options: e }, JSON.parse(JSON.stringify(n)))),
                    (this.model.Item.ConstructorFunction = n.Item.ConstructorFunction),
                    (this.items = {}),
                    o.forEach((e) => {
                        this[e] = function () {
                            for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                            t[`__${e}`] && t[`__${e}`].forEach((e) => e.apply(t, s));
                        };
                    }),
                    this.on(n.Events.ITEM_CHANGE_INITIATED, this.onItemChangeInitiated),
                    this.on(n.Events.ITEM_CHANGE_COMPLETED, this.onItemChangeCompleted),
                    ["beforeCreate", "created", "beforeMount", "createItems"].forEach((t) => this[t](e));
            }
        }
        (l.withMixins = function () {
            const e = class extends l {},
                t = e.prototype;
            for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
            return (
                s.push(a, r),
                s.forEach((e) => {
                    for (const i in e) o.includes(i) ? ((t[`__${i}`] = t[`__${i}`] || []), t[`__${i}`].push(e[i])) : (t[i] = e[i]);
                }),
                e
            );
        }),
            (e.exports = l);
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            Container: { Selector: "[data-accordion]" },
            Item: {
                States: { expanding: "expanding", expanded: "expanded", collapsing: "collapsing", collapsed: "collapsed" },
                Events: { expanding: "EXPAND_INITIATED", expanded: "EXPAND_COMPLETED", collapsing: "COLLAPSE_INITIATED", collapsed: "COLLAPSE_COMPLETED" },
                ConstructorFunction: i(323),
                InitialState: "collapsed",
                Selector: "[data-accordion-item]",
                ExpandedClassName: "expanded",
                CollapsedClassName: "collapsed",
                AnimatingClassName: "animating",
            },
            Trigger: { Selector: "[data-accordion-trigger]" },
            ToggleAllButton: {
                States: { collapseAll: "collapsed", expandAll: "expanded" },
                Selector: "[data-accordion-toggle-all]",
                CollapseLabelSelector: ".accordion-toggle-all-collapse",
                ExpandLabelSelector: ".accordion-toggle-all-expand",
                HiddenClassName: "hidden",
            },
            Icon: {
                Template: i(142).template,
                Points: i(142).points,
                Selector: "[data-accordion-icon]",
                ShapeSelector: "[data-accordion-icon-shape]",
                ExpandAnimationSelector: '[data-accordion-animate="expand"]',
                CollapseAnimationSelector: '[data-accordion-animate="collapse"]',
            },
            Tray: { Selector: "[data-accordion-tray]" },
            TrayContent: { Selector: "[data-accordion-content]" },
            Events: { ITEM_CHANGE_INITIATED: "ITEM_CHANGE_INITIATED", ITEM_CHANGE_COMPLETED: "ITEM_CHANGE_COMPLETED" },
            Analytics: { Attributes: { click: "data-analytics-click", title: "data-analytics-title" }, ToggleAllButton: { StateString: { collapseAll: "collapse", expandAll: "expand" } } },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(8).EventEmitterMicro,
            n = i(33),
            r = i(96).disableTabbable,
            a = {};
        "undefined" != typeof window && ((a.draw = i(1)), (a.cancelDraw = i(24)));
        e.exports = class extends s {
            constructor(e) {
                super(),
                    (this.contentHeight = 0),
                    (this.trayElHeight = 0),
                    (this.index = e.index),
                    (this.el = e.el),
                    (this.model = e.model),
                    (this.applyDraw = this.applyDraw.bind(this)),
                    (this.childKeys = []),
                    (this.parentKey = ""),
                    this.setupItemElements(),
                    this.measure(),
                    this.setInitialState();
            }
            setupItemElements() {
                (this.triggerEl = this.el.querySelector(this.model.Trigger.Selector, "button")), (this.trayEl = this.el.querySelector(this.model.Tray.Selector)), (this.contentEl = this.el.querySelector(this.model.TrayContent.Selector));
                const e = this.el.querySelectorAll(this.model.Item.Selector);
                e.length && e.forEach((e) => this.childKeys.push(e.dataset.accordionItem));
                const t = this.el.parentElement.closest(this.model.Item.Selector);
                t && ((this.parentKey = t.dataset.accordionItem), (this.parentExpanded = t.classList.contains(this.model.Item.ExpandedClassName))),
                    this.childKeys.length ? (this.tabbableEls = this.trayEl.querySelectorAll("[data-accordion-trigger]")) : (this.tabbableEls = n.getTabbableElements(this.trayEl, !1));
            }
            setInitialState() {
                let e = this.model.Item.InitialState;
                this.el.classList.contains(this.model.Item.ExpandedClassName) ? (e = this.model.Item.ExpandedClassName) : this.el.classList.contains(this.model.Item.CollapsedClassName) && (e = this.model.Item.CollapsedClassName),
                    (this.initialState = e),
                    (this.state = e),
                    this.isExpanded() ? this.setExpandState() : (this.setCollapseState(), r(this.tabbableEls)),
                    !1 === this.parentExpanded && r(this.tabbableEls);
            }
            setExpandState() {
                this.el.classList.remove(this.model.Item.AnimatingClassName, this.model.Item.CollapsedClassName),
                    this.el.classList.add(this.model.Item.ExpandedClassName),
                    this.triggerEl.setAttribute("aria-expanded", !0),
                    this.trayEl.removeAttribute("aria-hidden"),
                    (this.state = this.model.Item.States.expanded);
            }
            initiateExpand() {
                this.el.classList.remove(this.model.Item.ExpandedClassName, this.model.Item.CollapsedClassName),
                    this.el.classList.add(this.model.Item.AnimatingClassName),
                    (this.state = this.model.Item.States.expanding),
                    this.trigger(this.model.Item.Events[this.state], this);
            }
            completeExpand() {
                this.setExpandState(), this.trigger(this.model.Item.Events[this.state], this);
            }
            setCollapseState() {
                this.el.classList.remove(this.model.Item.ExpandedClassName, this.model.Item.AnimatingClassName),
                    this.el.classList.add(this.model.Item.CollapsedClassName),
                    this.triggerEl.setAttribute("aria-expanded", !1),
                    this.trayEl.setAttribute("aria-hidden", !0),
                    (this.state = this.model.Item.States.collapsed);
            }
            initiateCollapse() {
                this.el.classList.remove(this.model.Item.ExpandedClassName, this.model.Item.CollapsedClassName),
                    this.el.classList.add(this.model.Item.AnimatingClassName),
                    (this.state = this.model.Item.States.collapsing),
                    this.trigger(this.model.Item.Events[this.state], this);
            }
            completeCollapse() {
                this.setCollapseState(), this.trigger(this.model.Item.Events[this.state], this);
            }
            isExpandState() {
                return this.isExpanded() || this.isExpanding();
            }
            isCollapseState() {
                return this.isCollapsed() || this.isCollapsing();
            }
            isAnimating() {
                return this.isExpanding() || this.isCollapsing();
            }
            isExpanded() {
                return this.state === this.model.Item.States.expanded;
            }
            isExpanding() {
                return this.state === this.model.Item.States.expanding;
            }
            isCollapsed() {
                return this.state === this.model.Item.States.collapsed;
            }
            isCollapsing() {
                return this.state === this.model.Item.States.collapsing;
            }
            measure() {
                this.contentHeight = this.contentEl.offsetHeight;
            }
            needsRedraw() {
                a.cancelDraw(this._rafID), (this._rafID = a.draw(this.applyDraw, !0));
            }
            applyDraw() {
                this.trayEl.style.height = this.trayElHeight;
            }
            setTrayElHeight(e, t, i) {
                (this.trayElHeight = t ? `${e}${t}` : `${e}`), i ? this.needsRedraw() : this.applyDraw();
            }
        };
    },
    function (e, t, i) {
        "use strict";
        //console.warn('"setAttributes" is deprecated, please use "setAttributeForElements" instead.'), (e.exports = i(88));
    },
    function (e, t, i) {
        "use strict";
        var s = i(89),
            n = 0,
            r = ["button", "checkbox", "listbox", "option", "menuitem", "menuitemradio", "menuitemcheckbox", "tab"],
            a = i(92),
            o = function () {
                (this._elements = {}), (this._callbacks = {}), this._bindEvents(), (this._proxies = {}), this._setup();
            },
            l = o.prototype;
        (l._bindEvents = function () {
            (this._handleKeydown = this._handleKeydown.bind(this)), (this._handleHover = this._handleHover.bind(this));
        }),
            (l._setup = function () {
                this._addProxy("click", this._clickProxy), this._addProxy("hover", this._hoverProxy);
            }),
            (l._addProxy = function (e, t) {
                (this._proxies[e] = this._proxies[e] || []), this._proxies[e].push(t);
            }),
            (l._removeProxy = function (e, t) {
                if (this._proxies[e]) {
                    var i = this._proxies[e].indexOf(t);
                    i > -1 && this._proxies[e].splice(i, 1), 0 === this._proxies[e].length && delete this._proxies[e];
                }
            }),
            (l.addEventListener = function (e, t, i) {
                this._proxies[t] &&
                    (this._proxies[t].forEach(
                        function (s) {
                            s.call(this, e, t, i);
                        }.bind(this)
                    ),
                    e.addEventListener(t, i));
            }),
            (l.removeEventListener = function (e, t, i) {
                this._proxies[t] &&
                    (this._proxies[t].forEach(
                        function (s) {
                            s.call(this, e, t, i, !0);
                        }.bind(this)
                    ),
                    e.removeEventListener(t, i));
            }),
            (l._clickProxy = function (e, t, i, s) {
                var n = e.getAttribute("role");
                r.indexOf(n) < 0 && a("element's role is not set to any of the following " + r.join(", ")),
                    s ? (e.removeEventListener("keydown", this._handleKeydown), this._removeCallback(e, t, i)) : (e.addEventListener("keydown", this._handleKeydown), this._addCallback(e, t, i));
            }),
            (l._hoverProxy = function (e, t, i, s) {
                s
                    ? (e.removeEventListener("focus", this._handleHover, !0), e.removeEventListener("blur", this._handleHover, !0), i && this._removeCallback(e, t, i))
                    : (e.addEventListener("focus", this._handleHover, !0), e.addEventListener("blur", this._handleHover, !0), i && this._addCallback(e, t, i));
            }),
            (l._handleKeydown = function (e) {
                if (e.ctrlKey || e.altKey || e.metaKey) return !0;
                (e.keyCode !== s.SPACEBAR && e.keyCode !== s.ENTER) || this._executeCallback(e, "click");
            }),
            (l._handleHover = function (e) {
                "focus" === e.type ? e.currentTarget.classList.add("hover") : e.currentTarget.classList.remove("hover"), this._executeCallback(e, "hover");
            }),
            (l._executeCallback = function (e, t) {
                var i = this._getCallbacksByElement(e.currentTarget, t);
                if (i) for (var s = 0; s < i.length; s++) i[s](e);
            }),
            (l._addCallback = function (e, t, i) {
                var s = this._getIDByElement(e) || this._generateId();
                (this._elements[s] = e), i instanceof Function && ((this._callbacks[s] = this._callbacks[s] || {}), (this._callbacks[s][t] = this._callbacks[s][t] || []), this._callbacks[s][t].push(i));
            }),
            (l._removeCallback = function (e, t, i) {
                var s = this._getIDByElement(e),
                    n = this._callbacks[s];
                if (n && n[t]) {
                    var r = n[t].indexOf(i);
                    n[t].splice(r, 1), 0 === n[t].length && (delete n[t], this._isEmpty(n) && (delete this._callbacks[s], delete this._elements[s]));
                }
            }),
            (l._getIDByElement = function (e) {
                for (var t in this._elements) if (this._elements.hasOwnProperty(t) && this._elements[t] === e) return t;
            }),
            (l._getCallbacksByElement = function (e, t) {
                var i = this._getIDByElement(e);
                if (i) return this._callbacks[i][t];
            }),
            (l._generateId = function () {
                return (++n).toString();
            }),
            (l._isEmpty = function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0;
            }),
            (e.exports = new o());
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeCreate() {
                if (document.body._animInfo) (this.anim = document.body._animInfo.group.anim), (this.model.pageMetrics = this.anim.model.pageMetrics);
                else {
                    const e = i(80);
                    (this.viewportEmitterMicro = new e()), (this.viewportEmitterMicro.CHANGE_EVENTS = e.CHANGE_EVENTS);
                }
            },
            itemsCreated() {
                this.model.options.gum ||
                    this._isVue ||
                    (this.anim
                        ? (this.anim.on("ON_RESIZE_IMMEDIATE", this.onResizeImmediate), this.anim.on("ON_RESIZE_DEBOUNCED", this.onResizeDebounced), this.anim.on("ON_BREAKPOINT_CHANGE", this.onBreakpointChange))
                        : (window.addEventListener("resize", this.onResizeImmediate), this.viewportEmitterMicro.on(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange)),
                    document.fonts.ready.then(() => {
                        this.mounted();
                    }));
            },
            onResizeImmediate() {
                this.anim || (window.clearTimeout(this._resizeTimeout), (this._resizeTimeout = window.setTimeout(this.onResizeDebounced, 250)));
            },
            destroy() {
                this.anim
                    ? (this.anim.off("ON_RESIZE_IMMEDIATE", this.onResizeImmediate), this.anim.off("ON_RESIZE_DEBOUNCED", this.onResizeDebounced), this.anim.off("ON_BREAKPOINT_CHANGE", this.onBreakpointChange))
                    : (window.removeEventListener("resize", this.onResizeImmediate), this.viewportEmitterMicro.off(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            createItems() {
                if (this.items.length) this.itemsCreated();
                else {
                    if (!this.model.Item.ConstructorFunction) throw new ReferenceError("Accordion::AutoCreateItems - this.model.Item.ConstructorFunction is null");
                    0 === Object.keys(this.items).length &&
                        ((this.items = {}),
                        Array.from(this.el.querySelectorAll(this.model.Item.Selector)).forEach((e, t) => {
                            const i = this.model,
                                s = new this.model.Item.ConstructorFunction({ el: e, index: t, model: i }),
                                n = e.dataset.accordionItem;
                            (this.items[n] = s), (this.items[n].key = n);
                        }),
                        this.itemsCreated());
                }
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            beforeCreate() {
                this.analytics = { attributes: Object.assign({}, this.model.Analytics.Attributes), clickValues: {} };
            },
            itemsCreated() {
                Object.values(this.items).forEach((e) => {
                    const t = e.triggerEl.getAttribute(this.analytics.attributes.click);
                    (this.analytics.clickValues[e.key] = t), t && (e.isExpanded() && this.removeItemClickAttribute(e), this._bindAnalyticsItemEvents(e));
                });
            },
            onItemChangeCompleted() {
                this._updateToggleAllButtonClickAttribute();
            },
            destroy() {
                this.analytics = null;
            },
            _bindAnalyticsItemEvents(e) {
                e.on(this.model.Item.Events.expanded, () => this.removeItemClickAttribute(e)), e.on(this.model.Item.Events.collapsed, () => this.setItemClickAttribute(e, this.analytics.clickValues[e.key]));
            },
            _updateToggleAllButtonClickAttribute() {
                this.toggleAllButton &&
                    this.toggleAllButton.toggleEls &&
                    this.toggleAllButton.toggleEls.forEach((e) => {
                        const t = this.toggleAllButton.state,
                            i = this.model.Analytics.ToggleAllButton.StateString[t],
                            s = this.model.Analytics.ToggleAllButton.StateString.expandAll,
                            n = this.model.Analytics.ToggleAllButton.StateString.collapseAll;
                        let r = e.getAttribute(this.analytics.attributes.click),
                            a = e.getAttribute(this.analytics.attributes.title);
                        r && ((r = this._replaceStateString(r, i, s, n)), e.setAttribute(this.analytics.attributes.click, r)), a && ((a = this._replaceStateString(a, i, s, n)), e.setAttribute(this.analytics.attributes.title, a));
                    });
            },
            _replaceStateString(e, t) {
                let i = e;
                for (var s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) n[r - 2] = arguments[r];
                for (let e of n) i.includes(e) && (i = i.replace(e, t));
                return i;
            },
            setItemClickAttribute(e, t) {
                e.triggerEl.setAttribute(this.analytics.attributes.click, t);
            },
            removeItemClickAttribute(e) {
                e.triggerEl.removeAttribute(this.analytics.attributes.click);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            created() {
                (this.onAnimationEnd = this.onAnimationEnd.bind(this)), (this.animateHeight = { timeoutIDs: {}, expandedHeight: {} });
            },
            itemsCreated() {
                Object.values(this.items).forEach((e) => {
                    e.isCollapsed() && e.setTrayElHeight(0, !1, !1);
                });
            },
            mounted() {
                Object.values(this.items).forEach((e) => {
                    this.animateHeight.expandedHeight[e.key] = this.getExpandedHeight(e);
                });
            },
            onItemChangeInitiated(e) {
                this.animateHeight.timeoutIDs[e.item.key] = clearTimeout(this.animateHeight.timeoutIDs[e.item.key]);
            },
            animateItem(e) {
                const t = e.item,
                    i = this.getDuration(t.contentHeight),
                    s = this.items[t.parentKey];
                t.setTrayElHeight(t.contentHeight, "px"),
                    (t.trayEl.style.transitionDuration = `${i}ms`),
                    s && s.isAnimating() && ((this.animateHeight.timeoutIDs[s.key] = clearTimeout(this.animateHeight.timeoutIDs[s.key])), this.animateParentItem(t, i)),
                    t.isCollapsing() &&
                        requestAnimationFrame(() => {
                            t.setTrayElHeight(0);
                        });
                this.animateHeight.timeoutIDs[t.key] = (() => setTimeout(this.onAnimationEnd, i, t))();
            },
            onItemChangeCompleted(e) {
                const t = e.item;
                t.isExpandState() && t.setTrayElHeight("auto");
            },
            destroy() {
                for (const e of Object.values(this.animateHeight.timeoutIDs)) clearTimeout(e);
                this.animateHeight = null;
            },
            onResizeDebounced() {
                Object.values(this.items).forEach((e) => {
                    this.animateHeight.expandedHeight[e.key] = this.getExpandedHeight(e);
                });
            },
            onAnimationEnd(e) {
                this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, { accordion: this, item: e });
            },
            animateParentItem(e, t) {
                const i = this.items[e.parentKey];
                let s = this.animateHeight.expandedHeight[i.key];
                i.setTrayElHeight(s, "px"), (i.trayEl.style.transitionDuration = `${t}ms`);
                this.animateHeight.timeoutIDs[i.key] = (() => setTimeout(this.onAnimationEnd, t, i))();
            },
            getExpandedHeight(e) {
                e.measure();
                let t = e.contentHeight;
                return (
                    e.childKeys.forEach((e) => {
                        const i = this.items[e];
                        i.isCollapseState() && (i.measure(), (t += i.contentHeight));
                    }),
                    t
                );
            },
            getDuration(e) {
                return this.model.Tray.duration || Math.min(Math.max((e / 3) * 2, 400), 800);
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            mounted() {
                Object.values(this.items).forEach((e) => {
                    (e.iconEl = e.el.querySelector(this.model.Icon.Selector)),
                        this.model.Icon.Template && (e.iconEl.innerHTML = this.model.Icon.Template),
                        e.isExpanded() && e.iconEl.querySelector(this.model.Icon.ShapeSelector).setAttribute("points", this.model.Icon.Points.expanded),
                        (e.iconExpandAnimationEl = e.iconEl.querySelector(this.model.Icon.ExpandAnimationSelector)),
                        (e.iconCollapseAnimationEl = e.iconEl.querySelector(this.model.Icon.CollapseAnimationSelector));
                });
            },
            animateItem(e) {
                const t = e.item;
                t.isExpandState() ? t.iconExpandAnimationEl.beginElement() : t.iconCollapseAnimationEl.beginElement();
            },
        };
    },
    function (e, t, i) {
        "use strict";
        const s = i(96).enableTabbable,
            n = i(96).disableTabbable;
        e.exports = {
            onItemChangeInitiated(e) {
                const t = e.item;
                t.isExpandState() ? (t.initiateCollapse(), this.disableNestedTabbable(t)) : (t.initiateExpand(), this.enableNestedTabbable(t)), t.measure(), this.animateItem({ accordion: this, item: t });
            },
            onItemChangeCompleted(e) {
                const t = e.item;
                t.isExpandState() ? t.completeExpand() : t.completeCollapse();
            },
            enableNestedTabbable(e) {
                s(e.tabbableEls),
                    e.childKeys.forEach((e) => {
                        this.items[e].isExpandState() && s(this.items[e].tabbableEls);
                    });
            },
            disableNestedTabbable(e) {
                n(e.tabbableEls), e.childKeys.forEach((e) => n(this.items[e].tabbableEls));
            },
        };
    },
    function (e, t, i) {
        "use strict";
        e.exports = {
            created() {
                this.toggleItem = this.toggleItem.bind(this);
            },
            mounted() {
                (this.triggers = this.el.querySelectorAll(this.model.Trigger.Selector)),
                    this.triggers.forEach((e) => {
                        e.removeAttribute("role"), e.addEventListener("click", this.toggleItem);
                    });
            },
            destroy() {
                this.triggers.forEach((e) => {
                    e.removeEventListener("click", this.toggleItem);
                }),
                    (this.triggers = null);
            },
            toggleItem(e) {
                const t = e.currentTarget.parentElement.closest(this.model.Item.Selector).dataset.accordionItem,
                    i = this.items[t];
                this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, { accordion: this, item: i });
            },
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(1)),
            r = s(i(3)),
            a = i(7),
            o = s(i(143)),
            l = s(i(334)),
            h = s(i(335)),
            d = s(i(336)),
            c = s(i(144));
        class u extends r.default {
            constructor(e) {
                super(e), (this.aaps = []), (this.aapElements = this.el.querySelectorAll('[data-aap-level="1"]')), (this.isAnimating = !1);
            }
            mounted() {
                this.isEnhanced() && this.initEnhanced(),
                    this.aapElements.forEach((e) => {
                        let t = null;
                        switch (e.dataset.aapType) {
                            case "highlights":
                                t = new d.default(this, e);
                                break;
                            case "3d-viewer":
                                t = new o.default(this, e);
                                break;
                            case "base":
                                t = new l.default(this, e);
                                break;
                            case "base-link":
                                t = new h.default(this, e);
                                break;
                            case "standard-gallery":
                                t = new c.default(this, e);
                        }
                        t && (t.mounted(), this.aaps.push(t));
                    }),
                    this.setupEvents();
            }
            setupEvents() {
                this.anim.once(a.EVT_UNENHANCE, () => this.destroy());
            }
            destroy() {
                (0, n.default)(() => {
                    this.aaps.forEach((e) => {
                        e.isEnabled && e.destroy();
                    });
                });
            }
            initEnhanced() {
                (this.scrollGroup = this.anim.createScrollGroup(this.el)), (this.scrollGroup.name = "AAP L1 Triggers");
            }
            isEnhanced() {
                return document.documentElement.classList.contains(a.FEATURE_ENHANCED);
            }
            static IS_SUPPORTED() {
                return !0;
            }
        }
        t.default = u;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        class a extends n.default {
            constructor(e, t) {
                super(e, t, "textDriven"), (this.background = this.aap.querySelectorAll(".all-access-pass__background")[0]), (this.text = this.aap.querySelector(".aap-base__text")), (this.icon = this.aap.querySelector(".aap-base__icon"));
            }
            mounted() {
                super.mounted(), this.isEnhanced() && this.initEnhanced();
            }
            initEnhanced() {
                document.fonts.ready.then(() => {
                    this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup();
                });
            }
            _getBounds() {
                (this.background.style.transform = "scale(1)"), (this.background.style.width = this.background.style.height = "auto"), (this.backgroundBounds = this.background.getBoundingClientRect());
            }
            _setupTimeGroups() {
                (this.dismiss.name = `AAP Base: Dismiss - ${this.aap.id}`),
                    (0, r.setDefaultDismissKeyframes)(this.dismiss, this.background, this.backgroundBounds),
                    this.dismiss.addKeyframe(this.text, { start: 0, end: 0.25, opacity: [1, 0] }),
                    this.dismiss.addKeyframe(this.icon, { start: 0, end: 0.25, scale: [1, 0] }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP Base: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background),
                    this.introduce.addKeyframe(this.icon, { start: 0.7, end: 1, scale: [0, 1], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                    this.introduce.addKeyframe(this.background, {
                        start: 0.9,
                        end: 1.5,
                        width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                        height: ["css(--aap-min-height)", `${this.backgroundBounds.height}px`],
                        easeFunction: r.AAP_EASE_FUNCTIONS.SPRING,
                    }),
                    this.introduce.addKeyframe(this.text, { start: 1.2, end: 1.5, opacity: [0, 1] }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    });
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        class a extends n.default {
            constructor(e, t) {
                super(e, t, "textDriven"),
                    (this.background = this.aap.querySelectorAll(".all-access-pass__background")[0]),
                    (this.text = this.aap.querySelector(".aap-base-link__text")),
                    (this.icon = this.aap.querySelector(".aap-base-link__icon"));
            }
            mounted() {
                super.mounted(), this.isEnhanced() && this.initEnhanced();
            }
            initEnhanced() {
                document.fonts.ready.then(() => {
                    this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup();
                });
            }
            _getBounds() {
                (this.background.style.transform = "scale(1)"), (this.background.style.width = this.background.style.height = "auto"), (this.backgroundBounds = this.background.getBoundingClientRect());
            }
            _setupTimeGroups() {
                (this.dismiss.name = `AAP Base Link: Dismiss - ${this.aap.id}`),
                    (0, r.setDefaultDismissKeyframes)(this.dismiss, this.background, this.backgroundBounds),
                    this.dismiss.addKeyframe(this.text, { start: 0, end: 0.25, opacity: [1, 0] }),
                    this.dismiss.addKeyframe(this.icon, { start: 0, end: 0.25, scale: [1, 0] }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP Base Link: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background),
                    this.introduce.addKeyframe(this.icon, { start: 0.7, end: 1, scale: [0, 1], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                    this.introduce.addKeyframe(this.background, {
                        start: 0.9,
                        end: 1.5,
                        width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                        height: ["css(--aap-min-height)", `${this.backgroundBounds.height}px`],
                        easeFunction: r.AAP_EASE_FUNCTIONS.SPRING,
                    }),
                    this.introduce.addKeyframe(this.text, { start: 1.2, end: 1.5, opacity: [0, 1] }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    });
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        class a extends n.default {
            constructor(e, t) {
                super(e, t),
                    (this.background = this.aap.querySelectorAll(".all-access-pass__background")[0]),
                    (this.icon = this.aap.querySelector(".aap-highlights__icon")),
                    (this.playPauseButton = this.aap.querySelector(".play-pause-button-wrapper")),
                    (this.playPauseButtonIcon = this.playPauseButton.querySelector(".icons")),
                    (this.tabListWrapper = this.aap.querySelector(".tablist-wrapper"));
            }
            mounted() {
                super.mounted(), this.isEnhanced() && this.initEnhanced();
            }
            initEnhanced() {
                requestAnimationFrame(() => {
                    this.isEnhanced() && (this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup());
                });
            }
            _getBounds() {
                (this.playPauseButton.style.position = "relative"),
                    (this.background.style.transform = "scale(1)"),
                    (this.background.style.width = this.background.style.height = "auto"),
                    (this.backgroundBounds = this.background.getBoundingClientRect()),
                    (this.playPauseButton.style.position = "absolute");
            }
            _setupTimeGroups() {
                this.isEnhanced() &&
                    ((this.dismiss.name = `AAP Highlights: Dismiss - ${this.aap.id}`),
                    this.dismiss.addKeyframe(this.playPauseButtonIcon, { start: 0, end: 0.25, opacity: [1, 0] }),
                    this.dismiss.addKeyframe(this.tabListWrapper, { start: 0, end: 0.25, opacity: [1, 0] }),
                    this.dismiss.addKeyframe(this.background, {
                        start: 0,
                        end: 0.5,
                        width: [`${this.backgroundBounds.width}px`, "css(--aap-min-height)"],
                        x: ["(-7px - (css(--aap-min-height) * 0.5)) * css(--ltr)", 0],
                        easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER,
                    }),
                    this.dismiss.addKeyframe(this.playPauseButton, {
                        start: 0,
                        end: 0.5,
                        x: [`(7px + ${this.backgroundBounds.width}px -\n          css(--aap-min-height) +\n          css(--aap-min-height) * 0.5\n        ) * css(--ltr)`, 0],
                        easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER,
                    }),
                    this.dismiss.addKeyframe(this.background, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.playPauseButton, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP Highlights: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background),
                    this.introduce.addKeyframe(this.playPauseButton, { start: 0, end: 0.8, scale: [0.01, 1], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                    this.introduce.addKeyframe(this.playPauseButton, {
                        start: 0.7,
                        end: 1.3,
                        x: [0, `(7px + ${this.backgroundBounds.width}px -\n          css(--aap-min-height) +\n          css(--aap-min-height) * 0.5\n        ) * css(--ltr)`],
                        easeFunction: r.AAP_EASE_FUNCTIONS.SPRING,
                    }),
                    this.introduce.addKeyframe(this.background, {
                        start: 0.7,
                        end: 1.3,
                        width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                        x: [0, "(-7px - (css(--aap-min-height) * 0.5)) * css(--ltr)"],
                        easeFunction: r.AAP_EASE_FUNCTIONS.SPRING,
                    }),
                    this.introduce.addKeyframe(this.tabListWrapper, { start: 1, end: 1.5, opacity: [0, 1] }),
                    this.introduce.addKeyframe(this.playPauseButtonIcon, { start: 1, end: 1.5, opacity: [0, 1] }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    }));
            }
            destroy() {
                return (
                    (this.playPauseButton.style.position = "relative"),
                    requestAnimationFrame(() => {
                        (this.playPauseButton.style.transform = "none"), (this.background.style.transform = "none");
                    }),
                    super.destroy()
                );
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(1)),
            r = s(i(3)),
            a = i(7),
            o = s(i(143)),
            l = s(i(338)),
            h = s(i(339)),
            d = s(i(144));
        class c extends r.default {
            constructor(e) {
                super(e), (this.aaps = []), (this.modal = null), (this.aapElements = document.querySelectorAll(`[data-modal-name="${this.el.dataset.modalName}-modal"] [data-aap-level="2"]`)), (this.isAnimating = !1);
            }
            mounted() {
                this.aapElements.forEach((e) => {
                    let t = null;
                    switch (e.dataset.aapType) {
                        case "l2-step-toggle":
                            t = new h.default(this, e);
                            break;
                        case "l2-play-pause":
                            t = new l.default(this, e);
                            break;
                        case "3d-viewer":
                            t = new o.default(this, e);
                            break;
                        case "standard-gallery":
                            t = new d.default(this, e);
                    }
                    t && this.aaps.push(t);
                }),
                    this.setupEvents();
            }
            setupEvents() {
                this.anim.once(a.EVT_UNENHANCE, () => this.destroy()),
                    this.anim.on(`modal-created-${this.el.dataset.modalName}`, (e) => {
                        (this.modal = e),
                            this.isEnhanced() && this.initEnhanced(),
                            this.aaps.forEach((t) => {
                                (t.modalComponent = e), t.mounted();
                            }),
                            this.isEnhanced() &&
                                e.elements.container.addEventListener("scroll", () => {
                                    this.scrollGroup.updateTimeline();
                                }),
                            e.on("open", () => {
                                this.isEnhanced() &&
                                    (this.scrollGroup.forceUpdate(),
                                    this.forceResize(),
                                    this.aaps.forEach((e) => {
                                        const t = e.preload;
                                        e.isEnhanced() &&
                                            (e.needsUpdate && "3d-viewer" !== e.aap.dataset.aapType && t && e.initEnhanced(),
                                            requestAnimationFrame(() => {
                                                (e.aap.style.opacity = "0"), e.inRange && !e.needsUpdate && "3d-viewer" !== e.aap.dataset.aapType && t && ((e.isAnimating = !0), e.introduceTimeline());
                                            }));
                                    }));
                            }),
                            e.on("close", () => {
                                this.aaps.forEach((e) => {
                                    e.reset && e.reset(), e.isEnhanced() && (e.aap.classList.add("inactive"), (e.isAnimating = !1), (e.isActive = !1), e.dismiss.pause(), e.introduce.pause(), e.introduce.progress(0));
                                });
                            });
                    });
            }
            destroy() {
                (0, n.default)(() => {
                    this.aaps.forEach((e) => {
                        e.destroy();
                    });
                });
            }
            initEnhanced() {
                (this.scrollGroup = this.anim.createScrollGroup(this.modal.elements.container, { getPosition: () => this.modal.elements.container.scrollTop, getMaxPosition: () => this.modal.elements.container.scrollHeight })),
                    (this.scrollGroup.name = `AAP L2 Triggers - ${this.modal.elements.content.dataset.modalName}`);
            }
            isEnhanced() {
                return document.documentElement.classList.contains(a.FEATURE_ENHANCED);
            }
            forceResize(e) {
                this.isEnhanced() &&
                    this.aaps.forEach((e) => {
                        e.onResizeDebounced && e.onResizeDebounced(this.pageMetrics);
                    });
            }
            static IS_SUPPORTED() {
                return !0;
            }
        }
        t.default = c;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        class a extends n.default {
            constructor(e, t) {
                super(e, t),
                    (this.background = this.aap.querySelectorAll(".all-access-pass__background")[0]),
                    (this.icon = this.aap.querySelector(".aap-l2-close__icon svg")),
                    (this.playPauseButton = this.aap.querySelector(".aap-l2-play-pause")),
                    (this.playPauseButtonIcon = this.playPauseButton.querySelector(".icons")),
                    (this.playPauseButtonProgress = this.playPauseButton.querySelector(".play-pause-progress")),
                    (this.modal = this.aap.closest(".modal")),
                    (this.needsUpdate = !0),
                    (this.reset = this.reset.bind(this)),
                    (this.aap.style.display = "none");
            }
            mounted() {
                super.mounted();
            }
            initEnhanced() {
                this._setupTimeGroups(), this._setupScrollGroup(), (this.needsUpdate = !1);
            }
            loadEnhanced() {
                this.resetAll();
            }
            loadFallback() {
                this.destroy(), (this.aap.style.display = "none"), (this.destroyed = !0);
            }
            resetAll() {
                (this.aap.style.display = "flex"),
                    this.reset(),
                    this.destroy().then(() => {
                        this.isEnhanced() && ((this.introduce = this.anim.createTimeGroup()), (this.dismiss = this.anim.createTimeGroup()), this.initEnhanced(), (this.isAnimating = !1)), (this.destroyed = !1);
                    });
            }
            _setupTimeGroups() {
                (this.dismiss.name = `AAP L2 Play / Pause: Dismiss - ${this.aap.id}`),
                    this.dismiss.addKeyframe(this.playPauseButtonProgress, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.playPauseButtonIcon, { start: 0, end: 0.25, scale: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.background, { start: 0.25, end: 0.75, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP L2 Play / Pause: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background),
                    this.introduce.addKeyframe(this.playPauseButtonIcon, { start: 0.7, end: 1.3, scale: [0, 1], easeFunction: "spring(100, 1, 10, 0)" }),
                    this.introduce.addKeyframe(this.playPauseButtonProgress, { start: 1, end: 1.5, opacity: [0, 1], easeFunction: "easeOutSin" }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    });
            }
            reset() {
                this.playPauseButtonProgress.style.setProperty("--aap-play-pause-progress", 0);
            }
            destroy() {
                return (this.playPauseButton.style.position = "relative"), super.destroy();
            }
        }
        t.default = a;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(26)),
            r = i(27);
        const a = i(1),
            o = i(24);
        class l extends n.default {
            constructor(e, t) {
                super(e, t, "textDriven"),
                    (this.background = this.aap.querySelectorAll(".all-access-pass__background")[0]),
                    (this.container = this.aap.parentNode),
                    (this.toggle = this.aap.querySelector(".aap-l2-step-toggle")),
                    (this.toggleOptions = this.aap.querySelectorAll("input")),
                    (this.toggleBubble = this.aap.querySelector(".aap-l2-step-toggle__bubble-inner")),
                    (this.selected = null),
                    (this.selectedIndex = 0),
                    (this.needsUpdate = !0),
                    (this.modal = this.aap.closest(".modal")),
                    (this.movementRateMultiplier = 1),
                    (this.velocityMultiplier = 2),
                    (this.target = 0),
                    (this.dragDrawId = -1),
                    (this.bubbleHintOffset = 0),
                    (this.aapOffset = 0),
                    (this.changeEvent = new Event("change")),
                    (this.inputStart = 0),
                    (this.swipeVelocity = 0),
                    (this.ltr = getComputedStyle(this.toggle).getPropertyValue("--ltr")),
                    (this._onStartDrag = this._onStartDrag.bind(this)),
                    (this._onDrag = this._onDrag.bind(this)),
                    (this._onStopDrag = this._onStopDrag.bind(this));
            }
            mounted() {
                this._setupToggle(), this._setupGesture(), super.mounted();
            }
            reset() {
                const e = this.toggleOptions[0];
                e.checked = !0;
                const t = new Event("change");
                e.dispatchEvent(t);
            }
            initEnhanced() {
                this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup(), (this.needsUpdate = !1);
            }
            _getBounds() {
                (this.background.style.transform = "scale(1)"),
                    (this.toggle.style.width = this.toggle.style.height = "auto"),
                    (this.toggleBounds = this.toggle.getBoundingClientRect()),
                    this.toggle.style.setProperty("--toggle-width", `${this.toggleBounds.width}px`),
                    this.toggleOptions.forEach((e) => {
                        "1" === this.ltr
                            ? e.style.setProperty("--option-offset", `${e.parentNode.offsetLeft}px`)
                            : e.style.setProperty("--option-offset", Math.floor(e.parentNode.parentNode.getBoundingClientRect().right - e.parentNode.getBoundingClientRect().right) - 1 + "px"),
                            e.style.setProperty("--option-width", `${e.parentNode.offsetWidth}px`);
                    }),
                    this.toggle.style.setProperty("--bubble-position", `${this.toggleOptions[0].style.getPropertyValue("--option-offset")}`),
                    this.toggle.style.setProperty("--bubble-width", `${this.toggleOptions[0].style.getPropertyValue("--option-width")}`);
            }
            _setupToggle() {
                this.toggleOptions.forEach((e, t) => {
                    e.addEventListener("change", () => {
                        this.toggle.style.setProperty("--bubble-position", `${e.style.getPropertyValue("--option-offset")}`),
                            this.toggle.style.setProperty("--bubble-width", `${e.style.getPropertyValue("--option-width")}`),
                            e.checked && ((this.selected = e), (this.selectedIndex = t));
                    });
                });
            }
            _setupGesture() {
                this.toggle.addEventListener("touchstart", this._onStartDrag);
            }
            _onStartDrag(e) {
                !0 != (!e.touches && 1 !== e.which) &&
                    ((this.lastInteractionEvent = e),
                    (this.swipeVelocity = 0),
                    (this.inputStart = e.touches[0].screenX),
                    window.addEventListener("touchmove", this._onDrag, { passive: !1 }),
                    window.addEventListener("touchend", this._onStopDrag));
            }
            _onDrag(e) {
                e.cancelable && e.preventDefault();
                const t = e.touches[0].screenX,
                    i = t - this.inputStart;
                (this.inputStart = t),
                    (this.target += i * this.movementRateMultiplier),
                    (this.swipeVelocity = i * this.velocityMultiplier),
                    (this.nextIndex = "1" === this.ltr ? this.selectedIndex + 1 : this.selectedIndex - 1),
                    (this.prevIndex = "1" === this.ltr ? this.selectedIndex - 1 : this.selectedIndex + 1),
                    o(this.dragDrawId),
                    (this.dragDrawId = a(() => {
                        (this.target > 56 || this.swipeVelocity > 50) && this.toggleOptions[this.nextIndex]
                            ? ((this.toggleOptions[this.nextIndex].checked = !0), this.toggleOptions[this.nextIndex].dispatchEvent(this.changeEvent), (this.target = 0), (this.bubbleHintOffset = 0))
                            : (this.target < -56 || this.swipeVelocity < -50) && this.toggleOptions[this.prevIndex]
                            ? ((this.toggleOptions[this.prevIndex].checked = !0), this.toggleOptions[this.prevIndex].dispatchEvent(this.changeEvent), (this.target = 0), (this.bubbleHintOffset = 0))
                            : (this.target > 0 && this.toggleOptions[this.nextIndex]) || (this.target < 0 && this.toggleOptions[this.prevIndex])
                            ? ((this.bubbleHintOffset = (this.target / 56) * 4), (this.aapOffset = 0), this.container.style.setProperty("--aap-offset", `${this.aapOffset}`))
                            : ((this.bubbleHintOffset = 0), (this.aapOffset = (this.target / 56) * 2), this.container.style.setProperty("--aap-offset", `${this.aapOffset}`)),
                            this.toggle.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`);
                    }));
            }
            _onStopDrag(e) {
                window.removeEventListener("touchmove", this._onDrag),
                    window.removeEventListener("touchend", this._onStopDrag),
                    (this.lastInteractionEvent = e),
                    (this.target = 0),
                    (this.swipeVelocity = 0),
                    (this.inputStart = 0),
                    (this.bubbleHintOffset = 0),
                    (this.aapOffset = 0),
                    o(this.dragDrawId),
                    (this.dragDrawId = a(() => {
                        this.toggle.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`), this.container.style.setProperty("--aap-offset", `${this.aapOffset}`);
                    }));
            }
            _setupTimeGroups() {
                (this.dismiss.name = `AAP L2 Step Toggle: Dismiss - ${this.aap.id}`),
                    this.dismiss.addKeyframe(this.toggleBubble, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.toggleOptions.forEach((e) => {
                        this.dismiss.addKeyframe(e.parentNode, { start: 0, end: 0.25, opacity: [1, 0], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER });
                    }),
                    this.dismiss.addKeyframe(this.toggle, { start: 0, end: 0.5, "--toggle-color": [1, 0], width: [`${this.toggleBounds.width}px`, "css(--aap-min-height)"], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.addKeyframe(this.background, { start: 0.5, end: 1, scale: [1, 0.01], easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER }),
                    this.dismiss.on("complete", () => {
                        (this.isAnimating = !1), this.aap.classList.add("inactive"), this.inRange && ((this.isAnimating = !0), this.introduceTimeline());
                    }),
                    (this.introduce.name = `AAP L2 Step Toggle: Introduce - ${this.aap.id}`),
                    (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background),
                    this.introduce.addKeyframe(this.toggle, { start: 0.7, end: 1.3, "--toggle-color": [0, 1], width: ["css(--aap-min-height)", `${this.toggleBounds.width}px`], easeFunction: r.AAP_EASE_FUNCTIONS.SPRING }),
                    this.toggleOptions.forEach((e, t) => {
                        const i = 0.05 * (t + 1);
                        this.introduce.addKeyframe(e.parentNode, { start: 0.7 + i, end: 1.3 + i, opacity: [0, 1], scale: [0.5, 1], easeFunction: "easeOutQuint" });
                    }),
                    this.introduce.addKeyframe(this.toggleBubble, { start: 0.7, end: 1.3, opacity: [0, 1], easeFunction: "easeOutQuint" }),
                    this.introduce.on("complete", () => {
                        (this.isAnimating = !1), this.inRange || ((this.isAnimating = !0), this.dismissTimeline());
                    }),
                    requestAnimationFrame(() => {
                        this.dismiss.progress(1);
                    });
            }
            destroy() {
                return (this.toggle.style.position = "relative"), super.destroy();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(3)),
            r = i(4),
            a = i(44);
        class o extends n.default {
            constructor(e) {
                super(e),
                    (this._els = null),
                    (this._scrollGroup = null),
                    (this.isL2 = this.el.closest(r.MODAL_SELECTOR)),
                    this.isL2
                        ? ((this.modal = (0, a.getModalComponentRef)(this.gum, this.el)), (this._scrollGroup = this.modal.animScrollGroup))
                        : ((this._scrollGroup = this.anim.createScrollGroup(this.el)), (this._scrollGroup.name = "Device Anim Component"));
            }
            mounted() {
                this._els = this.el.querySelectorAll(".device-anim");
                const e = { start: "t - 75vh", toggle: !0, cssClass: "show" };
                this._els.forEach((t) => {
                    this._scrollGroup.addKeyframe(t, e);
                });
            }
            static IS_SUPPORTED() {
                return !0;
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(3)),
            r = i(4),
            a = i(44);
        class o extends n.default {
            constructor(e) {
                super(e),
                    (this._els1 = null),
                    (this._els2 = null),
                    (this._els3 = null),
                    (this._scrollGroup = null),
                    (this.isL2 = this.el.closest(r.MODAL_SELECTOR)),
                    this.isL2
                        ? ((this.modal = (0, a.getModalComponentRef)(this.gum, this.el)), (this._scrollGroup = this.modal.animScrollGroup))
                        : ((this._scrollGroup = this.anim.createScrollGroup(this.el)), (this._scrollGroup.name = "Text Anim Component"));
            }
            mounted() {
                (this._els1 = this.el.querySelectorAll("[data-textanim-1]")), (this._els2 = this.el.querySelectorAll("[data-textanim-2]")), (this._els3 = this.el.querySelectorAll("[data-textanim-3]"));
                const e = { start: "t-75vh", toggle: !0, style: { on: { transform: "translateY(0)", opacity: 1, pointerEvents: "auto" } } },
                    t = { ...e };
                (t.start = "t-65vh"), (t.breakpointMask = "LM");
                const i = { ...e };
                (i.start = "t-55vh"), (i.breakpointMask = "LM");
                const s = { ...e };
                (s.breakpointMask = "S"),
                    this._els1.forEach((t) => {
                        this._scrollGroup.addKeyframe(t, e);
                    }),
                    this._els2.forEach((e) => {
                        this._scrollGroup.addKeyframe(e, t);
                    }),
                    this._els2.forEach((e) => {
                        this._scrollGroup.addKeyframe(e, s);
                    }),
                    this._els3.forEach((e) => {
                        this._scrollGroup.addKeyframe(e, i);
                    }),
                    this._els3.forEach((e) => {
                        this._scrollGroup.addKeyframe(e, s);
                    });
            }
            static IS_SUPPORTED() {
                return !document.documentElement.classList.contains("reduced-motion");
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        const s = i(3),
            n = { start: "t - 150vh", end: "b + 50vh", cssClass: "will-change" };
        e.exports = class extends s {
            constructor(e) {
                super(e), (this.scrollGroup = this.anim.getGroupForTarget(this.el));
                const t = { anchors: this.el, toggle: !0 },
                    i = {};
                Object.keys(this.el.dataset).forEach((e) => {
                    if (e.includes("willChange")) {
                        let t = e.substring(10);
                        (t = t.charAt(0).toLowerCase() + t.substring(1)), (i[t] = this.el.dataset[e]);
                    }
                }),
                    (this.willChangeOptions = Object.assign(t, n, i));
            }
            mounted() {
                this.setupKeyframes();
            }
            setupKeyframes() {
                this.scrollGroup.addKeyframe(this.el, this.willChangeOptions);
            }
            static IS_SUPPORTED() {
                return !0;
            }
        };
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(94)),
            r = i(344),
            a = s(i(347));
        const o = { AnimLoad: r.AnimLoad, AnimPlay: r.AnimPlay, AnimPlayOnce: r.AnimPlayOnce, AnimPlayReset: r.AnimPlayReset, ViewportSourceOnce: r.ViewportSourceOnce, WelcomeBuildIn: a.default };
        class l extends n.default {
            addCustomPlugins() {
                (this.productPagePlugins = o), this.injectPluginsByAttribute();
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "AnimLoad", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(t, "AnimPlay", {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            }),
            Object.defineProperty(t, "AnimPlayOnce", {
                enumerable: !0,
                get: function () {
                    return a.default;
                },
            }),
            Object.defineProperty(t, "AnimPlayReset", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
            Object.defineProperty(t, "ObjectFitFix", {
                enumerable: !0,
                get: function () {
                    return l.default;
                },
            }),
            Object.defineProperty(t, "ViewportSourceOnce", {
                enumerable: !0,
                get: function () {
                    return h.default;
                },
            });
        var n = s(i(130)),
            r = s(i(55)),
            a = s(i(345)),
            o = s(i(346)),
            l = s(i(129)),
            h = s(i(131));
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(55));
        class r extends n.default {
            constructor(e) {
                super(e), (this._playedOnce = !1);
            }
            _onPlayKeyframeEnter() {
                return !1 === this._playedOnce ? ((this._playedOnce = !0), super._onPlayKeyframeEnter()) : null;
            }
        }
        t.default = r;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(41)),
            r = s(i(55));
        const a = { start: "t - 100vh", end: "b" };
        class o extends r.default {
            _initialize() {
                (this._onPlayKeyframeEnter = this._onPlayKeyframeEnter.bind(this)), (this._onPlayKeyframeExit = this._onPlayKeyframeExit.bind(this)), (this._onResetKeyframe = this._onResetKeyframe.bind(this));
                const e = this.media.el.dataset;
                if (((this._autoPlayWithReducedMotion = (0, n.default)(e, this.options, "autoPlayWithReducedMotion", !1)), !this._autoPlayWithReducedMotion && r.default.prefersReducedMotion)) return;
                (this._pauseOnExit = (0, n.default)(e, this.options, "pauseOnExit", !1)), (this._resetOnExit = (0, n.default)(e, this.options, "resetOnExit", !1)), (this._resetByKeyframe = !0);
                const t = (0, n.default)(e, this.options, "playKeyframe", a);
                if (
                    (t.event || (t.event = "inline-media-play-kf"),
                    (this._playKeyframe = this._scrollGroup.addKeyframe(this.media.el, t)),
                    this._playKeyframe.controller.on(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter),
                    this._playKeyframe.controller.on(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit),
                    this._resetOnExit)
                ) {
                    const t = (0, n.default)(e, this.options, "resetKeyframe", a);
                    t.event || (t.event = "inline-media-reset-kf"), (this._resetKeyframe = this._scrollGroup.addKeyframe(this.media.el, t)), this._resetKeyframe.controller.on(`${this._resetKeyframe.event}:exit`, this._onResetKeyframe);
                }
            }
            async _onPlayKeyframeEnter(e) {
                if (((this._inFrame = !0), !this._paused && (this._loaded || (await this.media.load(), (this._loaded = !0)), this._inFrame)))
                    try {
                        this._resetByKeyframe && (await this.media.play(), (this._resetByKeyframe = !1));
                    } catch (e) {}
            }
            _onPlayKeyframeExit(e) {
                (this._inFrame = !1), this._loaded && this.media.el.paused && !this.media.el.ended ? (this._paused = !0) : this._pauseOnExit && ((this._paused = !1), this.media.el.pause());
            }
            _onResetKeyframe(e) {
                this._loaded && this._resetOnExit && ((this._resetByKeyframe = !0), (this._paused = !1), this.media.el.pause(), (this.media.el.currentTime = 0));
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = i(53),
            r = s(i(12)),
            a = s(i(43));
        class o extends n.Plugin {
            constructor(e) {
                super(e),
                    (this._els = { el: e.el, startFrame: document.querySelector(".welcome__video-media .start-frame"), endFrame: document.querySelector(".welcome__video-media .end-frame") }),
                    this.media.on(r.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange.bind(this));
            }
            _onPlaybackStateChange() {
                this.media.playbackState === a.default.ENDED && setTimeout(() => this.media.unload(), 500);
            }
        }
        t.default = o;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(23));
        const r = i(7).FEATURE_ENHANCED,
            a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            o = { start: "t - 75vh" };
        class l extends n.default {
            constructor(e) {
                super(e),
                    (this.enhancedScrollGroup = this.anim.createScrollGroup(this.el)),
                    (this.enhancedScrollGroup.name = "Battery - StatCounter - Enhanced"),
                    (this.animationDuration = Number(this.el.getAttribute("data-animation-duration")) || 2),
                    (this.triggerPoint = this.el.getAttribute("data-trigger-keyframe")),
                    (this.countStartValue = Number(this.el.getAttribute("data-count-start")) || 0),
                    (this.digitsArray = a),
                    (this._els = { statValueWrapper: this.el.querySelector(".stat-value"), statCount: this.el.querySelector(".stat-count"), statContent: this.el.querySelector(".stat-content") });
            }
            mounted() {
                this.createMarkup(),
                    this.digitWrappers.forEach((e, t) => {
                        this.applyTranslateValue({ currentNum: this.countStartValue, decimalPlace: this.digitWrappers.length - t, wrapperIndex: t });
                    });
                const e = Object.assign(
                    {},
                    o,
                    {
                        group: this.enhancedScrollGroup,
                        onEventOnce: () => {
                            this.animateCounter();
                        },
                    },
                    JSON.parse(this.el.getAttribute("data-trigger-keyframe"))
                );
                this.addDiscreteEvent(e);
            }
            createMarkup() {
                (this.statDigits = String(this._els.statCount.innerText).split("").map(Number)), (this.statCount = Number(this._els.statCount.innerText)), (this._els.statCount.innerText = ""), (this.digitWrappers = []);
                const e = [];
                this.statDigits.forEach((t, i) => {
                    const { wrapper: s } = this.createDigitsWrapper();
                    s.classList.add(`digit-${t}`),
                        s.setAttribute("aria-hidden", !0),
                        this._els.statCount.appendChild(s),
                        i === this.statDigits.length - 1 && this._els.statContent.classList.add(`last-digit-${t}`),
                        this.digitWrappers.push(s);
                    const n = t * Math.pow(10, this.statDigits.length - i - 1);
                    e.push(n);
                }),
                    (this.maxValues = []),
                    e.forEach((t, i) => {
                        let s = 0;
                        for (let t = i; t >= 0; t--) s += e[t];
                        this.maxValues.push(s);
                    });
            }
            createDigitsWrapper() {
                const e = document.createElement("span");
                return (
                    e.classList.add("digits-wrapper"),
                    this.digitsArray.forEach((t) => {
                        const i = document.createElement("span");
                        i.classList.add("digit"), (i.innerText = t), e.appendChild(i);
                    }),
                    { wrapper: e }
                );
            }
            animateCounter() {
                const e = this.countStartValue,
                    t = this.statCount;
                (this.counterTl = this.anim.createTimeGroup()),
                    this.digitWrappers.forEach((i, s) => {
                        this.addKeyframe({ el: this.digitWrappers[s], group: this.counterTl, start: 0, end: this.animationDuration, stat: [e, t], easeFunction: "easeOutSin", preserveState: !0 }).controller.on("draw", (e) => {
                            const t = e.tweenProps.stat.current;
                            this.applyTranslateValue({ currentNum: t, decimalPlace: this.digitWrappers.length - s, wrapperIndex: s });
                        });
                    }),
                    this.addDiscreteEvent({
                        group: this.counterTl,
                        start: this.animationDuration + 0.05,
                        event: "complete",
                        onEvent: () => {
                            this.digitWrappers.forEach((e, i) => {
                                this.applyTranslateValue({ currentNum: t, decimalPlace: this.digitWrappers.length - i, wrapperIndex: i });
                            }),
                                this.counterTl.remove();
                        },
                    }),
                    this.counterTl.restart();
            }
            resetCounter() {
                this.counterTl && this.counterTl.remove(),
                    this.digitWrappers.forEach((e, t) => {
                        (e.style.transition = "none"),
                            this.applyTranslateValue({ currentNum: this.countStartValue, decimalPlace: this.digitWrappers.length - t, wrapperIndex: t }),
                            requestAnimationFrame(() => {
                                e.style.removeProperty("transition");
                            });
                    });
            }
            applyTranslateValue(e) {
                let { currentNum: t, decimalPlace: i, wrapperIndex: s } = e;
                const n = this.digitWrappers[s];
                let r;
                const a = Math.pow(10, i - 1);
                (r = (t % (10 * a)) / a), t > this.maxValues[s] && (r = this.statDigits[s]), (n.style.transform = `translateY(-${r}em)`);
            }
            destroy() {
                super.destroy(), (this._els.statCount.innerHTML = this.statCount);
            }
            static IS_SUPPORTED() {
                return document.documentElement.classList.contains(r);
            }
        }
        t.default = l;
    },
    function (e, t, i) {
        "use strict";
        var s = i(0);
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var n = s(i(23));
        class r extends n.default {
            constructor(e) {
                super(e),
                    (this._els = { tradeInBanner: document.querySelector(".trade-in-ribbon"), lockup: e.el.querySelector(".welcome__lockup") }),
                    (this._hiddenEls = Object.values(this._els).filter((e) => !!e)),
                    (this.scrollGroup = this.anim.createScrollGroup(this.el)),
                    (this._showAllHiddenElements = this._showAllHiddenElements.bind(this)),
                    (this._onTabNav = this._onTabNav.bind(this));
            }
            mounted() {
                this._setupLockupTradeInBannerAbortAnimation(),
                    this._setupTabNavHandler(),
                    setTimeout(() => {
                        this._destroyTabNavHandler(), this._showAllHiddenElements();
                    }, 1e3);
            }
            onBreakpointChange() {
                this._showAllHiddenElements();
            }
            _showAllHiddenElements() {
                this._hiddenEls.forEach((e) => e.classList.add("show"));
            }
            _onTabNav(e) {
                9 === e.keyCode && (this._showAllHiddenElements(), this._destroyTabNavHandler(), this.scrollGroup.remove());
            }
            _setupTabNavHandler() {
                document.addEventListener("keydown", this._onTabNav);
            }
            _destroyTabNavHandler() {
                document.removeEventListener("keydown", this._onTabNav);
            }
            _setupLockupTradeInBannerAbortAnimation() {
                this._hiddenEls.forEach((e) => {
                    this.scrollGroup.addKeyframe(e, { start: "1px", cssClass: "show" });
                });
            }
            static IS_SUPPORTED() {
                return document.documentElement.classList.contains("no-reduced-motion");
            }
        }
        t.default = r;
    },
]);
