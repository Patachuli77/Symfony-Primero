class SlidingMenu {
    constructor(container,toggler){
        
        this.container = container;
        this.toggler = toggler;
        this.active = false;
    }
    show(){
        this.active=true;
        this.container.addClass("sliding-menu__open");
        this.run();
        
    }
    hide(){
        this.active=false;
        this.container.removeClass("sliding-menu__open");
        this.run();
    }
    run(){
        this.toggler.unbind('click')

        if(this.active==false){
            this.toggler.click(this.show.bind(this))
        }else{
            this.toggler.click(this.hide.bind(this))
        }
    }
}

jQuery(function() {
    console.log("Hello SlidingMenu");

    const slidingMenu = new SlidingMenu($('#sliding-menu'), $('#menu-toggler'));
    slidingMenu.run();
});


// ...