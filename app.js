(() => {
    function updateCountdownSmall() {
        const deadline = new Date("2025-05-19T00:00:00");
        const now = new Date();

        let totalDays = Math.floor((deadline - now) / (1000 * 60 * 60 * 24));
        let months = Math.floor(totalDays / 30);
        let weeks = Math.floor((totalDays % 30) / 7);
        let days = totalDays % 7;
        const monthSuffix = months === 1 ? " månad," : " månader,";
        const weekSuffix = weeks === 1 ? " vecka och" : " veckor och";
        const daySuffix = days === 1 ? " dag!" : " dagar!";

        document.getElementById("time-until-deadline-small-month").textContent = months + monthSuffix;
        document.getElementById("time-until-deadline-small-week").textContent = weeks + weekSuffix;
        document.getElementById("time-until-deadline-small-day").textContent = days + daySuffix;
    }

    updateCountdownSmall();
    setInterval(updateCountdownSmall, 60000);

    function updateCountdown() {
        const deadline = new Date("2025-05-19T00:00:00");
        const now = new Date();

        let totalDays = Math.floor((deadline - now) / (1000 * 60 * 60 * 24));
        let totalWeeks = Math.floor(totalDays / 7);
        let totalMonths = Math.floor(totalDays / 30);
        const monthSuffix = totalMonths === 1 ? " månad" : " månader";
        const weekSuffix = totalWeeks === 1 ? " vecka" : " veckor";
        const daySuffix = totalDays === 1 ? " dag" : " dagar";

        // document.getElementById("time-until-deadline-month").textContent = totalMonths + monthSuffix;
        // document.getElementById("time-until-deadline-week").textContent = totalWeeks + weekSuffix;
        document.getElementById("time-until-deadline-day").textContent = totalDays + daySuffix;
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);
})();   