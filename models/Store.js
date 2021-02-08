class Store {
    constructor(id,storeCode, storeName,storechainname,storeimage,storeDescription,storepaymentsaccepted,storestatus,storeusers,storecurrencycode,storecreatedby,storecreatetimestamp,storemodifiedby,storefranchiseid,storeaddressid,storecontactid) {
      this.id=id;
      this.storeCode = storeCode;
      this.storeName = storeName;
      this.storechainname=storechainname;
      this.storeimage=storeimage;
      this.storeDescription=storeDescription;
      this.storepaymentsaccepted=storepaymentsaccepted;
      this.storestatus=storestatus;
      this.storeusers=storeusers;
      this.storecurrencycode=storecurrencycode;
      this.storecreatedby=storecreatedby;
      this.storecreatetimestamp=storecreatetimestamp;
      this.storemodifiedby=storemodifiedby;
      this.storefranchiseid=storefranchiseid;
      this.storeaddressid=storeaddressid;
      this.storecontactid=storecontactid;
    }
  }

export default Store;