(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{498:function(t,e,s){"use strict";s.r(e);var n=s(8),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"epochs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epochs"}},[t._v("#")]),t._v(" Epochs")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("Often in the SDK, we would like to run certain code every-so often. The\npurpose of "),s("code",[t._v("epochs")]),t._v(" module is to allow other modules to set that they\nwould like to be signaled once every period. So another module can\nspecify it wants to execute code once a week, starting at UTC-time = x.\n"),s("code",[t._v("epochs")]),t._v(" creates a generalized epoch interface to other modules so that\nthey can easily be signalled upon such events.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("ol",[s("li",[s("strong",[s("a",{attrs:{href:"#concepts"}},[t._v("Concept")])])]),t._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#state"}},[t._v("State")])])]),t._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#events"}},[t._v("Events")])])]),t._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#keeper"}},[t._v("Keeper")])])]),t._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#hooks"}},[t._v("Hooks")])])]),t._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#queries"}},[t._v("Queries")])])]),t._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#downtime-recovery"}},[t._v("Downtime Recovery")])])])]),t._v(" "),s("h2",{attrs:{id:"concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),s("p",[t._v('The epochs module defines on-chain timers, that execute at fixed time intervals.\nOther SDK modules can then register logic to be executed at the timer ticks.\nWe refer to the period in between two timer ticks as an "epoch".')]),t._v(" "),s("p",[t._v("Every timer has a unique identifier.\nEvery epoch will have a start time, and an end time, where "),s("code",[t._v("end time = start time + timer interval")]),t._v(".\nOn Osmosis mainnet, we only utilize one identifier, with a time interval of "),s("code",[t._v("one day")]),t._v(".")]),t._v(" "),s("p",[t._v("The timer will tick at the first block whose blocktime is greater than the timer end time,\nand set the start as the prior timer end time. (Notably, its not set to the block time!)\nThis means that if the chain has been down for awhile, you will get one timer tick per block,\nuntil the timer has caught up.")]),t._v(" "),s("h2",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),s("p",[t._v("The Epochs module keeps a single "),s("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/blob/b4befe4f3eb97ebb477323234b910c4afafab9b7/proto/osmosis/epochs/genesis.proto#L12",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("EpochInfo")]),s("OutboundLink")],1),t._v(" per identifier.\nThis contains the current state of the timer with the corresponding identifier.\nIts fields are modified at every timer tick.\nEpochInfos are initialized as part of genesis initialization or upgrade logic,\nand are only modified on begin blockers.")]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("epochs")]),t._v(" module emits the following events:")]),t._v(" "),s("h3",{attrs:{id:"beginblocker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beginblocker"}},[t._v("#")]),t._v(" BeginBlocker")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Attribute Key")]),t._v(" "),s("th",[t._v("Attribute Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("epoch_start")]),t._v(" "),s("td",[t._v("epoch_number")]),t._v(" "),s("td",[t._v("{epoch_number}")])]),t._v(" "),s("tr",[s("td",[t._v("epoch_start")]),t._v(" "),s("td",[t._v("start_time")]),t._v(" "),s("td",[t._v("{start_time}")])])])]),t._v(" "),s("h3",{attrs:{id:"endblocker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endblocker"}},[t._v("#")]),t._v(" EndBlocker")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Attribute Key")]),t._v(" "),s("th",[t._v("Attribute Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("epoch_end")]),t._v(" "),s("td",[t._v("epoch_number")]),t._v(" "),s("td",[t._v("{epoch_number}")])])])]),t._v(" "),s("h2",{attrs:{id:"keepers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[t._v("#")]),t._v(" Keepers")]),t._v(" "),s("h3",{attrs:{id:"keeper-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keeper-functions"}},[t._v("#")]),t._v(" Keeper functions")]),t._v(" "),s("p",[t._v("Epochs keeper module provides utility functions to manage epochs.")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Keeper is the interface for lockup module keeper")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Keeper "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetEpochInfo returns epoch info by identifier")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetEpochInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" identifier "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EpochInfo\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SetEpochInfo set epoch info")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetEpochInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epoch types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EpochInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DeleteEpochInfo delete epoch info")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeleteEpochInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" identifier "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IterateEpochInfo iterate through epochs")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IterateEpochInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochInfo types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EpochInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stop "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all epoch infos")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AllEpochInfos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EpochInfo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the first block whose timestamp is after the duration is counted as the end of the epoch")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AfterEpochEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochIdentifier "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochNumber "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new epoch is next block of epoch end block")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BeforeEpochStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochIdentifier "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochNumber "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"how-modules-receive-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-modules-receive-hooks"}},[t._v("#")]),t._v(" How modules receive hooks")]),t._v(" "),s("p",[t._v("On hook receiver function of other modules, they need to filter\n"),s("code",[t._v("epochIdentifier")]),t._v(" and only do executions for only specific\nepochIdentifier. Filtering epochIdentifier could be in "),s("code",[t._v("Params")]),t._v(" of other\nmodules so that they can be modified by governance.")]),t._v(" "),s("p",[t._v("This is the standard dev UX of this:")]),t._v(" "),s("div",{staticClass:"language-golang line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("func (k MyModuleKeeper) AfterEpochEnd(ctx sdk.Context, epochIdentifier string, epochNumber int64) {\n    params := k.GetParams(ctx)\n    if epochIdentifier == params.DistrEpochIdentifier {\n    // my logic\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"panic-isolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#panic-isolation"}},[t._v("#")]),t._v(" Panic isolation")]),t._v(" "),s("p",[t._v("If a given epoch hook panics, its state update is reverted, but we keep\nproceeding through the remaining hooks. This allows more advanced epoch\nlogic to be used, without concern over state machine halting, or halting\nsubsequent modules.")]),t._v(" "),s("p",[t._v('This does mean that if there is behavior you expect from a prior epoch\nhook, and that epoch hook reverted, your hook may also have an issue. So\ndo keep in mind "what if a prior hook didn\'t get executed" in the safety\nchecks you consider for a new epoch hook.')]),t._v(" "),s("h2",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),s("p",[t._v("Epochs module is providing below queries to check the module's state.")]),t._v(" "),s("div",{staticClass:"language-protobuf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EpochInfos provide running epochInfos")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EpochInfos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryEpochsInfoRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryEpochsInfoResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CurrentEpoch provide current epoch of specified identifier")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rpc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CurrentEpoch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryCurrentEpochRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryCurrentEpochResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"epoch-infos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epoch-infos"}},[t._v("#")]),t._v(" Epoch Infos")]),t._v(" "),s("p",[t._v("Query the currently running epochInfos")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("osmosisd query epochs epoch-infos\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Example")]),t._v(" "),s("p",[t._v("An example output:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("epochs:\n- current_epoch: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"183"')]),t._v("\n  current_epoch_start_height: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2438409"')]),t._v("\n  current_epoch_start_time: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-12-18T17:16:09.898160996Z"')]),t._v("\n  duration: 86400s\n  epoch_counting_started: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  identifier: day\n  start_time: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-06-18T17:00:00Z"')]),t._v("\n- current_epoch: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26"')]),t._v("\n  current_epoch_start_height: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2424854"')]),t._v("\n  current_epoch_start_time: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-12-17T17:02:07.229632445Z"')]),t._v("\n  duration: 604800s\n  epoch_counting_started: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  identifier: week\n  start_time: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-06-18T17:00:00Z"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])])]),t._v(" "),s("h3",{attrs:{id:"current-epoch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-epoch"}},[t._v("#")]),t._v(" Current Epoch")]),t._v(" "),s("p",[t._v("Query the current epoch by the specified identifier")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("osmosisd query epochs current-epoch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("identifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Example")]),t._v(" "),s("p",[t._v("Query the current "),s("code",[t._v("day")]),t._v(" epoch:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("osmosisd query epochs current-epoch day\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Which in this example outputs:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("current_epoch: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"183"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);