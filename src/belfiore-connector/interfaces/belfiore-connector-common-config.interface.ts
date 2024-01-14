import { type Moment } from "moment";
import type IBelfioreDb from "./belfiore-db.interface";

export default interface IBelfioreConnectorCommonConfig extends IBelfioreDb {
    fromDate: Moment;
    toDate?: Moment;
}
