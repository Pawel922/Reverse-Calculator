class Info {
    static displayInfo(infoType) {
        const passInfo = ['Good job!', 'Excellent!', 'Great!', 'Keep it up!', 'Super!'];
        const failInfo = ['Wrong!', 'Not okay!', 'Badly!', 'Poorly!', 'Not good!'];
        const index = Math.floor(Math.random() * passInfo.length);

        switch (infoType) {
            case ("pass"):
                return passInfo[index];
            case ("fail"):
                return failInfo[index];
        }
    }
}