<template>
<StackLayout style="width: 200; background-color: white">

    <Button class="btn btn-outline" text="Close Modal" @tap="$modal.close()" />
<RadRadialGauge v-if="true">
    <RadialScale v-tkRadialGaugeScales minimum="0" maximum="6"
                        radius="0.90">
                        <ScaleStyle v-tkRadialScaleStyle majorTicksCount="7"
                            minorTicksCount="9" lineThickness="0"
                            labelsCount="7" ticksOffset="0" />
                        <RadialBarIndicator v-tkRadialScaleIndicators
                            minimum="0" maximum="1.2" location="0.97">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                fillColor="#dddddd" />
                        </RadialBarIndicator>
                        <RadialBarIndicator v-tkRadialScaleIndicators
                            minimum="1.2" maximum="2.4" location="0.97">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                fillColor="#9DCA56" />
                        </RadialBarIndicator>
                        <RadialBarIndicator v-tkRadialScaleIndicators
                            minimum="2.4" maximum="3.6" location="0.97">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                fillColor="#F0C44D" />
                        </RadialBarIndicator>
                        <RadialBarIndicator v-tkRadialScaleIndicators
                            minimum="3.6" maximum="4.8" location="0.97">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                fillColor="#E27633" />
                        </RadialBarIndicator>
                        <RadialBarIndicator v-tkRadialScaleIndicators
                            minimum="4.8" maximum="6" location="0.97">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                fillColor="#A7010E" />
                        </RadialBarIndicator>
                        <RadialNeedle v-tkRadialScaleIndicators
                            :value="value" />
                    </RadialScale>
    </RadRadialGauge>

    
</StackLayout>
</template>

<script>
import Vue from "nativescript-vue";
import RadRadialGauge from "nativescript-ui-gauge/vue";
Vue.use(RadRadialGauge);

export default {
  name: 'gauge',
  created () {
      console.log('gauge created');
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>