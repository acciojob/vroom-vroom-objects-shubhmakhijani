<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorted Articles</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        ul {
            list-style-type: none;
            background: white;
            padding: 20px;
            max-width: 400px;
            margin: auto;
            border-radius: 5px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        li {
            padding: 5px 0;
        }
    </style>
</head>
<body>
    <h1>Sorted Articles</h1>
    <ul id="bands"></ul>

    <script>
        const bands = [
            'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
            'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
            'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
        ];

        function stripArticle(name) {
            return name.replace(/^(a |an |the )/i, '').trim();
        }

        const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

        document.getElementById('bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
    </script>

    <!-- Semantic Table -->
    <table border="1">
        <thead>
            <tr>
                <th>Roll Number</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>Alice</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Bob</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Charlie</td>
            </tr>
        </tbody>
    </table>

    <!-- Heading for Media List -->
    <h2>List of medias</h2>

    <!-- Ordered List -->
    <ol>
        <li>
            <img src="https://picsum.photos/id/123/200/300" alt="Sample Image">
        </li>
        <li>
            <video controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </li>
        <li>
            <audio controls>
                <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" type="audio/ogg">
                Your browser does not support the audio element.
            </audio>
        </li>
    </ol>

    <script>
        function Car(make, model) {
            this.make = make;
            this.model = model;
        }

        Car.prototype.getMakeModel = function() {
            return `${this.make} ${this.model}`;
        };

        function SportsCar(make, model, topSpeed) {
            Car.call(this, make, model);
            this.topSpeed = topSpeed;
        }

        SportsCar.prototype = Object.create(Car.prototype);
        SportsCar.prototype.constructor = SportsCar;

        SportsCar.prototype.getTopSpeed = function() {
            return this.topSpeed;
        };

        // Example usage
        const car = new SportsCar("Ferrari", "Testarossa", 200);
        console.log(car.getMakeModel()); // Output: Ferrari Testarossa
        console.log(car.getTopSpeed()); // Output: 200
    </script>
</body>
</html>
