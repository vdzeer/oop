/// <reference path="common.d.ts" />
/// <reference path="user.d.ts" />

namespace Entities {
  type DefaultEntityProps = CommonEntityProps

  type User = DefaultUser & CommonEntityProps
}

// export as namespace Entities
export = Entities
