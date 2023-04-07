var Hawk = {};

Hawk.mergeObjects = function(mainObject, object) {
    var result = {};

    if (object === undefined) {
        return mainObject;
    }

    for (var property in mainObject) {
        if (mainObject.hasOwnProperty(property)) {
            result[property] = (object.hasOwnProperty(property)) ? object[property] : mainObject[property];
        }
    }

    return result;
}

class SlidingMenu {
    constructor(container, toggler, options) {
        this.container = container;
        this.toggler = toggler;

        this.active = false;

        this.defaultOptions = {
            slidingMenuActiveClass: "sliding-menu--open",
            onShow: (slidingMenu) => {

            },
            onHide: (slidingMenu) => {}
        };

        this.options = Hawk.mergeObjects(this.defaultOptions, options);
    }

    show() {
        this.active=true;

        this.container.addClass(this.options.slidingMenuActiveClass); 
    
        this.options.onShow(this);
    }

    hide() {
        this.active=false;

        this.container.removeClass(this.options.slidingMenuActiveClass);

        this.options.onHide(this);
    }

    isActive() {
        return this.active;
    }

    run() {
        this.toggler.click((e) => {
            if (this.active) {
                this.hide();
            } else {
                this.show();
            }
        });
    }
}

jQuery(function() {
    const slidingMenu = new SlidingMenu($('#sliding-menu'), $('#menu-toggler'), {
        onShow: (slidingMenu) => {
            slidingMenu.toggler.addClass("open"); 

        },
        onHide: (slidingMenu) => {
            slidingMenu.toggler.removeClass("open"); 

        }
    });

    slidingMenu.run();
});