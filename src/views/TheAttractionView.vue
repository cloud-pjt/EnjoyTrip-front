<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import logo from '@/assets/logo/logo.vue';
import PlanMakeList from "@/components/plan/PlanMakeList.vue";
import PlanList from "@/components/plan/PlanList.vue";
import PlanCreate from "../components/plan/PlanCreate.vue";
import PlanAttractionList from "../components/plan/PlanAttractionList.vue";

const router = useRouter();

const mode = ref('map');
const planId = ref();
const title = ref('default title')
const sidoCode = history.state.sidoCode;

const activeKey = ref('');

const planAttractionRef = ref(null);

const moveMain = () => {
  router.push({ name: 'main' })
}

const changeMode = (m, p, t) => {
    mode.value = m;
    planId.value = p;
    title.value = t;
    console.log('changeMode!!!!!!!!!')
    console.log(mode.value, planId.value, title.value);
}

const callGetAttractionList = () => {
    planAttractionRef.value.getPlanList();
}

// const setPlanParam = () => {
// }
</script>

<template>
  <div id="tap-container" class="d-flex">
    <a-tabs v-model="activeKey" tab-position="left" size="large" :defaultActiveKey="mode==='map' ? 'map' : 'plan'">
      <a-tab-pane key='home' style="margin: 0; padding: 0;" id="tap-home">
        <template #tab >
          <span @click="moveMain" >
            <logo width="65px" height="40px" />
          </span>
        </template>
      </a-tab-pane>
      
      <a-tab-pane key='map' tab="Map" style="margin: 0; padding: 0;">
      </a-tab-pane>
      
      <a-tab-pane key="plan" tab="Plan" style="margin: 0; padding: 0;">
        <div class="d-flex" id="plan-container">
            <div v-if="mode === 'map'" style="max-width: 400px;">
                <PlanList @changeMode="changeMode"/>
            </div>
            <div v-else-if="mode === 'create'" style="max-width: 400px;">
                <PlanCreate @changeMode="changeMode"/>
            </div>
            <div v-else-if="mode === 'attraction'" style="max-width: 400px;">
                <PlanAttractionList ref="planAttractionRef" @changeMode="changeMode" :title="title" :planId="planId"/>
            </div>

        </div>
      </a-tab-pane>

      <div id="plan-make-container">
        <PlanMakeList @callGetAttractionList="callGetAttractionList" :mode="mode" :planId="planId" :sidoCode="sidoCode"/>
      </div>
    </a-tabs>
  </div>
</template>

<style scoped>
#tap-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>