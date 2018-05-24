(function () {

  var app_data = {
    stores_list: [],
    ios: false,
    android: false,
    web: false,
  }

  var data = {

    big_list: [],
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

    item_pressed: null,
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

  var store_data = {
    stores_list: [],
    store_selected: null,
    button_enabled: false,
    button_pressed: false
  }

  function init() {

    var $$ = Dom7;

    // Init F7 Vue Plugin
    Vue.use(Framework7Vue, Framework7);

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
          // console.log('aa ', this.$f7)
          console.log('main page big_list ', app_data.big_list)
          data.parent_list = app_data.big_list
          console.log('parent_list: ', data.parent_list)
          data.parent_stack.push(app_data.big_list)
        },

      }
    })
    Vue.component('login-page', {
      template: '#login-page',
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

        addQuant: function(arr){
          var i = 0
          while(i < arr.length){
              if (arr[i].isLeaf === 0){
                // console.log('rec arr: ', arr)
                // console.log('iii ', i)
                this.addQuant(arr[i].child)
              } else {
                // arr[i].quant = 0
                // do it like that, so that quant is a reactive getElement
                // and vue can updare the DOM
                Vue.set(arr[i], 'quant', 0)
                // console.log('jjjj ', i)
              }
              i += 1
            }


          console.log('arr: ', arr)

          // console.log('extras', final_page_data.item_pressed.child)
        },

        goToFinal(item){
          final_page_data.item_pressed = item
          console.log('item pressed: ', final_page_data.item_pressed)
          console.log('item pressed child: ', final_page_data.item_pressed.child)
          this.addQuant(final_page_data.item_pressed.child)
          console.log('after item_pressed: ', final_page_data.item_pressed.child)
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
        return final_page_data
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
        change_quantity(item, num){
          // when adding
          if(item.quant >= 0 && num > 0 && item.quant < 10){
            item.quant += num
          }else if(item.quant <= 10 && num < 0 && item.quant >= 1 ){
            item.quant += num
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

    Vue.component('select-store-page', {
      template: '#select-store-page',
      data: function() {
        return store_data;
      },

      methods: {

        makeCall: function(){
          url = "http://demo.qnr.com.gr:7003/EshopWs/api/eshop/eshopinfo"
          user = "eshop|" + store_data.store_selected
          pass = "123"
          $$.ajax({
            type: "GET",
            dataType: "json",
            url: url,
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa(user + ":" + pass));
            },
            success: function(data){
              console.log('json: ', data)
              app_data.big_list = data
              console.log('big_list: ', app_data.big_list)
              store_data.button_pressed = false
              f7.mainView.router.load({url: '/main/'})
            },
            error: function() {
              navigator.notification.alert(
                'Something Happened in the Connection with the Server',  // message
                this.makeCall()       // callback
                           // title
              );
            }

          });
        },

        alertDismissed: function(){

        },

        goToMain: function(){

          console.log('store selected: ', store_data.store_selected)

          if(store_data.store_selected == null){
            navigator.notification.alert(
              'Please Select a Store',  // message
              this.alertDismissed,         // callback
              'No Store Selected'            // title
            );
          } else{
            store_data.button_pressed = true
            this.makeCall()
          }
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
      data: function(){
        return app_data
      },
      methods: {
        makeMap: function(){


        }
      },
      mounted: function(){
        // update the device variables:
        if (f7.device.ios){
          app_data.ios = true
        } else if(f7.device.android){
          app_data.android = true
        } else{
          app_data.web = true
        }
        console.log('app mounted')
        // make ajax call
        url = "http://demo.qnr.com.gr:7003/EshopWs/api/eshop/shop"
        user = "eshop|001"
        pass = "123"
        // router.push({path: '/main/'})



        $$.ajax({
          type: "GET",
          dataType: "json",
          url: url,
          beforeSend: function (xhr) {
              xhr.setRequestHeader ("Authorization", "Basic " + btoa(user + ":" + pass));
          },
          success: function(data){
            console.log('list of stores: ', data)
            app_data.stores_list = data
            store_data.stores_list = data
            console.log('list of stores 2: ', app_data.stores_list)

            f7.mainView.router.load({url: '/select-store-page/'})


          },
          error: function() {
            console.log('error in ajax call')
          }

        });

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
            component: 'login-page'
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
          },
          {
            path: '/select-store-page/',
            component: 'select-store-page'
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
