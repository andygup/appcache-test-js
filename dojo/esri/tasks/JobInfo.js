//>>built
define("esri/tasks/JobInfo",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/tasks/GPMessage"],function(a,c,d,e,f){a=a(null,{declaredClass:"esri.tasks.JobInfo",constructor:function(a){this.messages=[];c.mixin(this,a);a=this.messages;var b,d=a.length;for(b=0;b<d;b++)a[b]=new f(a[b])},jobId:"",jobStatus:""});c.mixin(a,{STATUS_CANCELLED:"esriJobCancelled",STATUS_CANCELLING:"esriJobCancelling",STATUS_DELETED:"esriJobDeleted",STATUS_DELETING:"esriJobDeleting",STATUS_EXECUTING:"esriJobExecuting",
STATUS_FAILED:"esriJobFailed",STATUS_NEW:"esriJobNew",STATUS_SUBMITTED:"esriJobSubmitted",STATUS_SUCCEEDED:"esriJobSucceeded",STATUS_TIMED_OUT:"esriJobTimedOut",STATUS_WAITING:"esriJobWaiting"});d("extend-esri")&&c.setObject("tasks.JobInfo",a,e);return a});
//@ sourceMappingURL=JobInfo.js.map