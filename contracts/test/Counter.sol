// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.1;

contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}
