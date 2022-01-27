import { Moment } from "moment";
import IBelfioreDb from "./belfiore-db.interface";

export default interface IBelfioreConnectorCommonConfig extends IBelfioreDb {
    fromDate: Moment;
    toDate?: Moment;
}
