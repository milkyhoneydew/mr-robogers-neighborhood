Describe: returnArray()

Test: "It should return an array from 0 to inputted number."
Code: returnArray(7);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7]

Describe: beep()

Test: "It should return an array with any number containing a 1 replaced with "beep"."
Code: beep(6);
Expected Output: [0, "beep", 2, 3, 4, 5, 6]

Describe: boop()

Test: "It should return an array with any number containing a 1 replaced with "beep" and 2 replaced with "boop". If both a 1 and 2, replace with "boop".
Code: boop(13);
Expected Output:[0, "beep", "boop", 3, 4, 5, 6, 7, 8, 9, "beep", "beep", "boop", "beep"]

Describe: neighbor()

Test: "It should return an array with any number containing a 1 replaced with "beep", 2 replaced with "boop" and 3 replaced with "Won't you be my neighbor?". If both a 1 and 2, replace with "boop". If 3 is present, replace with "Won't you be my neighbor?".
Code: neighbor(24);
Expected Output: [0, "beep"...(21, 22) "Won't you be my neighbor?", "boop"]