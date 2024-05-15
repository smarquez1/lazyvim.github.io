"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[7928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(6010);const s="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),i=t(7294),s=t(6010),r=t(2466),l=t(6550),o=t(1980),p=t(7392),c=t(12);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,p]=f({queryString:t,groupId:a}),[u,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=o??u;return d({value:e,tabValues:s})?e:null})();(0,i.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),v(e)}),[p,v,s]),tabValues:s}}var g=t(2389);const y="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:l,selectValue:o,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==l&&(u(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},r,{className:(0,s.Z)("tabs__item",b,r?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function _(e){const n=v(e);return i.createElement("div",{className:(0,s.Z)("tabs-container",y)},i.createElement(h,(0,a.Z)({},e,n)),i.createElement(k,(0,a.Z)({},e,n)))}function T(e){const n=(0,g.Z)();return i.createElement(_,(0,a.Z)({key:String(n)},e))}},965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(7462),i=(t(7294),t(3905)),s=t(4866),r=t(5162);const l={},o="LSP",p={unversionedId:"plugins/lsp",id:"plugins/lsp",title:"LSP",description:"\u2328\ufe0f Customizing LSP Keymaps",source:"@site/docs/plugins/lsp.md",sourceDirName:"plugins",slug:"/plugins/lsp",permalink:"/plugins/lsp",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/lsp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linting",permalink:"/plugins/linting"},next:{title:"TreeSitter",permalink:"/plugins/treesitter"}},c={},u=[{value:"\u2328\ufe0f Customizing LSP Keymaps",id:"\ufe0f-customizing-lsp-keymaps",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"neoconf.nvim",id:"neoconfnvim",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig-1",level:2},{value:"neodev.nvim",id:"neodevnvim",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"mason-lspconfig.nvim",id:"mason-lspconfignvim",level:2},{value:"mason.nvim",id:"masonnvim-1",level:2}],m={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp"},"LSP"),(0,i.kt)("h2",{id:"\ufe0f-customizing-lsp-keymaps"},"\u2328\ufe0f Customizing ",(0,i.kt)("a",{parentName:"h2",href:"/keymaps#lsp"},"LSP Keymaps")),(0,i.kt)("p",null,"The syntax for adding, deleting and changing ",(0,i.kt)("a",{parentName:"p",href:"/keymaps#lsp"},"LSP Keymaps"),",\nis the same as for ",(0,i.kt)("a",{parentName:"p",href:"/configuration/plugins#%EF%B8%8F-adding--disabling-plugin-keymaps"},"plugin keymaps"),",\nbut you need to configure it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- LSP keymaps\n{\n  "neovim/nvim-lspconfig",\n  init = function()\n    local keys = require("lazyvim.plugins.lsp.keymaps").get()\n    -- change a keymap\n    keys[#keys + 1] = { "K", "<cmd>echo \'hello\'<cr>" }\n    -- disable a keymap\n    keys[#keys + 1] = { "K", false }\n    -- add a keymap\n    keys[#keys + 1] = { "H", "<cmd>echo \'hello\'<cr>" }\n  end,\n}\n')),(0,i.kt)("h2",{id:"nvim-lspconfig"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,i.kt)("p",null," lspconfig"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- options for vim.diagnostic.config()\n  ---@type vim.diagnostic.Opts\n  diagnostics = {\n    underline = true,\n    update_in_insert = false,\n    virtual_text = {\n      spacing = 4,\n      source = "if_many",\n      prefix = "\u25cf",\n      -- this will set set the prefix to a function that returns the diagnostics icon based on the severity\n      -- this only works on a recent 0.10.0 build. Will be set to "\u25cf" when not supported\n      -- prefix = "icons",\n    },\n    severity_sort = true,\n    signs = {\n      text = {\n        [vim.diagnostic.severity.ERROR] = LazyVim.config.icons.diagnostics.Error,\n        [vim.diagnostic.severity.WARN] = LazyVim.config.icons.diagnostics.Warn,\n        [vim.diagnostic.severity.HINT] = LazyVim.config.icons.diagnostics.Hint,\n        [vim.diagnostic.severity.INFO] = LazyVim.config.icons.diagnostics.Info,\n      },\n    },\n  },\n  -- Enable this to enable the builtin LSP inlay hints on Neovim >= 0.10.0\n  -- Be aware that you also will need to properly configure your LSP server to\n  -- provide the inlay hints.\n  inlay_hints = {\n    enabled = false,\n  },\n  -- Enable this to enable the builtin LSP code lenses on Neovim >= 0.10.0\n  -- Be aware that you also will need to properly configure your LSP server to\n  -- provide the code lenses.\n  codelens = {\n    enabled = false,\n  },\n  -- add any global capabilities here\n  capabilities = {},\n  -- options for vim.lsp.buf.format\n  -- `bufnr` and `filter` is handled by the LazyVim formatter,\n  -- but can be also overridden when specified\n  format = {\n    formatting_options = nil,\n    timeout_ms = nil,\n  },\n  -- LSP Server Settings\n  ---@type lspconfig.options\n  servers = {\n    lua_ls = {\n      -- mason = false, -- set to false if you don\'t want this server to be installed with mason\n      -- Use this to add any additional keymaps\n      -- for specific lsp servers\n      ---@type LazyKeysSpec[]\n      -- keys = {},\n      settings = {\n        Lua = {\n          workspace = {\n            checkThirdParty = false,\n          },\n          codeLens = {\n            enable = true,\n          },\n          completion = {\n            callSnippet = "Replace",\n          },\n          doc = {\n            privateName = { "^_" },\n          },\n          hint = {\n            enable = true,\n            setType = false,\n            paramType = true,\n            paramName = "Disable",\n            semicolon = "Disable",\n            arrayIndex = "Disable",\n          },\n        },\n      },\n    },\n  },\n  -- you can do any additional lsp server setup here\n  -- return true if you don\'t want this server to be setup with lspconfig\n  ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>\n  setup = {\n    -- example to setup with typescript.nvim\n    -- tsserver = function(_, opts)\n    --   require("typescript").setup({ server = opts })\n    --   return true\n    -- end,\n    -- Specify * to use this function as a fallback for any server\n    -- ["*"] = function(server, opts) end,\n  },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  event = "LazyFile",\n  dependencies = {\n    { "folke/neoconf.nvim", cmd = "Neoconf", config = false, dependencies = { "nvim-lspconfig" } },\n    { "folke/neodev.nvim", opts = {} },\n    "mason.nvim",\n    "williamboman/mason-lspconfig.nvim",\n  },\n  ---@class PluginLspOpts\n  opts = {\n    -- options for vim.diagnostic.config()\n    ---@type vim.diagnostic.Opts\n    diagnostics = {\n      underline = true,\n      update_in_insert = false,\n      virtual_text = {\n        spacing = 4,\n        source = "if_many",\n        prefix = "\u25cf",\n        -- this will set set the prefix to a function that returns the diagnostics icon based on the severity\n        -- this only works on a recent 0.10.0 build. Will be set to "\u25cf" when not supported\n        -- prefix = "icons",\n      },\n      severity_sort = true,\n      signs = {\n        text = {\n          [vim.diagnostic.severity.ERROR] = LazyVim.config.icons.diagnostics.Error,\n          [vim.diagnostic.severity.WARN] = LazyVim.config.icons.diagnostics.Warn,\n          [vim.diagnostic.severity.HINT] = LazyVim.config.icons.diagnostics.Hint,\n          [vim.diagnostic.severity.INFO] = LazyVim.config.icons.diagnostics.Info,\n        },\n      },\n    },\n    -- Enable this to enable the builtin LSP inlay hints on Neovim >= 0.10.0\n    -- Be aware that you also will need to properly configure your LSP server to\n    -- provide the inlay hints.\n    inlay_hints = {\n      enabled = false,\n    },\n    -- Enable this to enable the builtin LSP code lenses on Neovim >= 0.10.0\n    -- Be aware that you also will need to properly configure your LSP server to\n    -- provide the code lenses.\n    codelens = {\n      enabled = false,\n    },\n    -- add any global capabilities here\n    capabilities = {},\n    -- options for vim.lsp.buf.format\n    -- `bufnr` and `filter` is handled by the LazyVim formatter,\n    -- but can be also overridden when specified\n    format = {\n      formatting_options = nil,\n      timeout_ms = nil,\n    },\n    -- LSP Server Settings\n    ---@type lspconfig.options\n    servers = {\n      lua_ls = {\n        -- mason = false, -- set to false if you don\'t want this server to be installed with mason\n        -- Use this to add any additional keymaps\n        -- for specific lsp servers\n        ---@type LazyKeysSpec[]\n        -- keys = {},\n        settings = {\n          Lua = {\n            workspace = {\n              checkThirdParty = false,\n            },\n            codeLens = {\n              enable = true,\n            },\n            completion = {\n              callSnippet = "Replace",\n            },\n            doc = {\n              privateName = { "^_" },\n            },\n            hint = {\n              enable = true,\n              setType = false,\n              paramType = true,\n              paramName = "Disable",\n              semicolon = "Disable",\n              arrayIndex = "Disable",\n            },\n          },\n        },\n      },\n    },\n    -- you can do any additional lsp server setup here\n    -- return true if you don\'t want this server to be setup with lspconfig\n    ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>\n    setup = {\n      -- example to setup with typescript.nvim\n      -- tsserver = function(_, opts)\n      --   require("typescript").setup({ server = opts })\n      --   return true\n      -- end,\n      -- Specify * to use this function as a fallback for any server\n      -- ["*"] = function(server, opts) end,\n    },\n  },\n  ---@param opts PluginLspOpts\n  config = function(_, opts)\n    if LazyVim.has("neoconf.nvim") then\n      local plugin = require("lazy.core.config").spec.plugins["neoconf.nvim"]\n      require("neoconf").setup(require("lazy.core.plugin").values(plugin, "opts", false))\n    end\n\n    -- setup autoformat\n    LazyVim.format.register(LazyVim.lsp.formatter())\n\n    -- setup keymaps\n    LazyVim.lsp.on_attach(function(client, buffer)\n      require("lazyvim.plugins.lsp.keymaps").on_attach(client, buffer)\n    end)\n\n    local register_capability = vim.lsp.handlers["client/registerCapability"]\n\n    vim.lsp.handlers["client/registerCapability"] = function(err, res, ctx)\n      ---@diagnostic disable-next-line: no-unknown\n      local ret = register_capability(err, res, ctx)\n      local client = vim.lsp.get_client_by_id(ctx.client_id)\n      local buffer = vim.api.nvim_get_current_buf()\n      require("lazyvim.plugins.lsp.keymaps").on_attach(client, buffer)\n      return ret\n    end\n\n    -- diagnostics signs\n    if vim.fn.has("nvim-0.10.0") == 0 then\n      if type(opts.diagnostics.signs) ~= "boolean" then\n        for severity, icon in pairs(opts.diagnostics.signs.text) do\n          local name = vim.diagnostic.severity[severity]:lower():gsub("^%l", string.upper)\n          name = "DiagnosticSign" .. name\n          vim.fn.sign_define(name, { text = icon, texthl = name, numhl = "" })\n        end\n      end\n    end\n\n    -- inlay hints\n    if opts.inlay_hints.enabled then\n      LazyVim.lsp.on_attach(function(client, buffer)\n        if client.supports_method("textDocument/inlayHint") then\n          LazyVim.toggle.inlay_hints(buffer, true)\n        end\n      end)\n    end\n\n    -- code lens\n    if opts.codelens.enabled and vim.lsp.codelens then\n      LazyVim.lsp.on_attach(function(client, buffer)\n        if client.supports_method("textDocument/codeLens") then\n          vim.lsp.codelens.refresh()\n          --- autocmd BufEnter,CursorHold,InsertLeave <buffer> lua vim.lsp.codelens.refresh()\n          vim.api.nvim_create_autocmd({ "BufEnter", "CursorHold", "InsertLeave" }, {\n            buffer = buffer,\n            callback = vim.lsp.codelens.refresh,\n          })\n        end\n      end)\n    end\n\n    if type(opts.diagnostics.virtual_text) == "table" and opts.diagnostics.virtual_text.prefix == "icons" then\n      opts.diagnostics.virtual_text.prefix = vim.fn.has("nvim-0.10.0") == 0 and "\u25cf"\n        or function(diagnostic)\n          local icons = require("lazyvim.config").icons.diagnostics\n          for d, icon in pairs(icons) do\n            if diagnostic.severity == vim.diagnostic.severity[d:upper()] then\n              return icon\n            end\n          end\n        end\n    end\n\n    vim.diagnostic.config(vim.deepcopy(opts.diagnostics))\n\n    local servers = opts.servers\n    local has_cmp, cmp_nvim_lsp = pcall(require, "cmp_nvim_lsp")\n    local capabilities = vim.tbl_deep_extend(\n      "force",\n      {},\n      vim.lsp.protocol.make_client_capabilities(),\n      has_cmp and cmp_nvim_lsp.default_capabilities() or {},\n      opts.capabilities or {}\n    )\n\n    local function setup(server)\n      local server_opts = vim.tbl_deep_extend("force", {\n        capabilities = vim.deepcopy(capabilities),\n      }, servers[server] or {})\n\n      if opts.setup[server] then\n        if opts.setup[server](server, server_opts) then\n          return\n        end\n      elseif opts.setup["*"] then\n        if opts.setup["*"](server, server_opts) then\n          return\n        end\n      end\n      require("lspconfig")[server].setup(server_opts)\n    end\n\n    -- get all the servers that are available through mason-lspconfig\n    local have_mason, mlsp = pcall(require, "mason-lspconfig")\n    local all_mslp_servers = {}\n    if have_mason then\n      all_mslp_servers = vim.tbl_keys(require("mason-lspconfig.mappings.server").lspconfig_to_package)\n    end\n\n    local ensure_installed = {} ---@type string[]\n    for server, server_opts in pairs(servers) do\n      if server_opts then\n        server_opts = server_opts == true and {} or server_opts\n        -- run manual setup if mason=false or if this is a server that cannot be installed with mason-lspconfig\n        if server_opts.mason == false or not vim.tbl_contains(all_mslp_servers, server) then\n          setup(server)\n        elseif server_opts.enabled ~= false then\n          ensure_installed[#ensure_installed + 1] = server\n        end\n      end\n    end\n\n    if have_mason then\n      mlsp.setup({\n        ensure_installed = vim.tbl_deep_extend(\n          "force",\n          ensure_installed,\n          LazyVim.opts("mason-lspconfig.nvim").ensure_installed or {}\n        ),\n        handlers = { setup },\n      })\n    end\n\n    if LazyVim.lsp.get_config("denols") and LazyVim.lsp.get_config("tsserver") then\n      local is_deno = require("lspconfig.util").root_pattern("deno.json", "deno.jsonc")\n      LazyVim.lsp.disable("tsserver", is_deno)\n      LazyVim.lsp.disable("denols", function(root_dir)\n        return not is_deno(root_dir)\n      end)\n    end\n  end,\n}\n')))),(0,i.kt)("h2",{id:"neoconfnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/neoconf.nvim"},"neoconf.nvim")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/neoconf.nvim", cmd = "Neoconf", config = false, dependencies = { "nvim-lspconfig" } }\n')))),(0,i.kt)("h2",{id:"nvim-lspconfig-1"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-lspconfig" }\n')))),(0,i.kt)("h2",{id:"neodevnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/neodev.nvim"},"neodev.nvim")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/neodev.nvim", opts = {} }\n')))),(0,i.kt)("h2",{id:"masonnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"mason.nvim"\n')))),(0,i.kt)("h2",{id:"mason-lspconfignvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig.nvim")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"williamboman/mason-lspconfig.nvim"\n')))),(0,i.kt)("h2",{id:"masonnvim-1"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,i.kt)("p",null," cmdline tools and lsp servers"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ensure_installed = {\n    "stylua",\n    "shfmt",\n    -- "flake8",\n  },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n\n  "williamboman/mason.nvim",\n  cmd = "Mason",\n  keys = { { "<leader>cm", "<cmd>Mason<cr>", desc = "Mason" } },\n  build = ":MasonUpdate",\n  opts = {\n    ensure_installed = {\n      "stylua",\n      "shfmt",\n      -- "flake8",\n    },\n  },\n  ---@param opts MasonSettings | {ensure_installed: string[]}\n  config = function(_, opts)\n    require("mason").setup(opts)\n    local mr = require("mason-registry")\n    mr:on("package:install:success", function()\n      vim.defer_fn(function()\n        -- trigger FileType event to possibly load this newly installed LSP server\n        require("lazy.core.handler.event").trigger({\n          event = "FileType",\n          buf = vim.api.nvim_get_current_buf(),\n        })\n      end, 100)\n    end)\n    local function ensure_installed()\n      for _, tool in ipairs(opts.ensure_installed) do\n        local p = mr.get_package(tool)\n        if not p:is_installed() then\n          p:install()\n        end\n      end\n    end\n    if mr.refresh then\n      mr.refresh(ensure_installed)\n    else\n      ensure_installed()\n    end\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);