import IBelfioreDb from "./belfiore-db.interface";

export default interface IBelfioreConnectorCommonConfig extends IBelfioreDb {
    fromDate: Date;
    toDate?: Date;
}
