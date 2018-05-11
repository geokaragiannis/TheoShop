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

    // big_list: [
		// 	[{name: 'Drinks', id: 1, p_id: null, leaf: false}, {name: 'Food', id:2, p_id: null, leaf: false}],
		// 	[{name: 'Coffee', id: 10, p_id: 1, leaf: false}, {name: 'Tea', id:11, p_id: 1, leaf: false}, {name: 'Breakfast', id:12, p_id: 2, leaf: false}],
		// 	[{name: 'Cap', id: 20, p_id: 10, leaf: true}, {name: 'Esp', id:21, p_id: 10, leaf: true}, {name: 'Lipton', id:22, p_id: 11, leaf: true}, {name: 'Omelate', id:23, p_id: 12, leaf: true}]
    // ],
    // big_list: [
		// 	{name: 'Drinks', id: 1, p_id: 0, leaf: false}, {name: 'Food', id:2, p_id: 0, leaf: false},
		// 	{name: 'Coffee', id: 10, p_id: 1, leaf: false}, {name: 'Tea', id:11, p_id: 1, leaf: false}, {name: 'Breakfast', id:12, p_id: 2, leaf: false},
		// 	{name: 'Cap', id: 20, p_id: 10, leaf: true}, {name: 'Esp', id:21, p_id: 10, leaf: true}, {name: 'Lipton', id:22, p_id: 11, leaf: true}, {name: 'Omelate', id:23, p_id: 12, leaf: true}
    // ],
    // big_list: {
    //   '1': [{name:'Drinks' , id:1 , p_id:0 }, {name:'Food' , id:2 , p_id:0 }],
    //   '2': [{name:'Coffee' , id:10 , p_id:1 }, {name:'Tea' , id:11 , p_id:1 }, {name:'Iced Tea' , id:12 , p_id:1 }, {name:'Breakfast' , id:20 , p_id:2 }, {name:'Lunch' , id:21 , p_id:2 }, {name:'Dinner', id:22 , p_id:2 }],
    //   '3': [{name:'Cap' , id:30 , p_id:10 }, {name:'Esp' , id:31 , p_id:10 }, {name:'Mousakas' , id:32 , p_id:21}]
    // },
    big_list: [
      {name:'Drinks' , id:1 , p_id:0, level: 1, children: [{name:'Coffee' , id:10 , p_id:1, level: 2, children:[{name:'Cap' , id:20 , p_id:10, level: 3},{name:'Esp' , id:21 , p_id:10, level: 3}] }, {name:'Tea' , id:11 , p_id:1, level: 2, children:[{name:'Engligh' , id:22 , p_id:11, level: 3},{name:'Greek' , id:23 , p_id:11, level: 3}]}]},
      {name: 'Food', id: 2, p_id: 0, level: 1, children: [{name:'Breakfast' , id:30 , p_id:2, level: 2, children:[{name:'Omelate' , id:40 , p_id:30, level: 3},{name:'Bagel' , id:41 , p_id:30, level: 3}]}, {name:'Lunch' , id:31 , p_id:2, level: 2, children:[{name:'Mousakas' , id:42 , p_id:31, level: 3},{name:'Pastitsio' , id:43 , p_id:31, level: 3}]}]}
    ],
    num_of_levels: 3,
    parent_list: [],
    children_list: [],
    parent_stack: [],
    big_list_index: 0,
    parent_level: 1,
    parent_selected: 0,
    children_level: 2,
    is_last_level: false,
    link_to: '/sub-menu/',
    sub_menu_navbar_title: 'Menu'
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
          data.parent_list = data.big_list
          data.parent_stack.push(data.big_list)
          if(data.num_of_levels > 2)
            data.is_last_level = false
        },

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

        goToSame: function(item){
          
          if(data.num_of_levels - item.level < 2)
            data.is_last_level = true;

          if(!data.is_last_level)
            data.parent_list = item.children
          else
            data.parent_list = [item]

          data.parent_stack.push(data.parent_list)

          for (x in data.parent_list){
            console.log('lala ', x)
          }

          console.log('is_last_level: ', data.is_last_level);
          console.log('parent: ', data.parent_list);

        },

        backSubMenu: function(){
          data.parent_stack.pop()
          data.parent_list = data.parent_stack[data.parent_stack.length - 1]
          data.is_last_level = false
          console.log('parent stack: ', data.parent_stack);
          console.log('parent: ', data.parent_list);
        },

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
