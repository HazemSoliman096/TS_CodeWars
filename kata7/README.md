# Kata 7

## Learning TypeScript. Classes & Interfaces. Setters

    Learning TypeScript. Classes & Interfaces. Setters  

    In "Learning TypeScript. Classes & Interfaces. Getters", we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

    However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.
    Task

    You're given the ICuboid interface. Define a class Cube that implements ICuboid. Constructor function of Cube takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.
    Articles of Interest

[Learning TypeScript. Classes & Interfaces. Setters](https://www.codewars.com/kata/590b85b745eaa415e10000b1)
---------------------------------------------------------------------------------------------

## Authenticate a list of usernames

    Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

    The guidelines say that the username is valid only if:

        - it is between 6-10 characters long;
        - contains at least 1 lowercase letter;
        - contains at least 1 number;
        - contains only numbers and lowercase letters.

    Examples of arrays that will be tested:

        const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

        const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

        const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

    Notes:

        You will always be given an array with at least 1 string to check.

[Authenticate a list of usernames](https://www.codewars.com/kata/5819ba1e73b986d4160004f7)
---------------------------------------------------------------------------------------------
