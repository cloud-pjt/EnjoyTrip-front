import { attractionAxios } from "@/util/http-commons";

const attraction = attractionAxios();

function listPlan(param, success, fail) {
  // console.log("listPlan api 호출")
    attraction.get(`/plan/list/${param}`).then(success).catch(fail);
}

function createTripPlan(param, success, fail) {
  console.log("createPlan api 호출")
  attraction.post("/plan/", param).then(success).catch(fail);
}

function removeTripPlan(param, success, fail) {
  console.log("removeTripPlan api 호출")
  attraction.delete(`/plan/${param}`,).then(success).catch(fail);
}
  
function listPlanAttribute(param, success, fail) {
  // console.log("listPlan api 호출")
    attraction.get(`/plan/list/${param}`).then(success).catch(fail);
}

function createTripPlanAttraction(param, success, fail) {
  console.log("createTripPlanAttraction api 호출")
  attraction.post("/plan-att/", param).then(success).catch(fail);
}

function listTripPlanAttraction(param, success, fail) {
  // console.log("listPlan api 호출")
    attraction.get(`/plan-att/list/${param}`).then(success).catch(fail);
}

function ramoveTripPlanAttraction(param1, param2, success, fail) {
  // console.log("ramoveTripPlanAttraction api 호출")
    attraction.delete(`/plan-att/${param1}/${param2}`).then(success).catch(fail);
}

export { listPlan, createTripPlan, removeTripPlan, listPlanAttribute, createTripPlanAttraction, listTripPlanAttraction, ramoveTripPlanAttraction };