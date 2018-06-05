(function () {

  // Enumerates an array.
  var enumerate = function(v) {
      var k=0;
      return v.map(function(e) {e._idx = k++;});
  };

  var get_years = function() {
    var today = new Date()
    var this_year = today.getFullYear()
    var year_list = []
    for (i = this_year; i< (this_year + 20); i++){
      year_list.push(i)
    }

    return year_list
  }


  var random_text = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

  var app_data = {
    preloader: false,
    order_was_made: false,
    stores_list: [],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November', 'December'],
    years: get_years(),
    ios: false,
    android: false,
    web: false,
    name: null,
    card_num: null,
    cvc: null,
    address: null,
    zip: null,
    month: null,
    year: null,
    cart_price: null
  }

  var data = {

    big_list: [],
    parent_list: [],
    children_list: [],
    parent_stack: [],
    number_cart_items: 0,
    is_last_level: false,

    sub_menu_navbar_title: 'Menu'
  };

  var final_page_data = {

    item_pressed: null,
    price: 0,
    size_price: 0,
    size_descr: null,
    extras: [],
    cart_items: [],
    cart_price: 0,
    extra_shots: 2,
    extra_shot_price: 0.0,
    quantity: 1
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

    // // Status Bar Configuration
    // console.log(StatusBar);
    // StatusBar.styleDefault();
    // if(StatusBar.isVisible){
    //   $$('html').addClass('with-statusbar-overlay')
    //   // StatusBar.backgroundColorByHexString("#6395ed");
    // }

    console.log('device: ', device.model)



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
          if(final_page_data.item_pressed.child != null)
            this.addQuant(final_page_data.item_pressed.child)

          console.log('after item_pressed: ', final_page_data.item_pressed.child)
          final_page_data.price = item.price
        },

        backSubMenu: function(){
          console.log('papa')
          data.parent_stack.pop()
          // parent_list is now the top element in the stack
          data.parent_list = data.parent_stack[data.parent_stack.length - 1]
          // since we went back one level, if is_last_level was true, it is now false
          // if it was false, it remains false
          data.is_last_level = false
          console.log('parent stack: ', data.parent_stack);
          console.log('parent: ', data.parent_list);
          // when parent_list is null, we go back to main page
          if(data.parent_list == null)
            f7.mainView.router.back();
        },

      }
    })
    Vue.component('cart', {
      template: '#cart',

      data: function(){
        return final_page_data
      },
      mounted: function(){
        final_page_data.cart_price = 0
        for(i = 0; i< final_page_data.cart_items.length; i++){
          final_page_data.cart_price += final_page_data.cart_items[i].total_price
        }
      },
      methods: {

        change_quantity: function(num, index){
          final_page_data.cart_items[index].quant += num
          prev_price = final_page_data.cart_items[index].total_price
          final_page_data.cart_items[index].total_price = Math.trunc((final_page_data.cart_items[index].quant *
                                                          final_page_data.cart_items[index].single_price) * 100) / 100

          final_page_data.cart_price += final_page_data.cart_items[index].total_price - prev_price
          final_page_data.cart_price = Math.trunc(final_page_data.cart_price * 100)/100
          // update the number of cart items, to be displayed in sub-Menu
          data.number_cart_items += num

          if(final_page_data.cart_items[index].quant <= 0){

            final_page_data.cart_items.splice(index, 1)
            enumerate(final_page_data.cart_items)
            console.log('after removing: ', final_page_data.cart_items)
          }
        },

        go_to_checkout: function() {
          // get the cart price to display in checkout
          app_data.cart_price = final_page_data.cart_price

        }

      }
    })


    Vue.component('final-page', {
      template: '#final-page',
      data: function(){
        return final_page_data
      },

      methods: {
        backFinal(){
          final_page_data.quantity = 1
          final_page_data.price = 0
          final_page_data.size_price = 0
          final_page_data.extras = []
          final_page_data.size_descr = null
        },
        checkbox_clicked(){
          final_page_data.checkbox_enabled = true;
        },
        change_extra_shot(num){

          if (final_page_data.extra_shots > 1 || num >0){
            final_page_data.extra_shots += num;
            console.log('extra shots ', final_page_data.extra_shots)
          }
        },
        change_extras_quantity(extra, num){
          // UI stuff here
          cond = (extra.quant >= 0 && num > 0 && extra.quant < 10)
                || (extra.quant <= 10 && num < 0 && extra.quant >= 1);

          if(cond){
            extra.quant += num
            this.calculate_price(extra, num)
          }

          // Populate the extras list for the cart
          //if empty push the extra in the array
          // else search if the extra item already exists in the array
            // if it exists, update its quantity
            // else push it in the array

          if (final_page_data.extras.length === 0){
            final_page_data.extras.push({descr: extra.descr, quant: 1})
          }else{
            for(i = 0; i < final_page_data.extras.length; i++){
              if(final_page_data.extras[i].descr == extra.descr){
                final_page_data.extras[i].quant += num
                // if the quantity was changed to 0, remove it from the extras
                if(final_page_data.extras[i].quant === 0)
                  final_page_data.extras.splice(i, 1)
                return
              }
            }
            final_page_data.extras.push({descr: extra.descr, quant: 1})
          }
        },
        change_quantity(num){
          cond = (final_page_data.quantity >= 1 && num > 0 && final_page_data.quantity < 10)
                || (final_page_data.quantity <= 10 && num < 0 && final_page_data.quantity >= 2);
          if(cond){
            final_page_data.quantity += num
          }
        },

        change_size(size){
          final_page_data.size_descr = size.descr;
          final_page_data.size_price = size.price;
          console.log('size descr: ', final_page_data.size_descr)
          console.log('size price: ', final_page_data.size_price)
        },

        calculate_price_from_size(num){

        },

        calculate_price(extra, num){
          if (extra.price == null)
            extra_price = 0
          else
            extra_price = num * extra.price

          // price is the price of the item plus the price of the extras
          final_page_data.price += extra_price

          console.log('final price: ', final_page_data.price)
        },

        add_to_cart(){
          // total_price is the overall price of the item added to cart (quantity * (price of item + extras + size))
          // single_price is the price of the item added to cart without the quantity
          total_price = Math.trunc((final_page_data.quantity *
                                   (final_page_data.price + final_page_data.size_price)) * 100) / 100

          single_price = Math.trunc((final_page_data.price + final_page_data.size_price) * 100) / 100

          cart_item = {descr: final_page_data.item_pressed.descr,
                      quant: final_page_data.quantity,
                      extras: final_page_data.extras,
                      size: final_page_data.size_descr,
                      single_price: single_price,
                      total_price: total_price
                      };

          console.log('cart item: ', cart_item)

          final_page_data.cart_items.push(cart_item)


          // update the number of cart items, to be displayed in sub-Menu
          data.number_cart_items += cart_item.quant

          enumerate(final_page_data.cart_items)
          console.log('cart items: ', final_page_data.cart_items)
          // when we add to cart, we go to sub-menu, displaying the full menu
          // (as if we were going to sub-menu from main-page)
          data.parent_list = app_data.big_list
          // clear the stack
          data.parent_stack = []
          console.log('parent_list after adding to cart: ', data.parent_list)
          data.parent_stack.push(app_data.big_list)
          f7.mainView.router.back();

        }
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
            data: {shopId: store_data.store_selected},
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

    Vue.component('checkout-page', {
      template: '#checkout-page',
    });

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


        },
        reset_card_data: function(){
          console.log('reseting card data')
          app_data.name = null;
          app_data.address = null;
          app_data.zip = null;
          app_data.card_num = null;
          app_data.cvc = null;
          app_data.month = null;
          app_data.year = null;
          // updating the UI
          $$('#card-name').val(null)
          $$('#card-address').val(null)
          $$('#card-zip').val(null)
          $$('#card-card_num').val(null)
          $$('#card-cvc').val(null)
          $$('#picker-date').val(null)
        },
        format_date: function(){
          month = app_data.month
          if(app_data.month < 10)
            month = '0' + app_data.month
          return month + app_data.year.toString().substr(-2)
        },

        submit_card: function() {
          // display the preloader
          app_data.preloader = true;
          exp_date = this.format_date()
          console.log('usaepay date format: ', exp_date)
          app_data.name = $$('#card-name').val();
          app_data.address = $$('#card-address').val();
          app_data.zip = $$('#card-zip').val();
          app_data.card_num = $$('#card-card_num').val();
          app_data.cvc = $$('#card-cvc').val();

          var values = {
            command: "cc:sale",
            amount: final_page_data.cart_price,
            amount_detail: {
              tip: 0,
              tax: 0
            },
            creditcard: {
              cardholder: app_data.name,
              number: app_data.card_num,
              expiration: exp_date,
              cvc: app_data.cvc,
              avs_street: app_data.address,
              avs_zip: app_data.zip
            },

          }

          console.log('card values', values)
          var apikey = '_3UWUtSia70cb0OlIfW64e1XeBV4Vhk4';
          var apipin = 121441;
          var seed = random_text();
          var prehash = apikey + seed + apipin;
          var apihash = 's2/'+ seed + '/' + sha256(prehash);
          var authKey = btoa(apikey + ':' + apihash)
          $$.ajax({
            type: "POST",
            dataType: "json",
            url: "https://sandbox.usaepay.com/api/v2/transactions",
            beforeSend: function (xhr) {
                // xhr.setRequestHeader ("User-Agent", "uelib v6.8");
                xhr.setRequestHeader ("Content-Type", "application/json");
                xhr.setRequestHeader ("Authorization", "Basic " + authKey);
            },
            data: JSON.stringify(values),
            success: function(data){
              console.log('usaepay : ', data)
              // don't show the preloader
              app_data.preloader = false;

              // if we get an approved (code is "A")
              if(data.result_code === "A"){
                // order was made successfully
                app_data.order_was_made = true
                // close the popover
                f7.closeModal('.popup-card')
                app_data.name = null;
                app_data.address = null;
                app_data.zip = null;
                app_data.card_num = null;
                app_data.cvc = null;
                app_data.month = null;
                app_data.year = null;
                // updating the UI
                $$('#card-name').val(null)
                $$('#card-address').val(null)
                $$('#card-zip').val(null)
                $$('#card-card_num').val(null)
                $$('#card-cvc').val(null)
                $$('#picker-date').val(null)
                // go back to main page
                f7.mainView.router.back({url: '/main/', force: true, ignoreCache: true})

                // when the popup is closed and we go back to main page
                // display the dialog
                $$('.popup-card').on('popup:closed', function () {
                  f7.confirm("Do You Want To View Status?", "Your Order Has Been Placed", function(){
                    console.log('Wants to see status ')
                    // Now go to the status page (clicked ok)
                    // f7.mainView.router.loadPage('/cart/')
                  })
                });

              } else{
                console.log("received an error from usaepay")
              }
            },
            error: function() {
              console.log('error in ajax usaepa call')
            }

          });
        }
      },
      mounted: function(){

        var pickerDate = f7.picker({
          input: '#picker-date',
          rotateEffect: true,
          cols: [
              {
                  textAlign: 'left',
                  values: app_data.months
              },
              {
                  values: app_data.years
              },
          ],
          onChange(p, values, displayValues){

            month = values[0]
            // get the month number
            app_data.month = app_data.months.indexOf(month) + 1
            year = values[1]
            app_data.year = year
            console.log('after month and year: ', app_data.month, " ", app_data.year)

          }
        });

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
          },
          {
            path: '/checkout-page/',
            component: 'checkout-page'
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
