import { ARDI, NAVIGATION } from "@/lib/constants";

export const metersToKM = (meters: number): string =>
  (meters / 1000).toFixed(1);

export const formatDateTime = (commitTime: string): string => {
  return new Date(commitTime).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

export const formatDate = (
  postDate: string,
  type: string = "readable"
): string => {
  switch (type) {
    case "readable":
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case "numeric":
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    default:
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
};

export const getAge = (): number => {
  const birthDay = new Date(ARDI.birthday);
  const today = new Date();
  const ageDate = new Date(+today - +birthDay);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const layoutSelector = (slug: string): string => {
  const layout = NAVIGATION.filter((nav) => {
    return nav.path === `/${slug}`;
  })[0]?.layout;

  if (layout === undefined) return "page";

  return layout;
};

export function getExperience(birthdateString: string): number {
  // Parse the input string into a Date object
  const birthdate = new Date(birthdateString);

  // Get today's date
  const today = new Date();

  // Set the birthdate to the current year
  const nextBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );

  // If the next birthday has already occurred this year, set it to next year
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  // Calculate the time difference in milliseconds
  const timeDiff = nextBirthday.getTime() - today.getTime();

  // Convert the time difference to days
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysLeft === 366 || daysLeft === 365) {
    return 365;
  }

  return 365 - daysLeft;
}

export const getBaseURL = (): string =>
  process.env.NEXT_PUBLIC_BASE_URL || "https://ardi.monster";
