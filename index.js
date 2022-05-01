function distanceFromHqInBlocks(pickupLocation)
{
    const scuberHeadquarters = 42;

    let distanceInBlocks = pickupLocation - scuberHeadquarters;
    return Math.abs(distanceInBlocks);
}

function distanceFromHqInFeet(pickupLocation)
{
    const scuberHeadquarters = 42;
    const manhattanBlockToFeet = 264;

    let distanceInBlocks = (pickupLocation * manhattanBlockToFeet) - (scuberHeadquarters * manhattanBlockToFeet);
    return Math.abs(distanceInBlocks);
}

function distanceTravelledInFeet(pickupLocation, endLocation)
{
    const manhattanBlockToFeet = 264;

    let distanceInBlocks = (pickupLocation * manhattanBlockToFeet) - (endLocation * manhattanBlockToFeet);
    return Math.abs(distanceInBlocks);
}

function calculatesFarePrice(pickupLocation, endLocation)
{
    let distanceInfeet = distanceTravelledInFeet(pickupLocation, endLocation);
    let centsPerFoot = .02;
    let fairPrice = 0;
    let flatRate = 25;

    if(distanceInfeet <= 400)
    {
        if (distanceInfeet <= 400)
        {
            distanceInfeet = 400;
        }

            fairPrice = (distanceInfeet - 400) * centsPerFoot;
            return fairPrice;
    }

    else if(distanceInfeet >= 401 && distanceInfeet <=2000)
    {
        fairPrice = (distanceInfeet - 400) * centsPerFoot;
        return fairPrice;
    }

    else if(distanceInfeet >= 2001 && distanceInfeet <=2500)
    {
        if(distanceInfeet >= 2001 && distanceInfeet <=2500)
        {
            distanceInfeet = 400;
        }

            fairPrice = ((distanceInfeet - 400) * centsPerFoot) + flatRate;
            return fairPrice;
    }

    else
    {
        return 'cannot travel that far';
    }

} 