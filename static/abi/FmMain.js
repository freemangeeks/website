window.abiMain = [
	{
		"constant": true,
		"inputs": [],
		"name": "usdtPool",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawService",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "start",
				"type": "uint256"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "usdtNodeV1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "staticPrizePool",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "start",
				"type": "uint256"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "usdtNodeV4",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "flag",
				"type": "bool"
			}
		],
		"name": "updateRevenue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStatistics",
		"outputs": [
			{
				"name": "level",
				"type": "uint256"
			},
			{
				"name": "destroyedQuantity",
				"type": "uint256"
			},
			{
				"name": "fomoTotalRevenue",
				"type": "uint256"
			},
			{
				"name": "lotteryTotalRevenue",
				"type": "uint256"
			},
			{
				"name": "difference",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "usdtVal",
				"type": "uint256"
			}
		],
		"name": "exchange",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "usdtVal",
				"type": "uint256"
			},
			{
				"name": "superiorAddr",
				"type": "address"
			}
		],
		"name": "participateFomo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getSubordinatesAndPerformanceByAddr",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getPlayer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getPlayerRechargeAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "usdtVal",
				"type": "uint256"
			}
		],
		"name": "releaseStaticPool",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRevenueAndPerformance",
		"outputs": [
			{
				"name": "withdrawalAmount",
				"type": "uint256"
			},
			{
				"name": "subbordinateTotalPerformance",
				"type": "uint256"
			},
			{
				"name": "dynamicIncome",
				"type": "uint256"
			},
			{
				"name": "staticIncome",
				"type": "uint256"
			},
			{
				"name": "withdrawn",
				"type": "uint256"
			},
			{
				"name": "outboundDifference",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "staticTotalRecharge",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "start",
				"type": "uint256"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "usdtNodeV5",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStaticStatus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "resetNodePool",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getStaticIncome",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getShareholder",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPlayerInfo",
		"outputs": [
			{
				"name": "superiorAddr",
				"type": "address"
			},
			{
				"name": "ownerAddr",
				"type": "address"
			},
			{
				"name": "numberOfInvitations",
				"type": "uint256"
			},
			{
				"name": "exist",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "playerMap",
		"outputs": [
			{
				"name": "withdrawalAmount",
				"type": "uint256"
			},
			{
				"name": "wallet",
				"type": "uint256"
			},
			{
				"name": "fomoTotalRevenue",
				"type": "uint256"
			},
			{
				"name": "lotteryTotalRevenue",
				"type": "uint256"
			},
			{
				"name": "dynamicIncome",
				"type": "uint256"
			},
			{
				"name": "rechargeAmount",
				"type": "uint256"
			},
			{
				"name": "lastRechargeAmount",
				"type": "uint256"
			},
			{
				"name": "staticIncome",
				"type": "uint256"
			},
			{
				"name": "shareholderLevel",
				"type": "uint256"
			},
			{
				"name": "underUmbrellaLevel",
				"type": "uint256"
			},
			{
				"name": "subbordinateTotalPerformance",
				"type": "uint256"
			},
			{
				"name": "isExist",
				"type": "bool"
			},
			{
				"name": "superior",
				"type": "bool"
			},
			{
				"name": "superiorAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "rewardDistribution",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_tetherAddr",
				"type": "address"
			},
			{
				"name": "_fmAddr",
				"type": "address"
			},
			{
				"name": "_gameAddr",
				"type": "address"
			},
			{
				"name": "_technologyAddr",
				"type": "address"
			},
			{
				"name": "_specifyAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
]