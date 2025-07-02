// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private count;
    mapping(address => uint256) private addressCount;

    event CountIncremented(uint256 newCount);
    event AddressCountIncremented(address indexed user, uint256 newCount);

    function increment() public {
        count += 1;
        addressCount[msg.sender] += 1;
        emit CountIncremented(count);
        emit AddressCountIncremented(msg.sender, addressCount[msg.sender]);
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function getAddressCount(address user) public view returns (uint256) {
        return addressCount[user];
    }
}