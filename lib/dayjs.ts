// src/lib/dayjs.ts
import dayjs from "dayjs"
import "dayjs/locale/en" // import any locales you need
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import relativeTime from "dayjs/plugin/relativeTime"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

dayjs.locale("en")
// dayjs.tz.setDefault('Asia/Kolkata');

export default dayjs
