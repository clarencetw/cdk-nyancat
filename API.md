# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### NyanCat <a name="cdk-nyancat.NyanCat"></a>

#### Initializers <a name="cdk-nyancat.NyanCat.Initializer"></a>

```typescript
import { NyanCat } from 'cdk-nyancat'

new NyanCat(scope: Construct, id: string, props?: NyanCatProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-nyancat.NyanCat.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-nyancat.NyanCat.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="cdk-nyancat.NyanCat.parameter.props"></a>

- *Type:* [`cdk-nyancat.NyanCatProps`](#cdk-nyancat.NyanCatProps)

---





## Structs <a name="Structs"></a>

### NyanCatProps <a name="cdk-nyancat.NyanCatProps"></a>

The interface for NyanCat.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NyanCatProps } from 'cdk-nyancat'

const nyanCatProps: NyanCatProps = { ... }
```

##### `instanceType`<sup>Optional</sup> <a name="cdk-nyancat.NyanCatProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)
- *Default:* t3.nano

The Instance Type.

---

##### `vpc`<sup>Optional</sup> <a name="cdk-nyancat.NyanCatProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

The VPC.

---



