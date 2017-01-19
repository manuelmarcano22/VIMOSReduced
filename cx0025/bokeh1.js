(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("deab7ab7-b894-4eb4-81be-488c6d136d17");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'deab7ab7-b894-4eb4-81be-488c6d136d17' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d572a467-6563-4a98-859c-4e5242fa207f":{"roots":{"references":[{"attributes":{},"id":"0d194449-8a40-4393-af8a-7ba9a3cfd1bc","type":"BasicTickFormatter"},{"attributes":{},"id":"5f3607aa-7f52-46f6-9715-b027498a2580","type":"BasicTicker"},{"attributes":{},"id":"348c8780-472a-489a-ba36-6b75b1e45eac","type":"BasicTickFormatter"},{"attributes":{},"id":"5d5dd0af-8687-42ed-865e-57c45fd9946d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"852d66fe-4201-44ee-a81a-348fab7cb973","type":"Circle"},{"attributes":{"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"}},"id":"d50bc22a-98f8-42e0-92d8-f45d95fd05a1","type":"SaveTool"},{"attributes":{"data_source":{"id":"d99b3126-4800-4b43-830b-b30662ce47a2","type":"ColumnDataSource"},"glyph":{"id":"bfc90199-3088-4281-9372-670ec8e45cfc","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"852d66fe-4201-44ee-a81a-348fab7cb973","type":"Circle"},"selection_glyph":null},"id":"61400166-23cf-493c-a91c-9d0dbf47a429","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"bb7b6f01-2b7d-4175-9d05-9d970b993e10","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d5dd0af-8687-42ed-865e-57c45fd9946d","type":"BasicTicker"}},"id":"ac05bf86-765b-4547-baa2-e92590077479","type":"Grid"},{"attributes":{"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f3607aa-7f52-46f6-9715-b027498a2580","type":"BasicTicker"}},"id":"6140897d-3c61-4946-967e-317747b88fbc","type":"Grid"},{"attributes":{"callback":null},"id":"5808fcd4-f5d3-4700-bcdb-740cb6756587","type":"DataRange1d"},{"attributes":{"overlay":{"id":"3b4a41f6-f4e7-434f-b703-efe14e858a17","type":"BoxAnnotation"},"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"}},"id":"25e881b6-af2e-406c-9f0a-618026b5879b","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bfc90199-3088-4281-9372-670ec8e45cfc","type":"Circle"},{"attributes":{"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"}},"id":"2789b503-3ff5-45c2-9478-f1f7e5399f15","type":"PanTool"},{"attributes":{"formatter":{"id":"0d194449-8a40-4393-af8a-7ba9a3cfd1bc","type":"BasicTickFormatter"},"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d5dd0af-8687-42ed-865e-57c45fd9946d","type":"BasicTicker"}},"id":"62fec55a-7c73-4c31-b073-3fc1781298ed","type":"LinearAxis"},{"attributes":{"formatter":{"id":"348c8780-472a-489a-ba36-6b75b1e45eac","type":"BasicTickFormatter"},"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f3607aa-7f52-46f6-9715-b027498a2580","type":"BasicTicker"}},"id":"7dfe8ab9-c6b2-4c83-80a0-8b021301ce15","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b4a41f6-f4e7-434f-b703-efe14e858a17","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2789b503-3ff5-45c2-9478-f1f7e5399f15","type":"PanTool"},{"id":"96774dbb-ad24-4f54-afd9-c34649fb0036","type":"WheelZoomTool"},{"id":"25e881b6-af2e-406c-9f0a-618026b5879b","type":"BoxZoomTool"},{"id":"d50bc22a-98f8-42e0-92d8-f45d95fd05a1","type":"SaveTool"},{"id":"f24e0f64-7b4c-4c25-b348-cf0c7c3b6e8a","type":"ResetTool"},{"id":"95969243-d9a0-41e7-bc64-ca94163e8550","type":"HelpTool"}]},"id":"b4b35cd0-13ec-4fa4-8733-ea3e3cca8c1c","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"b2a9b6fc-dae9-4efb-a853-857d96a6811c","type":"Title"},{"attributes":{"below":[{"id":"7dfe8ab9-c6b2-4c83-80a0-8b021301ce15","type":"LinearAxis"}],"left":[{"id":"62fec55a-7c73-4c31-b073-3fc1781298ed","type":"LinearAxis"}],"renderers":[{"id":"7dfe8ab9-c6b2-4c83-80a0-8b021301ce15","type":"LinearAxis"},{"id":"6140897d-3c61-4946-967e-317747b88fbc","type":"Grid"},{"id":"62fec55a-7c73-4c31-b073-3fc1781298ed","type":"LinearAxis"},{"id":"ac05bf86-765b-4547-baa2-e92590077479","type":"Grid"},{"id":"3b4a41f6-f4e7-434f-b703-efe14e858a17","type":"BoxAnnotation"},{"id":"61400166-23cf-493c-a91c-9d0dbf47a429","type":"GlyphRenderer"}],"title":{"id":"b2a9b6fc-dae9-4efb-a853-857d96a6811c","type":"Title"},"tool_events":{"id":"3fbc63f3-0c0a-4f3b-942d-c0ba48ed64c5","type":"ToolEvents"},"toolbar":{"id":"b4b35cd0-13ec-4fa4-8733-ea3e3cca8c1c","type":"Toolbar"},"x_range":{"id":"bb7b6f01-2b7d-4175-9d05-9d970b993e10","type":"DataRange1d"},"y_range":{"id":"5808fcd4-f5d3-4700-bcdb-740cb6756587","type":"DataRange1d"}},"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"}},"id":"96774dbb-ad24-4f54-afd9-c34649fb0036","type":"WheelZoomTool"},{"attributes":{},"id":"3fbc63f3-0c0a-4f3b-942d-c0ba48ed64c5","type":"ToolEvents"},{"attributes":{"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"}},"id":"95969243-d9a0-41e7-bc64-ca94163e8550","type":"HelpTool"},{"attributes":{"plot":{"id":"5dcc4051-f29b-439a-8c65-43090c7bab7c","subtype":"Figure","type":"Plot"}},"id":"f24e0f64-7b4c-4c25-b348-cf0c7c3b6e8a","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"d99b3126-4800-4b43-830b-b30662ce47a2","type":"ColumnDataSource"}],"root_ids":["5dcc4051-f29b-439a-8c65-43090c7bab7c"]},"title":"Bokeh Application","version":"0.12.4"}};
                var render_items = [{"docid":"d572a467-6563-4a98-859c-4e5242fa207f","elementid":"deab7ab7-b894-4eb4-81be-488c6d136d17","modelid":"5dcc4051-f29b-439a-8c65-43090c7bab7c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
