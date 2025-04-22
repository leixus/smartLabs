/* empty css             *//* empty css                  *//* empty css                   *//* empty css                  */import{_ as j}from"./BasicInfo.vue_vue_type_script_setup_true_lang-C2mklx7T.js";import A from"./CommissionInfoTab-CzG2cmUf.js";import H from"./RawData--pzXbEzt.js";import M from"./SampleInfoTab-sTc16IRu.js";import Y from"./TestItemDetails-DnnhPPa_.js";import q from"./DeviceInfoTab-C79zI8qe.js";import U from"./TestInfoTab-3YgxHt9o.js";import O from"./AuditInfoTab-BkGLTb3R.js";import{_ as Q}from"./ReportCirculation.vue_vue_type_script_setup_true_lang-DCMCAEKO.js";import{p as Z}from"./testReport-DsZ1G50a.js";import{d as G,p as c,Y as D,i as f,o as u,w as n,a as e,t as x,Z as v,b as r,u as p,D as J,e as g,x as K,bb as X,H as tt,k as ot,B as et,a8 as rt,bc as $,V as w}from"./index-ClSyKtod.js";import{h as st,F as it}from"./FileSaver.min-DfclY8jS.js";import{_ as nt}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css                             *//* empty css               */import"./index.vue_vue_type_script_setup_true_name_ProTable_lang-BVglHUD0.js";/* empty css                 *//* empty css                    *//* empty css                 *//* empty css                */import"./el-form-item-l0sNRNKZ.js";/* empty css                 */import"./el-tooltip-l0sNRNKZ.js";/* empty css                  *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css                  */import"./sortable.esm-C83syoBY.js";import"./sampleManage-Ci-gtlVq.js";import"./mock-Lm0ig56v.js";import"./index-C6bx8goA.js";import"./install-CPD1cr-Y.js";/* empty css                *//* empty css                 *//* empty css                         */import"./ChlorideIonTest-CTLTLTD0.js";/* empty css                */const at={class:"drawer-header"},pt={class:"drawer-actions"},lt={class:"report-detail"},dt={class:"report-header"},mt={class:"report-no"},ct={class:"section"},ft={class:"section"},ut={class:"section"},wt={class:"section"},vt={class:"section"},gt={class:"section"},bt={class:"section"},Dt={class:"section"},xt={class:"section"},$t={class:"report-footer"},yt={class:"footer-content"},It={class:"report-date"},_t=G({__name:"index",props:{modelValue:{type:Boolean},reportData:{}},emits:["update:modelValue"],setup(y,{emit:I}){const s=y,_=I,d=c(s.modelValue),l=c(null);D(()=>s.modelValue,o=>{d.value=o}),D(()=>d.value,o=>{_("update:modelValue",o)});const h=c(!0),k=c(!0),b=Z(),T=()=>{if(!l.value)return;const o=window.open("","_blank");if(!o)return;const t=l.value.innerHTML;o.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>检试验报告</title>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }
          body {
            font-family: "Microsoft YaHei", sans-serif;
            line-height: 1.6;
            color: #000;
            background: #fff;
          }
          .report-content {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
          }
          .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 4px;
          }
          .section-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
            padding-left: 10px;
            border-left: 4px solid #409eff;
          }
          .report-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #409eff;
          }
          .report-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .report-no {
            font-size: 16px;
            color: #666;
          }
          .report-footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 2px solid #409eff;
          }
          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .signature {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 600px;
          }
          .signature-item {
            text-align: center;
            width: 150px;
          }
          .signature-line {
            border-bottom: 1px solid #000;
            height: 20px;
            margin-bottom: 5px;
          }
          .signature-text {
            font-size: 14px;
            color: #666;
          }
          .report-date {
            font-size: 14px;
            color: #666;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f5f7fa;
            font-weight: bold;
          }
          .p-4 {
            padding: 16px;
          }
          @media print {
            .no-print {
              display: none;
            }
            .section {
              break-inside: avoid;
            }
            .report-content {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="report-content">
          ${t}
        </div>
      </body>
    </html>
  `),o.document.close(),o.focus(),setTimeout(()=>{o.print(),o.close()},1e3)},C=async()=>{var t;if(!l.value)return;const o=$.service({lock:!0,text:"正在导出PDF，请稍候...",background:"rgba(0, 0, 0, 0.7)"});try{const i=l.value,a={margin:10,filename:`检试验报告_${((t=s.reportData)==null?void 0:t.reportNo)||new Date().getTime()}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}};await st().set(a).from(i).save(),w.success("PDF导出成功")}catch(i){console.error("导出PDF失败:",i),w.error("导出PDF失败")}finally{o.close()}},N=async()=>{if(!l.value||!s.reportData)return;const o=$.service({lock:!0,text:"正在导出Word，请稍候...",background:"rgba(0, 0, 0, 0.7)"});try{const t={reportNo:s.reportData.reportNo,reportDate:new Date().toLocaleDateString(),basicInfo:V(s.reportData),commissionInfo:P(s.reportData),sampleInfo:E(s.reportData),testItems:F(),deviceInfo:B(b),testInfo:L(s.reportData),rawData:S(),auditInfo:z(),circulationInfo:R(s.reportData)},i=`
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:t>检试验报告</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>报告编号：${t.reportNo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>报告日期：${t.reportDate}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.basicInfo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.commissionInfo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.sampleInfo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.testItems}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.deviceInfo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.testInfo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.rawData}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.auditInfo}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${t.circulationInfo}</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>
`,a=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});it.saveAs(a,`检试验报告_${s.reportData.reportNo}.docx`),w.success("Word导出成功")}catch(t){console.error("导出Word失败:",t),w.error("导出Word失败: "+(t instanceof Error?t.message:"未知错误"))}finally{o.close()}},V=o=>`
报告名称：${o.reportName||"-"}
报告类型：${o.testCategory||"-"}
报告状态：${o.status||"-"}
创建时间：${o.registrationTime||"-"}
`,P=o=>`
委托单位：${o.projectLocation||"-"}
委托日期：${o.commissionReceiptDate||"-"}
联系人：${o.commissionReceiver||"-"}
联系电话：${o.commissionReceiver||"-"}
`,E=o=>`
样品名称：${o.sampleName||"-"}
样品编号：${o.sampleNo||"-"}
样品数量：${o.unitQuantity||"-"}
样品状态：${o.sampleStatusDesc||"-"}
`,F=()=>"检测项目列表...",B=o=>!o||o.length===0?"无设备信息":o.map(t=>`
设备名称：${t.name||"-"}
设备编号：${t.code||"-"}
设备状态：${t.status||"-"}
`).join(`
`),L=o=>`
试验日期：${o.requiredTestCompletionDate||"-"}
试验地点：${o.testLocation||"-"}
试验人员：${o.testStampPerson||"-"}
`,S=()=>"原始数据...",z=()=>"审核信息...",R=o=>`
当前状态：${o.status||"-"}
处理人：${o.reportDistributor||"-"}
处理时间：${o.reportDistributionDate||"-"}
`;return(o,t)=>{const i=K,a=J,W=rt;return u(),f(W,{modelValue:p(d),"onUpdate:modelValue":t[0]||(t[0]=m=>et(d)?d.value=m:null),title:"报告详情",size:"100%","destroy-on-close":!0,direction:"ttb"},{header:n(()=>[e("div",at,[t[4]||(t[4]=e("span",{class:"drawer-title"},"报告详情",-1)),e("div",pt,[r(a,{type:"primary",onClick:T},{default:n(()=>[r(i,null,{default:n(()=>[r(p(X))]),_:1}),t[1]||(t[1]=g(" 打印报告 "))]),_:1}),r(a,{type:"success",onClick:C},{default:n(()=>[r(i,null,{default:n(()=>[r(p(tt))]),_:1}),t[2]||(t[2]=g(" 导出PDF "))]),_:1}),r(a,{type:"warning",onClick:N},{default:n(()=>[r(i,null,{default:n(()=>[r(p(ot))]),_:1}),t[3]||(t[3]=g(" 导出Word "))]),_:1})])])]),default:n(()=>{var m;return[e("div",lt,[e("div",{class:"report-content",ref_key:"reportContent",ref:l},[e("div",dt,[t[5]||(t[5]=e("div",{class:"report-title"},"检试验报告",-1)),e("div",mt,"报告编号："+x((m=o.reportData)==null?void 0:m.reportNo),1)]),e("div",ct,[t[6]||(t[6]=e("div",{class:"section-title"},"基本信息",-1)),o.reportData?(u(),f(j,{key:0,"report-data":o.reportData},null,8,["report-data"])):v("",!0)]),e("div",ft,[t[7]||(t[7]=e("div",{class:"section-title"},"委托信息",-1)),r(A,{"form-data":o.reportData},null,8,["form-data"])]),e("div",ut,[t[8]||(t[8]=e("div",{class:"section-title"},"样品信息",-1)),r(M,{"model-value":!0,title:"样品信息","row-data":o.reportData},null,8,["row-data"])]),e("div",wt,[t[9]||(t[9]=e("div",{class:"section-title"},"检测项目",-1)),r(Y,{class:"p-4"})]),e("div",vt,[t[10]||(t[10]=e("div",{class:"section-title"},"设备信息",-1)),r(q,{class:"p-4","has-device-info":p(h),"device-list":p(b)},null,8,["has-device-info","device-list"])]),e("div",gt,[t[11]||(t[11]=e("div",{class:"section-title"},"试验信息",-1)),r(U,{class:"p-4","has-test-info":p(k),"report-data":o.reportData},null,8,["has-test-info","report-data"])]),e("div",bt,[t[12]||(t[12]=e("div",{class:"section-title"},"原始数据",-1)),o.reportData?(u(),f(H,{key:0,class:"p-4","active-tab":"rawData","report-data":o.reportData},null,8,["report-data"])):v("",!0)]),e("div",Dt,[t[13]||(t[13]=e("div",{class:"section-title"},"审核信息",-1)),r(O,{class:"p-4"})]),e("div",xt,[t[14]||(t[14]=e("div",{class:"section-title"},"报告流转",-1)),o.reportData?(u(),f(Q,{key:0,class:"p-4","report-data":o.reportData},null,8,["report-data"])):v("",!0)]),e("div",$t,[e("div",yt,[t[15]||(t[15]=e("div",{class:"signature"},[e("div",{class:"signature-item"},[e("div",{class:"signature-line"}),e("div",{class:"signature-text"},"报告编制人")]),e("div",{class:"signature-item"},[e("div",{class:"signature-line"}),e("div",{class:"signature-text"},"报告审核人")]),e("div",{class:"signature-item"},[e("div",{class:"signature-line"}),e("div",{class:"signature-text"},"报告批准人")])],-1)),e("div",It,"报告日期："+x(new Date().toLocaleDateString()),1)])])],512)])]}),_:1},8,["modelValue"])}}}),uo=nt(_t,[["__scopeId","data-v-7c56db8a"]]);export{uo as default};
