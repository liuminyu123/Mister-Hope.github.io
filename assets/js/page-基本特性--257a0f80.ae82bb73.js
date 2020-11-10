(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1040:function(t,a,v){"use strict";v.r(a);var i=v(3),_=Object(i.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"基本特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本特性"}},[t._v("#")]),t._v(" 基本特性")]),t._v(" "),v("h2",{attrs:{id:"应用提供多个入口点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用提供多个入口点"}},[t._v("#")]),t._v(" 应用提供多个入口点")]),t._v(" "),v("p",[t._v("Android 应用由各种可单独调用的组件构成。例如，Activity 是提供界面 (UI) 的一种应用组件。")]),t._v(" "),v("p",[t._v("“主” Activity 在用户点按您的应用图标时启动。您还可以将用户从其他位置(例如，从通知中，甚至从其他应用中)引导至某个 Activity。")]),t._v(" "),v("p",[t._v("其他组件(如广播接收器和服务)使应用能够在没有界面的情况下执行后台任务。")]),t._v(" "),v("h2",{attrs:{id:"应用可适应不同的设备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用可适应不同的设备"}},[t._v("#")]),t._v(" 应用可适应不同的设备")]),t._v(" "),v("p",[t._v("Android 允许您为不同的设备提供不同的资源。例如，您可以针对不同的屏幕尺寸创建不同的布局。系统会根据当前设备的屏幕尺寸确定要使用的布局。")]),t._v(" "),v("p",[t._v("如果应用的任何功能需要特定的硬件，如摄像头，您可以在运行时查询该设备是否具有该硬件，如果没有，则停用相应的功能。您可以指定应用需要特定的硬件，这样，Google Play 就不会允许在没有这些硬件的设备上安装应用。")]),t._v(" "),v("h2",{attrs:{id:"项目结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("app > java > com.example.myfirstapp > MainActivity")]),t._v(" "),v("p",[t._v("这是主 Activity。它是应用的入口点。当您构建和运行应用时，系统会启动此 Activity 的实例并加载其布局。")])]),t._v(" "),v("li",[v("p",[t._v("app > res > layout > activity_main.xml")]),t._v(" "),v("p",[t._v("此 XML 文件定义了 Activity 界面的布局。它包含一个 TextView 元素，其中具有“Hello, World!”文本")])]),t._v(" "),v("li",[v("p",[t._v("app > manifests > AndroidManifest.xml")]),t._v(" "),v("p",[t._v("清单文件描述了应用的基本特性并定义了每个应用组件。")])]),t._v(" "),v("li",[v("p",[t._v("Gradle Scripts > build.gradle")]),t._v(" "),v("p",[t._v("有两个使用此名称的文件: 一个针对项目“Project: My First App”，另一个针对应用模块“Module: app”。每个模块均有自己的 build.gradle 文件，但此项目当前仅有一个模块。您可以使用每个模块的 build.file 控制 Gradle 插件编译应用的方式")])])]),t._v(" "),v("h2",{attrs:{id:"运行应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行应用"}},[t._v("#")]),t._v(" 运行应用")]),t._v(" "),v("h3",{attrs:{id:"在真实设备上运行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在真实设备上运行"}},[t._v("#")]),t._v(" 在真实设备上运行")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("在开发者选项窗口中启用 USB 调试。")])]),t._v(" "),v("li",[v("p",[t._v("在 Android Studio 中，从工具栏中的运行/调试配置下拉菜单中选择您的应用。")])]),t._v(" "),v("li",[v("p",[t._v("在工具栏中，从目标设备下拉菜单中选择要用来运行应用的设备。")])]),t._v(" "),v("li",[v("p",[t._v("点击 Run")])])]),t._v(" "),v("h3",{attrs:{id:"在模拟器上运行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在模拟器上运行"}},[t._v("#")]),t._v(" 在模拟器上运行")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("在 Android Studio 中创建一个 Android 虚拟设备 (AVD)，模拟器可以使用它安装和运行您的应用。")])]),t._v(" "),v("li",[v("p",[t._v("在工具栏中，从运行/调试配置下拉菜单中选择您的应用。")])]),t._v(" "),v("li",[v("p",[t._v("从目标设备下拉菜单中，选择要用来运行应用的 AVD。")])]),t._v(" "),v("li",[v("p",[t._v("点击 Run")])])]),t._v(" "),v("h2",{attrs:{id:"术语介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#术语介绍"}},[t._v("#")]),t._v(" 术语介绍")]),t._v(" "),v("ul",[v("li",[t._v("Intent 是在相互独立的组件(如两个 Activity)之间提供运行时绑定功能的对象。Intent 表示应用执行某项操作的意图。您可以使用 Intent 执行多种任务。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);