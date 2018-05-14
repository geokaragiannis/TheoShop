(function () {

  var data = {

    big_list: [
      {name:'Drinks' ,is_leaf: false, id:1 , p_id:0, level: 1, children: [{name:'Coffee' ,is_leaf: false, id:10 , p_id:1, level: 2, children:[{name:'Cap' , is_leaf: true, id:20 , p_id:10, level: 3},{name:'Esp' , is_leaf: true, id:21 , p_id:10, level: 3}] }, {name:'Tea' , is_leaf: false, id:11 , p_id:1, level: 2, children:[{name:'Engligh' , is_leaf: true, id:22 , p_id:11, level: 3},{name:'Greek' , is_leaf: true, id:23 , p_id:11, level: 3}]}]},
      {name: 'Food',is_leaf: false, id: 2, p_id: 0, level: 1, children: [{name:'Breakfast' ,is_leaf: false, id:30 , p_id:2, level: 2, children:[{name:'Omelate' , is_leaf: false, id:40 , p_id:30, level: 3, children: [{name:'Omelate2' , is_leaf: true, id:80 , p_id:40, level: 4}, {name:'Omelate3', is_leaf: true, id:81 , p_id:40, level: 4}, {name:'Omelate4' , is_leaf: true, id:82 , p_id:40, level: 4}]},{name:'Bagel' , is_leaf: false, id:41 , p_id:30, level: 3, children: [
				{name:'Bagel2' , is_leaf: true, id:90 , p_id:41, level: 4},
				{name:'Bagel3', is_leaf: true, id:92 , p_id:41, level: 4},
				{name:'Bagel4' , is_leaf: true, id:92 , p_id:41, level: 4}
			]}]}, {name:'Lunch' , is_leaf: false, id:31 , p_id:2, level: 2, children:[{name:'Mousakas' , is_leaf: true, id:42 , p_id:31, level: 3},{name:'Pastitsio' , is_leaf: true, id:43 , p_id:31, level: 3}]}]}
    ],
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
    Vue.use(Framework7Vue, Framework7)

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
          console.log('aa ', this.$f7)
          data.parent_list = data.big_list
          data.parent_stack.push(data.big_list)
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

        onPageBack(f7){
          console.log('bam ')
        },

        goToSame: function(item){

          // if the child of the item selected is a leaf, then
          // we enable is_last_level
          if(item.children[0].is_leaf)
            data.is_last_level = true;

          // if not is_last_level then the categories (in blue font)
          // are the children of the item selected
          // else the category is just the item selected
          if(!data.is_last_level)
            data.parent_list = item.children
          else
            data.parent_list = [item]

          // parent_stack is used for the history aka back button
          data.parent_stack.push(data.parent_list)

          console.log('is_last_level: ', data.is_last_level);
          console.log('parent: ', data.parent_list);

        },

        backSubMenu: function(){
          data.parent_stack.pop()
          // parent_list is now the top element in the stack
          data.parent_list = data.parent_stack[data.parent_stack.length - 1]
          // since we went back one level, if is_last_level was true, it is now false
          // if it was false, it remains false
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
