// const button = document.getElementById('get-location-button')

// function gotLocation(position){
// console.log("position got");
// }

// function failedToGet(){
// console.log("There was issue");
// }

// button.addEventListener('click', async () => {
//     navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
// })

    // Function to trigger the emergency alarm
    function triggerEmergencyAlarm() {
        // Play an alarm sound (you can provide the path to your own sound file)
        var alarmSound = new Audio('alarm.mp3');
        alarmSound.play();

        // Display the instructions modal
        var modal = document.getElementById('instructions-modal');
        modal.style.display = 'block';

        // Close the modal when the "x" button is clicked
        var closeButton = document.getElementsByClassName('close')[0];
        closeButton.onclick = function() {
            modal.style.display = 'none';
        }

        // Close the modal when the user clicks outside the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Attach a click event listener to the emergency button
    // document.getElementById('emergency-button').addEventListener('click', triggerEmergencyAlarm);

