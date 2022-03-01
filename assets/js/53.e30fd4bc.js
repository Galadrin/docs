(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{496:function(e,t,o){"use strict";o.r(t);var s=o(8),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"history-of-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#history-of-changes"}},[e._v("#")]),e._v(" History of Changes")]),e._v(" "),o("p",[e._v("This is a history of changes to the Osmosis repository.")]),e._v(" "),o("h2",{attrs:{id:"v7-0-2-carbon-feb-28-2022-height-3401000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v7-0-2-carbon-feb-28-2022-height-3401000"}},[e._v("#")]),e._v(" v7.0.2 (Carbon) - Feb 28, 2022 - Height 3401000")]),e._v(" "),o("p",[e._v("The Carbon upgrade is a notable feature release to Osmosis. It introduces two new modules, "),o("code",[e._v("[Superfluid](https://github.com/osmosis-labs/osmosis/tree/main/x/superfluid)")]),e._v(", and "),o("code",[e._v("[Permissioned CosmWasm](https://github.com/CosmWasm/wasmd/)")]),e._v(". It furthermore introduces a large amount of improvements to the lockup module.")]),e._v(" "),o("p",[e._v("A brief description of each of the changes and how they impact folks:")]),e._v(" "),o("h3",{attrs:{id:"permissioned-cosmwasm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#permissioned-cosmwasm"}},[e._v("#")]),e._v(" Permissioned Cosmwasm")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.cosmwasm.com/docs/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmwasm"),o("OutboundLink")],1),e._v(" contracts can now be deployed onto Osmosis if approved by governance! This is a huge change, bringing a VM for allowing more applications to deploy onto Osmosis rapidly. See the "),o("a",{attrs:{href:""}},[e._v("example scripts")]),e._v(" for guidance on how to make the txs.\nThe huge advantages of a VM also bring a few temporary limitations. State Sync for full nodes and builds on ARM chip architectures will temporarily not work, until further upstream software patches are in.")]),e._v(" "),o("h3",{attrs:{id:"superfluid-staking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#superfluid-staking"}},[e._v("#")]),e._v(" Superfluid Staking")]),e._v(" "),o("p",[e._v("In the superfluid module, you can stake LP shares for specific governance-approved pools. This is a large change to proof of stake, allowing useful DeFi assets with native asset backing to help secure the network. All existing staking queries work as before, but staking rewards queries will not include rewards for superfluid'd assets. Superfluid reward distribution works like LP rewards, where they happen at epoch time and go to accounts directly. You have to use superfluid queries.")]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/tree/main/x/superfluid",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" for an example of how superfluid staking works.")]),e._v(" "),o("h3",{attrs:{id:"iavl-improvements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iavl-improvements"}},[e._v("#")]),e._v(" IAVL improvements")]),e._v(" "),o("p",[e._v("This release brings in the significant IAVL speedups developed within v6.3.0 and v6.4.0. Check the changelogs for those releases for more details. At a high level view, it immensely (~8x) speeds up performance of state reads, and iteration. (And therefore queries and state execution) It adds a relatively marginal increased cost to state writing at the end of each block.")]),e._v(" "),o("h3",{attrs:{id:"lockup-module-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lockup-module-updates"}},[e._v("#")]),e._v(" Lockup module updates")]),e._v(" "),o("p",[e._v("This release brings with it several UX improvements for the "),o("code",[e._v("x/lockup")]),e._v(" module. It allows partial unlockings of bonded assets that are not superfluidly staked, and it combines lockups that had durations that were very slightly off from one of the 'rewardable durations'. (1 day, 7 day, 14 day)")]),e._v(" "),o("p",[e._v("Integrators that track things by lockup ID will notice the lockup ID's change, and that an address will now only maintain 1 lockup per (denom, duration) pair.")]),e._v(" "),o("p",[e._v("See more in the "),o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/blob/v7.0.2/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"v6-0-0-boron-11-dec-16-2021-height-2464000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v6-0-0-boron-11-dec-16-2021-height-2464000"}},[e._v("#")]),e._v(" v6.0.0 (Boron-11) - Dec 16, 2021 - Height 2464000")]),e._v(" "),o("p",[e._v("This upgrade fixes a bug in the v5.0.0 upgrade's app.go, which prevents new IBC channels from being created. All existing IBC channels are believed to be fine.")]),e._v(" "),o("p",[e._v("This binary is compatible with v5.0.0 until block height "),o("code",[e._v("2464000")]),e._v(", estimated to be at 4PM UTC Monday December 20th. All nodes must upgrade to this binary prior to that height. This upgrade is intended to be voted in by on-chain governance, but to otherwise be used in place of v5.0.0 at all times.")]),e._v(" "),o("h3",{attrs:{id:"testing-methodology"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing-methodology"}},[e._v("#")]),e._v(" Testing methodology")]),e._v(" "),o("p",[e._v("This upgrade has been tested to be compatible with v5.0.0 until the upgrade height on a testnet. This was done by having a v6.0.0 validator and a v5.0.0 full node peered to each other. Prior to upgrade height, both would reject channel open txs. Past upgrade height, the validator would accept channel opens, and the v5.0.0 full node would crash with a conflicting state hash (as expected). The v6.0.0 node could then receive IBC sends/receives.")]),e._v(" "),o("h3",{attrs:{id:"changelog-lines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog-lines"}},[e._v("#")]),e._v(" Changelog lines")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/commit/907001b08686ed980e0afa3d97a9c5e2f095b79f#diff-a172cedcae47474b615c54d510a5d84a8dea3032e958587430b413538be3f333",target:"_blank",rel:"noopener noreferrer"}},[e._v("Patch"),o("OutboundLink")],1),e._v(" - Revert back to passing in the correct staking keeper into the IBC keeper constructor.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/osmosis-labs/ibc-go/pull/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Height gating change"),o("OutboundLink")],1),e._v(" - Height gate the change in IBC, to make the v6.0.0 binary compatible until upgrade height.")])]),e._v(" "),o("h2",{attrs:{id:"v5-0-0-boron-dec-10-2021-height-2383300"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v5-0-0-boron-dec-10-2021-height-2383300"}},[e._v("#")]),e._v(" v5.0.0 (Boron) - Dec 10, 2021 - Height 2383300")]),e._v(" "),o("p",[e._v("This upgrade is primarily a maintenance upgrade to Osmosis. It updates many of the libraries, brings in the modules "),o("a",{attrs:{href:"https://github.com/osmosis-labs/bech32-ibc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bech32IBC"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.44.3/x/authz/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authz"),o("OutboundLink")],1),e._v(", [Txfees], prepares the chain for "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 32"),o("OutboundLink")],1),e._v(", and has numerous bug fixes.")]),e._v(" "),o("p",[e._v("If you are building this release from source, you must use go 1.17.")]),e._v(" "),o("p",[e._v("This upgrade adds features such as:")]),e._v(" "),o("ul",[o("li",[e._v("Upgrade Cosmos-SDK to "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/v0.44.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK v0.44"),o("OutboundLink")],1),e._v(" from SDK v0.42 For a full list of updates in Cosmos-SDK v0.44.3 please see its "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.44.x/CHANGELOG.md#v0443---2021-10-21",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("New modules:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.44.3/x/authz/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authz"),o("OutboundLink")],1),e._v(" - allows granting arbitrary privileges from one account (the granter) to another account (the grantee). Authorizations must be granted for a particular Msg service method one by one using an implementation of the Authorization interface.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/osmosis-labs/bech32-ibc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bech32IBC"),o("OutboundLink")],1),e._v(" - Allows auto-routing of send msgs to addresses on other chains, once configured by governance. Allows you to do a bank send on Osmosis to a cosmos1... address, and it automatically gets IBC'd there.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/tree/main/x/txfees",target:"_blank",rel:"noopener noreferrer"}},[e._v("TxFees"),o("OutboundLink")],1),e._v(" - Enables validators to easily accept txfees in multiple assets")])])]),e._v(" "),o("li",[e._v("Implements "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 32"),o("OutboundLink")],1),e._v(" - Clawback of unclaimed uosmo and uion on airdrop end date. (December 15th, 5PM UTC)")]),e._v(" "),o("li",[e._v("Upgrade IBC from a standalone module in the SDK to "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v2.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC v2"),o("OutboundLink")],1),e._v(". This improves the utility of Ethereum Bridges and Cosmwasm bridges.")]),e._v(" "),o("li",[e._v("Blocking OFAC banned ETH addresses")]),e._v(" "),o("li",[e._v("Numerous bug fixes, gas fixes, and speedups.")])]),e._v(" "),o("p",[e._v("See more in the "),o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/blob/v5.0.0/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"v5-0-0-rc2-dec-10-20201"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v5-0-0-rc2-dec-10-20201"}},[e._v("#")]),e._v(" v5.0.0-rc2 - Dec 10, 20201")]),e._v(" "),o("p",[e._v("Release candidate #2 of v5.0.0, for use on the public testnet.")]),e._v(" "),o("p",[e._v("High level overview of upgrades included in this:")]),e._v(" "),o("ul",[o("li",[e._v("Upgrade to SDK v0.44, include authz module. Also upgrade to IBC v2")]),e._v(" "),o("li",[e._v("Add Bech32IBC, so once governance approves certain IBC channels, you can just send to other chains addresses like cosmos1..., and the chain will handle IBC'ing it out for you")]),e._v(" "),o("li",[e._v("Allow whitelisted tx fee tokens based on conversion rate to OSMO. This means that a single min-fee can be set in osmo, and a full node will accept fees in atoms, etc. at an equivalent spot price derived from the AMMs. (The tx fees are not auto-converted)")]),e._v(" "),o("li",[e._v("Reduce growth rate of epoch time due to common user actions")]),e._v(" "),o("li",[e._v("{Minor bug fixes}")])]),e._v(" "),o("h2",{attrs:{id:"v5-0-0-rc1-dec-8-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v5-0-0-rc1-dec-8-2021"}},[e._v("#")]),e._v(" v5.0.0-rc1 - Dec 8, 2021")]),e._v(" "),o("p",[e._v("rc1 of v5.0.0, for testing.")]),e._v(" "),o("p",[e._v("High level overview of upgrades included in this:")]),e._v(" "),o("ul",[o("li",[e._v("Upgrade to SDK v0.44, include authz module. Also upgrade to IBC v2")]),e._v(" "),o("li",[e._v("Add "),o("a",{attrs:{href:"https://github.com/osmosis-labs/bech32-ibc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bech32IBC"),o("OutboundLink")],1),e._v(", so once governance approves certain IBC channels, you can just send to other chains addresses like cosmos1..., and the chain will handle IBC'ing it out for you")]),e._v(" "),o("li",[e._v("Allow whitelisted tx fee tokens based on conversion rate to OSMO. This means that a single min-fee can be set in osmo, and a full node will accept fees in atoms, etc. at an equivalent spot price derived from the AMMs. (The tx fees are not auto-converted)")]),e._v(" "),o("li",[e._v("Reduce growth rate of epoch time due to common user actions")]),e._v(" "),o("li",[e._v("{Minor bug fixes}")])]),e._v(" "),o("h2",{attrs:{id:"v4-2-0-relayer-dec-3-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v4-2-0-relayer-dec-3-2021"}},[e._v("#")]),e._v(" v4.2.0-relayer - Dec 3, 2021")]),e._v(" "),o("p",[e._v("Increases IAVL cache for improved relayer performance")]),e._v(" "),o("h2",{attrs:{id:"v4-2-0-oct-29-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v4-2-0-oct-29-2021"}},[e._v("#")]),e._v(" v4.2.0 - Oct 29, 2021")]),e._v(" "),o("p",[e._v("The v4.2.0 release includes significant reductions in the I/O time used at the Osmosis epoch, and mempool improvements.\nThe prior release, v4.1.0, improved the CPU time taken by the epoch significantly, but did not change the I/O time which thanks to very detailed profiling from @blockpane , was determined to be the bottleneck.")]),e._v(" "),o("p",[e._v("This is not a permanent fix for I/O time, but instead a constant factor improvement.")]),e._v(" "),o("p",[e._v("As a headsup, there has been two full nodes who tried the new software version and had an app hash issue. This has not been seen on any other nodes using this software version. It is suspected that there was some unfortunate db corruption unrelated to update (or perhaps the new Tendermint version), but please do exercise caution / gradual rollouts.")]),e._v(" "),o("h3",{attrs:{id:"what-s-changed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-s-changed"}},[e._v("#")]),e._v(" What's Changed")]),e._v(" "),o("ul",[o("li",[e._v("Lower epoch I/O time by an expected 2-3x https://github.com/osmosis-labs/osmosis/pull/561")]),e._v(" "),o("li",[e._v("Add local mempool filter to block txs that take > 25M gas. (This in large part fixed the chain congestion issue of 10/28)")]),e._v(" "),o("li",[e._v("Add local mempool filter to block redundant IBC relays  https://github.com/osmosis-labs/osmosis/pull/556")]),e._v(" "),o("li",[e._v("Upgrade to Tendermint v0.34.14 by @faddat  in https://github.com/osmosis-labs/osmosis/pull/529")]),e._v(" "),o("li",[e._v("Add rollback to command tree by @jackzampolin in https://github.com/osmosis-labs/osmosis/pull/555")])]),e._v(" "),o("p",[e._v("Also huge thanks to @blockpane who was instrumental in diagnosing the I/O time issues, and @jackzampolin @faddat @clemensgg @UnityChaos @imperator-co @wolfcontract for the work in testing the various new versions here!")]),e._v(" "),o("h2",{attrs:{id:"v4-1-0-oct-14-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v4-1-0-oct-14-2021"}},[e._v("#")]),e._v(" v4.1.0 - Oct 14, 2021")]),e._v(" "),o("p",[e._v("This release provides large speedups to the Osmosis epoch time. It does by reducing the amount of events emitted, to have less redundant data. It now only emits one event per address receiving LP rewards.")]),e._v(" "),o("p",[e._v("This upgrade is state-compatible with v4.0.0, and has been tested to be so with many different node operators now. It is encouraged for full nodes & validators to upgrade, in order to significantly reduce their load every epoch.")]),e._v(" "),o("h2",{attrs:{id:"v4-0-0-berylium-sep-19-2021-height-1314500"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-0-berylium-sep-19-2021-height-1314500"}},[e._v("#")]),e._v(" v4.0.0 (Berylium) - Sep 19, 2021 - Height 1314500")]),e._v(" "),o("p",[e._v("This upgrade is a large stability upgrade to Osmosis. It brings with it faster epochs, and improved computation time for various on-chain operations, and fixes to the high gas amounts needed for bonding and unbonding txs.")]),e._v(" "),o("p",[e._v("The features of this upgrade are:")]),e._v(" "),o("ul",[o("li",[e._v("Fixing gas issues for bonding and unbonding tokens (NOTE: issues at epoch of there just being super high amounts of activity may still persist, with it taking seconds for txs to get into a block)")]),e._v(" "),o("li",[e._v("Removing the need for users to withdraw locked tokens once they are finished unlocking")]),e._v(" "),o("li",[e._v("Adding a governance parameter for a minimum fee to create a pool.")]),e._v(" "),o("li",[e._v("Implements prop 12")])]),e._v(" "),o("p",[e._v("See more in the "),o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/blob/v4.0.0/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"v4-0-0-rc1-sep-18-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-0-rc1-sep-18-2021"}},[e._v("#")]),e._v(" v4.0.0-rc1 - Sep 18, 2021")]),e._v(" "),o("p",[e._v("Release candidate #1 for osmosis v4")]),e._v(" "),o("p",[e._v("This change primarily brings numerous stability improvements to the chain. It brings with it faster epochs, and improved computation time for various on-chain operations, and fixes to the high gas amounts needed for bonding and unbonding txs.")]),e._v(" "),o("p",[e._v("The features of this upgrade are:")]),e._v(" "),o("ul",[o("li",[e._v("Fixing gas issues for bonding and unbonding tokens (NOTE: issues at epoch of there just being super high amounts of activity may still persist, with it taking seconds for txs to get into a block)")]),e._v(" "),o("li",[e._v("Removing the need for users to withdraw locked tokens once they are finished unlocking")]),e._v(" "),o("li",[e._v("Adding a governance parameter for a minimum fee to create a pool.")])]),e._v(" "),o("p",[e._v("If no bugs are found, this state machine will be what is on Osmosis v4.")]),e._v(" "),o("p",[e._v("More thorough changelog "),o("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/blob/v4.0.0-rc1/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"v3-1-0-aug-7-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v3-1-0-aug-7-2021"}},[e._v("#")]),e._v(" v3.1.0 - Aug 7, 2021")]),e._v(" "),o("p",[e._v("This upgrade is meant as a patch that must be hard forked in, due to a bug in proposal 16 breaking on-chain governance of Osmosis. It prevents governance proposals from moving into voting period. Details of the bug are at the bottom. This is the version that should be used, not "),o("code",[e._v("v2.0.0")]),e._v(" or "),o("code",[e._v("v3.0.0")]),e._v(".")]),e._v(" "),o("p",[e._v("This upgrade includes:")]),e._v(" "),o("ul",[o("li",[e._v("Update to Cosmos-SDK v0.42.9, which fixes state syncing.")]),e._v(" "),o("li",[e._v("At block height 712000\n"),o("ul",[o("li",[e._v("Fixing the immediate governance issue, by changing the min_deposit parameter to what was intended")]),e._v(" "),o("li",[e._v("Fixing the bug in min_commission_rate, that allowed validators to create a validator with a lower rate than the minimum. It also bumps up all validators to the minimum.")])])])]),e._v(" "),o("h3",{attrs:{id:"proposed-upgrade-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposed-upgrade-process"}},[e._v("#")]),e._v(" Proposed Upgrade Process")]),e._v(" "),o("ul",[o("li",[e._v("Every node should upgrade their software version from "),o("code",[e._v("v1.0.x")]),e._v(" to "),o("code",[e._v("v3.1.0")]),e._v(" before the upgrade block height 712000. If you use cosmovisor, simply swap out the binary at genesis/bin to be v3.1.0, and restart the node.")]),e._v(" "),o("li",[e._v("Upon upgrading their setup, every validator should place a deposit on a signalling proposal, to signal readiness for the upgrade. (1uosmo suffices)")]),e._v(" "),o("li",[e._v("Every node should check in between August 10th 1:00AM UTC and 2:00PM UTC, and see if 2/3rds of validators have put a non-zero deposit on the proposal. If so, no further action needed (unless they didn't upgrade yet, in which case they should). If 2/3rds of validators have not signalled readiness by this time, then the upgrade is considered to have not reached agreement, and all nodes should downgrade their binary back to "),o("code",[e._v("v1.0.x")]),e._v(" for further coordination.")])]),e._v(" "),o("h3",{attrs:{id:"governance-bug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-bug"}},[e._v("#")]),e._v(" Governance Bug")]),e._v(" "),o("p",[e._v('In proposal 16, the \'min_deposit\' value on the proposal was set to 500osmo and not the intended 500000000uosmo. On chain, the denomination "osmo" doesn\'t exist, there is only "uosmo" (Similar to how on Bitcoin there are only sats).')]),e._v(" "),o("p",[e._v("Due to this parameter change, a sufficient governance deposit to enter on-chain voting must be in Osmo, which is a denomination that does not exist on chain. Thus no new governance proposals can enter a voting period and get decided on chain.")]),e._v(" "),o("h2",{attrs:{id:"v3-0-0-lithium-aug-6-2021-height-712000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v3-0-0-lithium-aug-6-2021-height-712000"}},[e._v("#")]),e._v(" v3.0.0 (Lithium) - Aug 6, 2021 - Height 712000")]),e._v(" "),o("p",[e._v("This upgrade is meant as a patch that must be hard forked in, due to a bug in proposal 16 breaking on-chain governance of Osmosis. It prevents governance proposals from moving into voting period. Details of the bug are at the bottom. This is the version that should be used, not "),o("code",[e._v("v2.0.0")]),e._v(".")]),e._v(" "),o("p",[e._v("This upgrade includes:")]),e._v(" "),o("ul",[o("li",[e._v("Update to Cosmos-SDK v0.42.9, which fixes state syncing.")]),e._v(" "),o("li",[e._v("At block height 712000\n"),o("ul",[o("li",[e._v("Fixing the immediate governance issue, by changing the min_deposit parameter to what was intended")]),e._v(" "),o("li",[e._v("Fixing the bug in min_commission_rate, that allowed validators to create a validator with a lower rate than the minimum. It also bumps up all validators to the minimum.")])])])]),e._v(" "),o("h3",{attrs:{id:"proposed-upgrade-process-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposed-upgrade-process-2"}},[e._v("#")]),e._v(" Proposed Upgrade Process")]),e._v(" "),o("ul",[o("li",[e._v("Every node should upgrade their software version from "),o("code",[e._v("v1.0.x")]),e._v(" to "),o("code",[e._v("v3.0.x")]),e._v(" before the upgrade block height 712000. If you use cosmovisor, simply swap out the binary at genesis/bin to be v3.0.0, and restart the node.")]),e._v(" "),o("li",[e._v("Upon upgrading their setup, every validator should place a deposit on a signalling proposal, to signal readiness for the upgrade. (1uosmo suffices)")]),e._v(" "),o("li",[e._v("Every node should check in between August 10th 1AM UTC and 1PM UTC, and see if 2/3rds of validators have put a non-zero deposit on the proposal. If so, no further action needed (unless they didn't upgrade yet, in which case they should). If 2/3rds of validators have not signalled readiness by this time, then the upgrade is considered to have not reached agreement, and all nodes should downgrade their binary back to "),o("code",[e._v("v1.0.x")]),e._v(" for further coordination.")])]),e._v(" "),o("h3",{attrs:{id:"governance-bug-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-bug-2"}},[e._v("#")]),e._v(" Governance Bug")]),e._v(" "),o("p",[e._v('In proposal 16, the \'min_deposit\' value on the proposal was set to 500osmo and not the intended 500000000uosmo. On chain, the denomination "osmo" doesn\'t exist, there is only "uosmo" (Similar to how on Bitcoin there are only sats).')]),e._v(" "),o("p",[e._v("Due to this parameter change, a sufficient governance deposit to enter on-chain voting must be in Osmo, which is a denomination that does not exist on chain. Thus no new governance proposals can enter a voting period and get decided on chain.")]),e._v(" "),o("h2",{attrs:{id:"v2-0-0-helium-aug-3-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0-helium-aug-3-2021"}},[e._v("#")]),e._v(" v2.0.0 (Helium) - Aug 3, 2021")]),e._v(" "),o("p",[e._v("This upgrade is meant as a patch that must be hard forked in, due to a bug in "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/16",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposal 16"),o("OutboundLink")],1),e._v(" breaking on-chain governance of Osmosis. Details of the bug are at the bottom.")]),e._v(" "),o("p",[e._v("UPDATE: The version that will be used on-chain will not be this version, due to a bug in the cosmos-sdk version v0.42.7")]),e._v(" "),o("p",[e._v("This upgrade includes")]),e._v(" "),o("ul",[o("li",[e._v("Fixing the immediate governance issue, by changing the min_deposit parameter to what was intended")]),e._v(" "),o("li",[e._v("Fixing the bug in min_commission_rate, that allowed validators to create a validator with a lower rate than the minimum. It also bumps up all validators to the minimum.")]),e._v(" "),o("li",[e._v("Update to Cosmos-SDK v0.42.7, which fixes state syncing.")])]),e._v(" "),o("h3",{attrs:{id:"governance-bug-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-bug-3"}},[e._v("#")]),e._v(" Governance Bug")]),e._v(" "),o("p",[e._v("In proposal 16, the 'min_deposit' value on the proposal was set to 500"),o("strong",[e._v("osmo")]),e._v(' and not the intended 500000000uosmo. On chain, the denomination "osmo" doesn\'t exist, there is only "uosmo" (Similar to how on Bitcoin there are only sats).')]),e._v(" "),o("p",[e._v("Due to this parameter change, a sufficient governance deposit to enter on-chain voting must be in Osmo, which is a denomination that does not exist on chain. Thus no new governance proposals can enter a voting period and get decided on chain.")]),e._v(" "),o("h2",{attrs:{id:"v2-0-0-rc1-jul-9-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0-rc1-jul-9-2021"}},[e._v("#")]),e._v(" v2.0.0-rc1 - Jul 9, 2021")]),e._v(" "),o("p",[e._v("Upgrade to SDK version v0.42.7 which fixes state sync")]),e._v(" "),o("h2",{attrs:{id:"v2-0-0-rc1-jun-28-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0-rc1-jun-28-2021"}},[e._v("#")]),e._v(" v2.0.0-rc1 - Jun 28, 2021")]),e._v(" "),o("p",[e._v("This release contains a release candidate for the v2.0.0 upgrade for Osmosis.")]),e._v(" "),o("p",[e._v("We are using this to test if cosmovisor auto-downloading of binaries works as wel")]),e._v(" "),o("h2",{attrs:{id:"v1-0-0-hydrogen-jun-17-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-0-hydrogen-jun-17-2021"}},[e._v("#")]),e._v(" v1.0.0 (Hydrogen) - Jun 17, 2021")]),e._v(" "),o("p",[e._v("This version is the version of the binary for Osmosis launch.")]),e._v(" "),o("p",[e._v("It is fully compatible with tag v1.0.0, it just fixes a bug where "),o("code",[e._v("osmosisd version")]),e._v(" didn't show the correct version.")]),e._v(" "),o("h2",{attrs:{id:"v1-0-0-rc1-jun-16-2021"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-0-rc1-jun-16-2021"}},[e._v("#")]),e._v(" v1.0.0-rc1 - Jun 16, 2021")]),e._v(" "),o("p",[e._v("Release candidate 0 for Osmosis mainnet!")]),e._v(" "),o("h1",{attrs:{id:"medium-archives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#medium-archives"}},[e._v("#")]),e._v(" Medium archives")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://medium.com/Osmosis/archive/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium Archives"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);