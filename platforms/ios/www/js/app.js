(function () {

  var data = {

    // big_list: [
    //   {name:'Drinks' ,is_leaf: false, id:1 , p_id:0, level: 1, children: [{name:'Coffee' ,is_leaf: false, id:10 , p_id:1, level: 2, children:[{name:'Cap' , is_leaf: true, id:20 , p_id:10, level: 3},{name:'Esp' , is_leaf: true, id:21 , p_id:10, level: 3}] }, {name:'Tea' , is_leaf: false, id:11 , p_id:1, level: 2, children:[{name:'Engligh' , is_leaf: true, id:22 , p_id:11, level: 3},{name:'Greek' , is_leaf: true, id:23 , p_id:11, level: 3}]}]},
    //   {name: 'Food',is_leaf: false, id: 2, p_id: 0, level: 1, children: [{name:'Breakfast' ,is_leaf: false, id:30 , p_id:2, level: 2, children:[{name:'Omelate' , is_leaf: false, id:40 , p_id:30, level: 3, children: [{name:'Omelate2' , is_leaf: true, id:80 , p_id:40, level: 4}, {name:'Omelate3', is_leaf: true, id:81 , p_id:40, level: 4}, {name:'Omelate4' , is_leaf: true, id:82 , p_id:40, level: 4}]},{name:'Bagel' , is_leaf: false, id:41 , p_id:30, level: 3, children: [
		// 		{name:'Bagel2' , is_leaf: true, id:90 , p_id:41, level: 4},
		// 		{name:'Bagel3', is_leaf: true, id:92 , p_id:41, level: 4},
		// 		{name:'Bagel4' , is_leaf: true, id:92 , p_id:41, level: 4}
		// 	]}]}, {name:'Lunch' , is_leaf: false, id:31 , p_id:2, level: 2, children:[{name:'Mousakas' , is_leaf: true, id:42 , p_id:31, level: 3},{name:'Pastitsio' , is_leaf: true, id:43 , p_id:31, level: 3}]}]}
    // ],

    big_list: [
              	{
              		"id": 15,
              		"parentId": null,
              		"descr": "FOOD",
              		"typ": "CAT",
              		"price": null,
              		"compCd": "001",
              		"lev": 1,
              		"isLeaf": 0,
              		"child": [
              			{
              				"id": 17,
              				"parentId": 15,
              				"descr": "BREAKFAST",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 18,
              						"parentId": 17,
              						"descr": "HOT",
              						"typ": "CAT",
              						"price": null,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 0,
              						"child": [
              							{
              								"id": 10000,
              								"parentId": 18,
              								"descr": "OMELATE",
              								"typ": "ITEM",
              								"price": 3,
              								"compCd": "001",
              								"lev": 4,
              								"isLeaf": 1
              							},
              							{
              								"id": 10001,
              								"parentId": 18,
              								"descr": "TOAST",
              								"typ": "ITEM",
              								"price": 2,
              								"compCd": "001",
              								"lev": 4,
              								"isLeaf": 1
              							}
              						]
              					},
              					{
              						"id": 19,
              						"parentId": 17,
              						"descr": "COLD",
              						"typ": "CAT",
              						"price": null,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 0,
              						"child": [
              							{
              								"id": 10002,
              								"parentId": 19,
              								"descr": "BAGEL",
              								"typ": "ITEM",
              								"price": 2,
              								"compCd": "001",
              								"lev": 4,
              								"isLeaf": 1
              							}
              						]
              					}
              				]
              			},
              			{
              				"id": 20,
              				"parentId": 15,
              				"descr": "LUNCH",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 10003,
              						"parentId": 20,
              						"descr": "MOUSAKAS",
              						"typ": "ITEM",
              						"price": 5,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10005,
              						"parentId": 20,
              						"descr": "PASTITSIO",
              						"typ": "ITEM",
              						"price": 6,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					}
              				]
              			},
              			{
              				"id": 25,
              				"parentId": 15,
              				"descr": "DINNER",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 10007,
              						"parentId": 25,
              						"descr": "STEAK",
              						"typ": "ITEM",
              						"price": 7,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10008,
              						"parentId": 25,
              						"descr": "PIZZA",
              						"typ": "ITEM",
              						"price": 7,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					}
              				]
              			},
              			{
              				"id": 26,
              				"parentId": 15,
              				"descr": "SNACKS",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 10009,
              						"parentId": 26,
              						"descr": "CAPRESE SANDWICH",
              						"typ": "ITEM",
              						"price": 4,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10010,
              						"parentId": 26,
              						"descr": "CHIPS",
              						"typ": "ITEM",
              						"price": 3,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10011,
              						"parentId": 26,
              						"descr": "GREEK CHOCOLATE",
              						"typ": "ITEM",
              						"price": 2,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					}
              				]
              			}
              		]
              	},
              	{
              		"id": 15,
              		"parentId": null,
              		"descr": "FOOD",
              		"typ": "CAT",
              		"price": null,
              		"compCd": "001",
              		"lev": 1,
              		"isLeaf": 0,
              		"child": [
              			{
              				"id": 17,
              				"parentId": 15,
              				"descr": "BREAKFAST",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 18,
              						"parentId": 17,
              						"descr": "HOT",
              						"typ": "CAT",
              						"price": null,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 0,
              						"child": [
              							{
              								"id": 10000,
              								"parentId": 18,
              								"descr": "OMELATE",
              								"typ": "ITEM",
              								"price": 3,
              								"compCd": "001",
              								"lev": 4,
              								"isLeaf": 1
              							},
              							{
              								"id": 10001,
              								"parentId": 18,
              								"descr": "TOAST",
              								"typ": "ITEM",
              								"price": 2,
              								"compCd": "001",
              								"lev": 4,
              								"isLeaf": 1
              							}
              						]
              					},
              					{
              						"id": 19,
              						"parentId": 17,
              						"descr": "COLD",
              						"typ": "CAT",
              						"price": null,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 0,
              						"child": [
              							{
              								"id": 10002,
              								"parentId": 19,
              								"descr": "BAGEL",
              								"typ": "ITEM",
              								"price": 2,
              								"compCd": "001",
              								"lev": 4,
              								"isLeaf": 1
              							}
              						]
              					}
              				]
              			},
              			{
              				"id": 20,
              				"parentId": 15,
              				"descr": "LUNCH",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 10003,
              						"parentId": 20,
              						"descr": "MOUSAKAS",
              						"typ": "ITEM",
              						"price": 5,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10005,
              						"parentId": 20,
              						"descr": "PASTITSIO",
              						"typ": "ITEM",
              						"price": 6,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					}
              				]
              			},
              			{
              				"id": 25,
              				"parentId": 15,
              				"descr": "DINNER",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 10007,
              						"parentId": 25,
              						"descr": "STEAK",
              						"typ": "ITEM",
              						"price": 7,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10008,
              						"parentId": 25,
              						"descr": "PIZZA",
              						"typ": "ITEM",
              						"price": 7,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					}
              				]
              			},
              			{
              				"id": 26,
              				"parentId": 15,
              				"descr": "SNACKS",
              				"typ": "CAT",
              				"price": null,
              				"compCd": "001",
              				"lev": 2,
              				"isLeaf": 0,
              				"child": [
              					{
              						"id": 10009,
              						"parentId": 26,
              						"descr": "CAPRESE SANDWICH",
              						"typ": "ITEM",
              						"price": 4,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10010,
              						"parentId": 26,
              						"descr": "CHIPS",
              						"typ": "ITEM",
              						"price": 3,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					},
              					{
              						"id": 10011,
              						"parentId": 26,
              						"descr": "GREEK CHOCOLATE",
              						"typ": "ITEM",
              						"price": 2,
              						"compCd": "001",
              						"lev": 3,
              						"isLeaf": 1
              					}
              				]
              			}
              		]
              	}
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

  var profile_page_data = {

    // these will be from an ajax call
    name: "George Papadopoulos",
    email: "example@gmlail.com",
    phone: "111111111",
    gender: "Male",
    birthday: "1998-04-22",
    disabled_data: true,
    profile_change_pressed: false,

  }

  function init() {

    var $$ = Dom7;

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
          // console.log('test map_canvas ', $$('#map_canvas').hasClass('pipa'));
          console.log('aa ', this.$f7)
          data.parent_list = data.big_list
          data.parent_stack.push(data.big_list)
        },



      }
    })
    Vue.component('login-screen', {
      template: '#login-screen',
      methods: {
        makeMap: function(){
          var map = $$('div')
          map.addClass('map_div')
          map.attr({id: 'map_canvas'})

          console.log('map: ', map)
        }
      }
    })

    Vue.component('sub-menu', {
      template: '#sub-menu',
      data: function(){
        return data;
      },
      methods: {


        goToSame: function(item){

          // if the child of the item selected is a leaf, then
          // we enable is_last_level
          if(item.child[0].isLeaf)
            data.is_last_level = true;

          // if not is_last_level then the categories (in blue font)
          // are the children of the item selected
          // else the category is just the item selected
          if(!data.is_last_level)
            data.parent_list = item.child
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

          if (final_page_data.quantity > 1 || num > 0){
            final_page_data.quantity += num;
            console.log('quantity ', final_page_data.quantity)
          }
        },
      }
    })
    Vue.component('page-dynamic-routing', {
      template: '#page-dynamic-routing'
    })

    Vue.component('profile-page', {
      template: '#profile-page',
      data: function(){
        return profile_page_data
      },
      methods: {
        profileChange: function(){
          // toggle the value of disabled_data
          profile_page_data.disabled_data = !profile_page_data.disabled_data
        },

        profileCancel: function(){
          $$('#name-input').val(profile_page_data.name)
          $$('#email-input').val(profile_page_data.email)
          $$('#phone-input').val(profile_page_data.phone)
          $$('#gender-input').val(profile_page_data.gender)
          $$('#birthday-input').val(profile_page_data.birthday)

          // toggle disabled_data
          profile_page_data.disabled_data = !profile_page_data.disabled_data
        },

        profileSave: function(){

          profile_page_data.name = $$('#name-input').val();
          profile_page_data.email = $$('#email-input').val();
          profile_page_data.phone = $$('#phone-input').val();
          profile_page_data.gender = $$('#gender-input').val();
          profile_page_data.birthday = $$('#birthday-input').val();

          // toggle disabled_data
          profile_page_data.disabled_data = !profile_page_data.disabled_data

          // TODO make an Ajax POST of the data

          console.log('gender and birthday: ',profile_page_data.gender, ' ', profile_page_data.birthday )
          console.log('name, email and phone saved: ', profile_page_data.name, ' ', profile_page_data.email, ' ', profile_page_data.phone)
        },
        profileInput: function(item){
          console.log('input ', item)
        }
      }
    })

    Vue.component('stores', {
      template: '#stores',
      methods: {

        backStores: function(){
          $$('#app').removeClass('changed-body')
          $$('#map_canvas').remove()
        },

        loadMap: function() {
          var data = [
            {
              position: {lng: -122.1180187, lat: 37.3960513},
              title: "Ardis G Egan Intermediate School"
            },
            {
              position: {lng: -122.1102408, lat: 37.3943847},
              title: "Portola School"
            },
            {
              position: {lng: -122.0848257, lat: 37.3818032},
              title: "Isaac Newton Graham Middle School"
            },
            {
              position: {lng: -122.1082962, lat: 37.3863294},
              title: "Los Altos High School"
            },
            {
              position: {lng: -122.013571, lat: 37.3874409},
              title: "The Kings Academy"
            },
            {
              position: {lng: -122.082462, lat: 37.3627189},
              title: "Georgina P Blach Intermediate School"
            },
            {
              position: {lng: -122.0421832, lat: 37.3766077},
              title: "Benner Junior High School"
            }
          ];
          // hide the previous pages
          // $$('.page-on-left').hide()

          var body = $$('body')
          var app = $$('#app')
          app.addClass('changed-body')
          map_div = '<div class="map_div" id="map_canvas"> </div>'
          body.append(map_div)

          const GOOGLE = {"lat": 37.422476, "lng": -122.08425};

          console.log('aaaadwd ', document)

          var div = document.getElementById("map_canvas")
          console.log('map: ', div)

          // Create a Google Maps native view under the map_canvas div.
          var map = plugin.google.maps.Map.getMap(div, {
            'camera': {
              'latLng': GOOGLE,
              'zoom': 17
            }
          });

          // Add markers
          var baseArrayClass = new plugin.google.maps.BaseArrayClass(data);


          map.one(plugin.google.maps.event.MAP_READY,  function() {// Add a marker

            baseArrayClass.map(function(options, cb) {
            // The variable "options" contains each element of the data.
            //
            // The variable "cb" is a callback function of iteration.
            map.addMarker(options, cb);

          }, function(markers) {

            // Set a camera position that includes all markers.
            var bounds = [];
            data.forEach(function(POI) {
            bounds.push(POI.position);
           });

          map.moveCamera({
            target: bounds
           }, function() {

             // After camera moves open the last marker.
             markers[markers.length - 1].showInfoWindow();
           });

          });


        });

        }
      },

    })


    // Init App
    new Vue({
      el: '#app',
      methods: {
        makeMap: function(){

        }
      },
      // Init Framework7 by passing parameters here
      framework7: {
        root: '#app',
        data: {
          show_map: false
        },
        /* Uncomment to enable Material theme: */
        // material: true,
        // swipeBackPage: false,

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
          },
          {
            path: '/profile-page/',
            component: 'profile-page'
          },
          {
            path: '/stores/',
            component: 'stores'
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
