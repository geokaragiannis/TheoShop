(function () {

  var data = {
    parent_items: ['Drinks', 'Food', 'Products'],
    children_items: {
      'Drinks': ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Cold Coffees', 'Cold Drinks', 'Iced Teas'],
      'Food': ['Breakfast', 'Bakery', 'Lunch', 'Snacks', 'Sweets', 'Yogurt'],
      'Products': ['Honey', 'Cream', 'Feta Cheese']
    },

    sub_items: {
      'hot_coffees': ['Capuccino', 'Espresso', 'Latte', 'Americano']
    },

    demo_list: ['Capuccino', 'Espresso', 'Latte', 'Americano'],
    sub_demo_list: {
      'Capuccino': ['Cap 1', 'Cap2', 'Cap3'],
      'Espresso': ['Espresso 1', 'Espresso 2', 'Espresso 3', 'Espresso 4'],
      'Latte': ['Latte 1','Latte 2'],
      'Americano': ['Americano 1','Americano 2', 'Americano 3']
    },

    // drinks: ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Cold Coffees', 'Cold Drinks', 'Iced Teas'],
    // food: ['Breakfast', 'Bakery', 'Lunch', 'Snacks', 'Sweets', 'Yogurt']
    item_selected: null,
  };

  var final_page_data = {

    checkbox_enabled: false,
    extra_shots: 2,
    extra_shot_price: 0.0,
    quantity: 1,
    extra: ['No sugar', 'Medium Sweet', 'Sweet', 'Extra Sugar', 'Brown Sugar', 'Stevia Sweetener'],
    milk: ['Whole Milk', '2% Reduced Milk', 'Non Fat Milk', 'Soy Milk', 'Almond Milk'],
    flavors: ['Chocolate', 'Vanilla', 'Caramel Sauce', 'Pumkin Sauce', 'Hazelnut Syrup']
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

        },

        goToSubMenu: function(is){
          data.item_selected = is
        }

      }
    })
    Vue.component('login-screen', {
      template: '#login-screen'
    })
    Vue.component('sub-menu', {
      template: '#sub-menu',
      data: function(){
        return data;
      },
      methods: {

      }
    })
    Vue.component('cart', {
      template: '#cart'
    })
    Vue.component('final-page', {
      template: '#final-page',
      data: function(){
        return final_page_data;
      },
      methods: {
        checkbox_clicked(){
          final_page_data.checkbox_enabled = true;
        },
        change_extra_shot(num){

          if (final_page_data.extra_shots > 1 || num >0){
            final_page_data.extra_shots += num;
            console.log('extra shots ', final_page_data.extra_shots)
          }
        },
        change_quantity(num){

          if (final_page_data.quantity > 1 || num >0){
            final_page_data.quantity += num;
            console.log('quantity ', final_page_data.quantity)
          }
        },
      }
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
            path: '/final-page/',
            component: 'final-page'
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

  function onPause(){
    console.log('onPause')
  }

  function onResume(){
    console.log('onResume')
  }

  var onSuccess = function(position) {
        console.log('Latitude: '    + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }



  // Handle device ready event
  // Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
  document.addEventListener('deviceready', init, false)
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  navigator.geolocation.getCurrentPosition(onSuccess, onError);



})();
