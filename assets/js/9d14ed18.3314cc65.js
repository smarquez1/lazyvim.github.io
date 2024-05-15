"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[3004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),u=n(7392),m=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var b=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},o,{className:(0,l.Z)("tabs__item",y,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={},s="Terraform",u={unversionedId:"extras/lang/terraform",id:"extras/lang/terraform",title:"Terraform",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/lang/terraform.md",sourceDirName:"extras/lang",slug:"/extras/lang/terraform",permalink:"/extras/lang/terraform",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/lang/terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tailwind CSS",permalink:"/extras/lang/tailwind"},next:{title:"Tex",permalink:"/extras/lang/tex"}},m={},p=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"telescope.nvim",id:"telescopenvim",level:2},{value:"telescope-terraform-doc.nvim",id:"telescope-terraform-docnvim",level:2},{value:"telescope-terraform.nvim",id:"telescope-terraformnvim",level:2},{value:"none-ls.nvim <em>(optional)</em>",id:"none-lsnvim-optional",level:2},{value:"nvim-lint <em>(optional)</em>",id:"nvim-lint-optional",level:2},{value:"conform.nvim <em>(optional)</em>",id:"conformnvim-optional",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terraform"},"Terraform"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.terraform" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, {\n      "terraform",\n      "hcl",\n    })\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, {\n        "terraform",\n        "hcl",\n      })\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  servers = {\n    terraformls = {},\n  },\n}\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    servers = {\n      terraformls = {},\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"masonnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)("p",null," ensure terraform tools are installed"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "tflint" })\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "tflint" })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"telescopenvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  dependencies = {\n    {\n      "ANGkeith/telescope-terraform-doc.nvim",\n      config = function()\n        LazyVim.on_load("telescope.nvim", function()\n          require("telescope").load_extension("terraform_doc")\n        end)\n      end,\n    },\n    {\n      "cappyzawa/telescope-terraform.nvim",\n      config = function()\n        LazyVim.on_load("telescope.nvim", function()\n          require("telescope").load_extension("terraform")\n        end)\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"telescope-terraform-docnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ANGkeith/telescope-terraform-doc.nvim"},"telescope-terraform-doc.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "ANGkeith/telescope-terraform-doc.nvim",\n  config = function()\n    LazyVim.on_load("telescope.nvim", function()\n      require("telescope").load_extension("terraform_doc")\n    end)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"telescope-terraformnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/cappyzawa/telescope-terraform.nvim"},"telescope-terraform.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "cappyzawa/telescope-terraform.nvim",\n  config = function()\n    LazyVim.on_load("telescope.nvim", function()\n      require("telescope").load_extension("terraform")\n    end)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"none-lsnvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvimtools/none-ls.nvim"},"none-ls.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local null_ls = require("null-ls")\n  opts.sources = vim.list_extend(opts.sources or {}, {\n    null_ls.builtins.formatting.terraform_fmt,\n    null_ls.builtins.diagnostics.terraform_validate,\n  })\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimtools/none-ls.nvim",\n  optional = true,\n  opts = function(_, opts)\n    local null_ls = require("null-ls")\n    opts.sources = vim.list_extend(opts.sources or {}, {\n      null_ls.builtins.formatting.terraform_fmt,\n      null_ls.builtins.diagnostics.terraform_validate,\n    })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lint-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-lint"},"nvim-lint")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  linters_by_ft = {\n    terraform = { "terraform_validate" },\n    tf = { "terraform_validate" },\n  },\n}\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-lint",\n  optional = true,\n  opts = {\n    linters_by_ft = {\n      terraform = { "terraform_validate" },\n      tf = { "terraform_validate" },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"conformnvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/conform.nvim"},"conform.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  formatters_by_ft = {\n    terraform = { "terraform_fmt" },\n    tf = { "terraform_fmt" },\n    ["terraform-vars"] = { "terraform_fmt" },\n  },\n}\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/conform.nvim",\n  optional = true,\n  opts = {\n    formatters_by_ft = {\n      terraform = { "terraform_fmt" },\n      tf = { "terraform_fmt" },\n      ["terraform-vars"] = { "terraform_fmt" },\n    },\n  },\n}\n')))))}d.isMDXComponent=!0}}]);