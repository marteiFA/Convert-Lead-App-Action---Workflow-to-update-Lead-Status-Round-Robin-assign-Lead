// Contact Type - contact_field1
// Customer System ID - b7840c79-be60-466e-b9f8-c623accba045

// Walt McCart ID - 459cbd84-b7cd-4098-88de-503fad890323
// Chad Hamm ID - aa469497-c819-4654-96d4-5ca08140d8b2
// Joey Morsovillo ID - 0df86f4a-c212-44c6-8f5f-2ae0d4018e90
// Albert Boswell ID - 69ff770f-2ce8-4d86-a581-b97a9abb2776

(async function(workflow, context){
    const lista = [
      '459cbd84-b7cd-4098-88de-503fad890323', 
      'aa469497-c819-4654-96d4-5ca08140d8b2', 
      '0df86f4a-c212-44c6-8f5f-2ae0d4018e90', 
      '69ff770f-2ce8-4d86-a581-b97a9abb2776']
    const sub = Math.floor(Math.random() * lista.length)
    const random = String(lista[sub])
    await context.freeagent.updateEntity({
    entity: "contact",
      id: workflow.entityInstance.instanceId, 
    field_values:{
       lead_owner_id: random,
    }
})
}(workflow, context));