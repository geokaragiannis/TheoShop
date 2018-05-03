(function () {

  var data = {
    parent_items: {
      'drinks': ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Cold Coffees', 'Cold Drinks', 'Iced Teas'],
      'food': ['Breakfast', 'Bakery', 'Lunch', 'Snacks', 'Sweets', 'Yogurt']
    },

    sub_items: {
      'hot_coffees': ['Capuccino', 'Espresso', 'Latte', 'Americano']
    }
    // drinks: ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Cold Coffees', 'Cold Drinks', 'Iced Teas'],
    // food: ['Breakfast', 'Bakery', 'Lunch', 'Snacks', 'Sweets', 'Yogurt']

  };

  function init() {

    // Init F7 Vue Plugin
    Vue.use(Framework7Vue)

    // Init Page Components
    Vue.component('page-main', {
      template: '#page-main',
      data: function(){
        return data;
      },
      methods: {
        goToCart: function(){

        }

      }
    })
    Vue.component('login-screen', {
      template: '#login-screen'
    })
    Vue.component('sub-menu', {
      template: '#sub-menu'
    })
    Vue.component('cart', {
      template: '#cart'
    })
    Vue.component('page-dynamic-routing', {
      template: '#page-dynamic-routing'
    })


    // Init App
    new Vue({
      el: '#app',
      // Init Framework7 by passing parameters here
      framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: [
          {
            path: '/main/',
            component: 'page-main'
          },
          {
            path: '/login/',
            component: 'login-screen'
          },
          {
            path: '/sub-menu/',
            component: 'sub-menu'
          },
          {
            path: '/cart/',
            component: 'cart'
          },
          {
            path: '/dynamic-route/blog/:blogId/post/:postId/',
            component: 'page-dynamic-routing'
          }
        ],
      }
    });

  }



  // Handle device ready event
  // Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
  document.addEventListener('deviceready', init, false)



})();
