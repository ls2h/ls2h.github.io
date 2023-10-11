document.addEventListener("DOMContentLoaded", function() {
    const storedPasswordHashHex = "7e8c729e4e4ecc320cb411c4d1419bf5fbad733212d4e9491b7630aaef0b8b1c"; // Remplacez par le hachage sécurisé du mot de passe en format hexadécimal

    const enteredPassword = prompt("Entrez le mot de passe :", "");

    // Fonction pour hacher le mot de passe en format hexadécimal
    function hashPassword(password) {
        const sha256Hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        return sha256Hash;
    }

    const enteredPasswordHashHex = hashPassword(enteredPassword);

    // Vérifiez si le mot de passe entré correspond au hachage stocké
    if (enteredPasswordHashHex === storedPasswordHashHex) {
        function calculateElapsedTime() {
            const targetDateUTC = new Date("2023-09-13T19:55:00Z");
            const currentDate = new Date();
            const timeDifference = currentDate - targetDateUTC;

            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const timeElapsedElement = document.getElementById("timeElapsed");
            if (timeElapsedElement) {
                timeElapsedElement.textContent = `Il s'est écoulé ${daysDifference} jours, ${hoursDifference} heures, ${minutesDifference} minutes et ${secondsDifference} secondes.`;
            }
        }

        calculateElapsedTime();

        // Actualisez toutes les secondes
        setInterval(calculateElapsedTime, 1000);
    } else {
        alert("Mot de passe incorrect. Cette page est protégée par un mot de passe.");
        window.location.href = "about:blank"; // Redirigez vers une page vide en cas de mot de passe incorrect
    }
});
