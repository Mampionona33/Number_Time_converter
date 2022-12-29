export default class NumberToDate {
  static getSeconde = (milisecondes) => {
    return Math.floor((milisecondes / 1000) % 60);
  };

  static getMinute = (milisecondes) => {
    return Math.floor(((milisecondes / 60) * 1000) % 60);
  };

  static getHours = (milisecondes) => {
    const hrs = (milisecondes / (60 * 60 * 1000)) % 24;
    return hrs - Math.floor(hrs) > 0.5
      ? parseInt(hrs.toString().split(".")[0], 10)
      : Math.floor(hrs);
  };

  static getDays = (milisecondes) => {
    const days = ((milisecondes / (60 * 60 * 24 * 1000)) % 365) % 30;
    console.log(days);
    return days - Math.floor(days) > 0.5
      ? parseInt(days.toString().split(".")[0], 10)
      : Math.floor(days);
  };

  static getMonths = (milisecondes) => {
    const days = (milisecondes / (60 * 60 * 24 * 30 * 1000)) % 12;
    return Math.floor(days);
  };

  static getYears = (milisecondes) => {
    const months = (milisecondes / (60 * 60 * 24 * 30)) % 12;
    const years = milisecondes / (60 * 60 * 24 * 30 * 12 * 1000);
    return months - Math.floor(months) > 0.5
      ? parseInt(years.toString().split(".")[0], 10)
      : Math.floor(years);
    // Math.round((milisecondes - month) / (60 * 60 * 24 * 30 * 12));
  };

  static setDuration = (year, months, days, Hours, minites, secondes) => {
    let out = secondes * 1000;
    out = out + minites * 60 * 1000;
    out = out + Hours * 3600000;
    out = out + days * 86400000;
    out = out + months * 2629800000;
    out = out + year * 31557600000;
    return out;
  };
}
