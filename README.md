# typeid-zero-not-being-a-valid-time

⚠️ Reproduction Repo for PR ⚠️

## usage

### clone main branch

```
git clone https://github.com/lukas-runge/typeid-zero-not-being-a-valid-time.git
```

### install deps & run test

```
yarn && yarn test
```

&rarr; test fails with `RangeError: 'unixTsMs' must be a 48-bit positive integer`

### checkout proposed fix

```
git checkout "proposed-fix"
```

### re-install deps & re-run test

```
yarn && yarn test
```

&rarr; test succeeds 🥳
