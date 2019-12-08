import variables from "@/styles/variables.scss";
export default {

    methods: {
        geojsonObjReady(e) {
            this.geojsonObj = e;
            if (this.geojsonObjReadyCallback) {
                this.geojsonObjReadyCallback(e)
            }
        },
        getTooltipContent(feature, tooltipKey) {
            return feature.properties[tooltipKey]
        },
        getPopupContent(feature, popupKey) {
            let content = "";
            if (popupKey) {
                popupKey.forEach(key => {
                    content += `<span style="color:${variables.primaryColor}">${key}：</span>${feature.properties[key] || ''}<br>`;
                })
            } else {
                for (let key in feature.properties) {
                    content += `<span style="color:${variables.primaryColor}">${key}：</span>${feature.properties[key] || ''}<br>`;
                }
            }

            content =
                '<div style="line-height:20px;max-height:250px; overflow-y:auto;">' +
                content +
                "</div>";
            return content;
        },
        //重置样式
        resetHighlight(e) {
            this.geojsonObj.resetStyle(e.target);
        },
        //鼠标点击
        zoomToFeature(e) {
            this.$map.fitBounds(e.target.getBounds());
        },
        //高亮鼠标划过区域
        highlightFeature(e) {
            var layer = e.target;
            layer.setStyle({
                weight: 3,
                color: "red",
                dashArray: "",
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                // layer.bringToFront();
            }
        },
        createStyleFunction(options) {
            let defaultOpt = {
                fillColor: "#e15989",
                weight: 1,
                opacity: 1,
                color: "#232323",
                dashArray: "1",
                fillOpacity: 0.8
            };
            L.extend(defaultOpt, options);
            return defaultOpt
        },
        createOnEachFeatureFunc(tooltipKey, popupKey, tooltipOptions) {
            const vm = this;
            function onEachFeatureFunc(feature, layer) {
                let tooltipContent = vm.getTooltipContent(feature, tooltipKey);
                let popupContent = vm.getPopupContent(feature, popupKey);
                let mergeTooltipOptions = L.extend({
                    direction: "top",
                    sticky: true,
                }, tooltipOptions);

                layer
                    .bindTooltip(tooltipContent, mergeTooltipOptions)
                    .bindPopup(popupContent);

                layer.on({
                    mouseover: vm.highlightFeature,
                    mouseout: vm.resetHighlight,
                    // click: vm.zoomToFeature
                });

                layer.on("popupopen", () => {
                    layer.unbindTooltip();
                });
                layer.on("popupclose", () => {
                    layer.bindTooltip(tooltipContent, tooltipOptions);
                });
            }
            return onEachFeatureFunc
        },

    }
}