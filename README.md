```
$ pnpm i && node test.js # (succeeds)
$ bazel run :test
INFO: Analyzed target //:test (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
Target //:test up-to-date:
  bazel-bin/test.sh
INFO: Elapsed time: 0.176s, Critical Path: 0.00s
INFO: 1 process: 1 internal.
INFO: Build completed successfully, 1 total action
INFO: Build completed successfully, 1 total action
node:assert:123
  throw new AssertionError(obj);
  ^

AssertionError [ERR_ASSERTION]: '2452634885669898000' == '2452634885669898024'
    at Object.<anonymous> (/private/var/tmp/_bazel_johnfirebaugh/ac9df7768a3ab779e7838f2503c144cc/execroot/__main__/bazel-out/darwin-fastbuild/bin/test.sh.runfiles/__main__/test.js:13:8)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: '2452634885669898000',
  expected: '2452634885669898024',
  operator: '=='
}
```
