import type { BelfiorePlace } from "@marketto/belfiore-connector";
import dayjs from "dayjs";
import { CF_INTRODUCTION_DATE } from "../const/logic.const";

export default function birthPlaceDateMatch(
	birthDate: Date | null,
	birthPlace: BelfiorePlace
): boolean {
	const { creationDate, expirationDate } = birthPlace;
	if (!creationDate && !expirationDate) {
		return true;
	}

	const isBirthDateAfterCfIntroduction = dayjs(CF_INTRODUCTION_DATE)
		// Adding some tolerance
		.add(5, "years")
		.isBefore(birthDate, "day");

	// Skipping birthDate vs Creation/Expiration check for people born up to 5y after cf introduction
	return (
		!birthDate ||
		!isBirthDateAfterCfIntroduction ||
		((!expirationDate || dayjs(birthDate).isBefore(expirationDate, "day")) &&
			(!creationDate || dayjs(birthDate).isAfter(creationDate, "day")))
	);
}
