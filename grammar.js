module.exports = grammar({
  name: 'sql',

  extras: $ => [
    /\s\n/,
    /\s/,
    $.comment,
    $.marginalia,
  ],

  precedences: $ => [
    [
      'unary_not',
      'binary_exp',
      'binary_times',
      'binary_plus',
      'binary_in',
      'binary_compare',
      'binary_relation',
      'clause_connective',
    ],
  ],

  word: $ => $._identifier,

  rules: {
    program: $ => repeat(
      // TODO: other kinds of definitions
      choice(
        seq(
          $.keyword_with,
          $.cte,
          repeat(
            seq(
              ',',
              $.cte,
            ),
          ),
          $.statement,
        ),
        $.statement,
      )
    ),

    keyword_select: _ => make_keyword("select"),
    keyword_delete: _ => make_keyword("delete"),
    keyword_insert: _ => make_keyword("insert"),
    keyword_replace: _ => make_keyword("replace"),
    keyword_update: _ => make_keyword("update"),
    keyword_into: _ => make_keyword("into"),
    keyword_values: _ => make_keyword("values"),
    keyword_set: _ => make_keyword("set"),
    keyword_from: _ => make_keyword("from"),
    keyword_left: _ => make_keyword("left"),
    keyword_right: _ => make_keyword("right"),
    keyword_inner: _ => make_keyword("inner"),
    keyword_outer: _ => make_keyword("outer"),
    keyword_cross: _ => make_keyword("cross"),
    keyword_join: _ => make_keyword("join"),
    keyword_lateral: _ => make_keyword("lateral"),
    keyword_on: _ => make_keyword("on"),
    keyword_where: _ => make_keyword("where"),
    keyword_order_by: _ => make_keyword("order by"),
    keyword_group_by: _ => make_keyword("group by"),
    keyword_having: _ => make_keyword("having"),
    keyword_desc: _ => make_keyword("desc"),
    keyword_asc: _ => make_keyword("asc"),
    keyword_limit: _ => make_keyword("limit"),
    keyword_offset: _ => make_keyword("offset"),
    keyword_primary: _ => make_keyword("primary"),
    keyword_create: _ => make_keyword("create"),
    keyword_alter: _ => make_keyword("alter"),
    keyword_drop: _ => make_keyword("drop"),
    keyword_add: _ => make_keyword("add"),
    keyword_table: _ => make_keyword("table"),
    keyword_view: _ => make_keyword("view"),
    keyword_materialized: _ => make_keyword("materialized"),
    keyword_function: _ => make_keyword("function"),
    keyword_return: _ => make_keyword("return"),
    keyword_begin: _ => make_keyword("begin"),
    keyword_end: _ => make_keyword("end"),
    keyword_returns: _ => make_keyword("returns"),
    keyword_language: _ => make_keyword("language"),
    keyword_external: _ => make_keyword("external"),
    keyword_security: _ => make_keyword("security"),
    keyword_definer: _ => make_keyword("definer"),
    keyword_invoker: _ => make_keyword("invoker"),
    keyword_invoker: _ => make_keyword("invoker"),
    keyword_immutable: _ => make_keyword("immutable"),
    keyword_stable: _ => make_keyword("stable"),
    keyword_volatile: _ => make_keyword("volatile"),
    keyword_contains: _ => make_keyword("contains"),
    keyword_leakproof: _ => make_keyword("leakproof"),
    keyword_transform: _ => make_keyword("transform"),
    keyword_type: _ => make_keyword("type"),
    keyword_window: _ => make_keyword("window"),
    keyword_strict: _ => make_keyword("strict"),
    keyword_called: _ => make_keyword("called"),
    keyword_input: _ => make_keyword("input"),
    keyword_parallel: _ => make_keyword("parallel"),
    keyword_unsafe: _ => make_keyword("unsafe"),
    keyword_restricted: _ => make_keyword("restricted"),
    keyword_restrict: _ => make_keyword("restrict"),
    keyword_safe: _ => make_keyword("safe"),
    keyword_cost: _ => make_keyword("cost"),
    keyword_rows: _ => make_keyword("rows"),
    keyword_support: _ => make_keyword("support"),
    keyword_set: _ => make_keyword("set"),
    keyword_current: _ => make_keyword("current"),
    keyword_current_role: _ => make_keyword("current_role"),
    keyword_current_user: _ => make_keyword("current_user"),
    keyword_sql: _ => make_keyword("sql"),
    keyword_no: _ => make_keyword("no"),
    keyword_reads: _ => make_keyword("reads"),
    keyword_modifies: _ => make_keyword("modifies"),
    keyword_data: _ => make_keyword("data"),
    keyword_comment: _ => make_keyword("comment"),
    keyword_not: _ => make_keyword("not"),
    keyword_deterministic: _ => make_keyword("deterministic"),
    keyword_column: _ => make_keyword("column"),
    keyword_key: _ => make_keyword("key"),
    keyword_as: _ => make_keyword("as"),
    keyword_distinct: _ => make_keyword("distinct"),
    keyword_constraint: _ => make_keyword("constraint"),
    keyword_count: _ => make_keyword("count"),
    keyword_max: _ => make_keyword("max"),
    keyword_min: _ => make_keyword("min"),
    keyword_avg: _ => make_keyword("avg"),
    keyword_case: _ => make_keyword("case"),
    keyword_when: _ => make_keyword("when"),
    keyword_then: _ => make_keyword("then"),
    keyword_else: _ => make_keyword("else"),
    keyword_end: _ => make_keyword("end"),
    keyword_in: _ => make_keyword("in"),
    keyword_and: _ => make_keyword("and"),
    keyword_or: _ => make_keyword("or"),
    keyword_is: _ => make_keyword("is"),
    keyword_not: _ => make_keyword("not"),
    keyword_force: _ => make_keyword("force"),
    keyword_using: _ => make_keyword("using"),
    keyword_use: _ => make_keyword("use"),
    keyword_index: _ => make_keyword("index"),
    keyword_for: _ => make_keyword("for"),
    keyword_if: _ => make_keyword("if"),
    keyword_exists: _ => make_keyword("exists"),
    keyword_auto_increment: _ => make_keyword("auto_increment"),
    keyword_default: _ => make_keyword("default"),
    keyword_cascade: _ => make_keyword("cascade"),
    keyword_with: _ => make_keyword("with"),
    keyword_no: _ => make_keyword("no"),
    keyword_data: _ => make_keyword("data"),
    keyword_rename: _ => make_keyword("rename"),
    keyword_to: _ => make_keyword("to"),
    keyword_schema: _ => make_keyword("schema"),
    keyword_owner: _ => make_keyword("owner"),
    keyword_temp: _ => make_keyword("temp"),
    keyword_temporary: _ => make_keyword("temporary"),
    keyword_union: _ => make_keyword("union"),
    keyword_all: _ => make_keyword("all"),
    keyword_except: _ => make_keyword("except"),
    keyword_intersect: _ => make_keyword("intersect"),
    keyword_returning: _ => make_keyword("returning"),
    keyword_enum: _ => make_keyword("enum"),
    keyword_collate: _ => make_keyword("collate"),
    keyword_range: _ => make_keyword("range"),
    keyword_subtype: _ => make_keyword("subtype"),
    keyword_subtype_opclass: _ => make_keyword("subtype_opclass"),
    keyword_subtype_diff: _ => make_keyword("subtype_diff"),
    keyword_collation: _ => make_keyword("collation"),
    keyword_canonical: _ => make_keyword("canonical"),
    keyword_attribute: _ => make_keyword("attribute"),
    keyword_value: _ => make_keyword("value"),
    keyword_before: _ => make_keyword("before"),
    keyword_after: _ => make_keyword("after"),
    keyword_recieve: _ => make_keyword("recieve"),
    keyword_send: _ => make_keyword("send"),
    keyword_typmod_in: _ => make_keyword("typmod_in"),
    keyword_typmod_out: _ => make_keyword("typmod_out"),
    keyword_analyze: _ => make_keyword("analyze"),
    keyword_subscript: _ => make_keyword("subscript"),
    keyword_storage: _ => make_keyword("storage"),
    keyword_none: _ => make_keyword("none"),
    keyword_plain: _ => make_keyword("plain"),
    keyword_extended: _ => make_keyword("extended"),
    keyword_external: _ => make_keyword("external"),

    _temporary: $ => choice($.keyword_temp, $.keyword_temporary),
    _not_null: $ => seq($.keyword_not, $.keyword_null),
    _primary_key: $ => seq($.keyword_primary,  $.keyword_key),
    
    _if_exists: $ => seq($.keyword_if, $.keyword_exists),
    _if_not_exists: $ => seq($.keyword_if, $.keyword_not, $.keyword_exists),
    _or_replace: $ => seq($.keyword_or, $.keyword_replace),
    _default_null: $ => seq($.keyword_default, $.keyword_null),
    direction: $ => choice($.keyword_desc, $.keyword_asc),

    // Types
    keyword_null: _ => make_keyword("null"),
    _keyword_true: _ => make_keyword("true"),
    _keyword_false: _ => make_keyword("false"),

    _keyword_boolean: _ => make_keyword("boolean"),

    _keyword_smallserial: _ => make_keyword("smallserial"),
    _keyword_serial: _ => make_keyword("serial"),
    _keyword_bigserial: _ => make_keyword("bigserial"),
    _keyword_smallint: _ => make_keyword("smallint"),
    _keyword_int: _ => choice(make_keyword("int"), make_keyword("integer")),
    _keyword_bigint: _ => make_keyword("bigint"),
    _keyword_decimal: _ => make_keyword("decimal"),
    _keyword_numeric: _ => make_keyword("numeric"),
    _keyword_real: _ => make_keyword("real"),
    _double: _ => seq(make_keyword("double"), make_keyword("precision")),

    _keyword_money: _ => make_keyword("money"),

    _keyword_char: _ => choice(make_keyword("char"), make_keyword("character")),
    _keyword_varchar: _ => choice(
      make_keyword("varchar"),
      seq(
        make_keyword("character"),
        make_keyword("varying"),
      )
    ),
    _keyword_text: _ => make_keyword("text"),
    _keyword_uuid: _ => make_keyword("uuid"),

    _keyword_json: _ => make_keyword("json"),
    _keyword_jsonb: _ => make_keyword("jsonb"),
    _keyword_xml: _ => make_keyword("xml"),

    _keyword_bytea: _ => make_keyword("bytea"),

    _keyword_date: _ => make_keyword("date"),
    _keyword_datetime: _ => make_keyword("datetime"),
    _keyword_timestamp: _ => seq(
      make_keyword("timestamp"),
      optional(
        seq(
          make_keyword('without'),
          make_keyword('time'),
          make_keyword('zone')
        )
      ),
    ),
    _keyword_timestamptz: _ => choice(
      make_keyword('timestamptz'),
      seq(
        make_keyword("timestamp"),
        make_keyword('with'),
        make_keyword('time'),
        make_keyword('zone')
      ),
    ),

    _keyword_geometry: _ => make_keyword("geometry"),
    _keyword_geography: _ => make_keyword("geography"),
    _keyword_box2d: _ => make_keyword("box2d"),
    _keyword_box3d: _ => make_keyword("box3d"),

    type: $ => choice(
      alias($._builtin_type, $.builtin),
      alias($._identifier, $.custom),
    ),

    _builtin_type: $ => choice(
      $._keyword_boolean,

      $._keyword_smallserial,
      $._keyword_serial,
      $._keyword_bigserial,
      $._keyword_smallint,
      $._keyword_int,

      $._bigint,
      $._decimal,
      $._numeric,
      $._keyword_real,
      $._double,

      $._keyword_money,

      $._char,
      $._varchar,
      $._keyword_text,

      $._keyword_uuid,

      $._keyword_json,
      $._keyword_jsonb,
      $._keyword_xml,

      $._keyword_bytea,

      $._keyword_date,
      $._keyword_datetime,
      $._keyword_timestamp,
      $._keyword_timestamptz,

      $._keyword_geometry,
      $._keyword_geography,
      $._keyword_box2d,
      $._keyword_box3d,

      $._bigint,
      $._char,
      $._varchar,
      $._decimal,
      $._numeric,
    ),

    _bigint: $ => parametric_type($, $._keyword_bigint),
    _decimal: $ => choice(
      parametric_type($, $._keyword_decimal, ['precision']),
      parametric_type($, $._keyword_decimal, ['precision', 'scale']),
    ),
    _numeric: $ => choice(
      parametric_type($, $._keyword_numeric, ['precision']),
      parametric_type($, $._keyword_numeric, ['precision', 'scale']),
    ),
    _char: $ => parametric_type($, $._keyword_char),
    _varchar: $ => parametric_type($, $._keyword_varchar),

    comment: _ => /--.*\n/,
    marginalia: _ => /\/'*.*\*\//,

    cte: $ => seq(
      $.identifier,
      $.keyword_as,
      '(',
      alias(
        choice(
          $._select_statement,
          $._delete_statement,
          $._insert_statement,
          $._update_statement,
        ),
        $.statement,
      ),
      ')',
    ),

    statement: $ => seq(
      choice(
        $._select_statement,
        $._delete_statement,
        $._create_statement,
        $._alter_statement,
        $._drop_statement,
        $._insert_statement,
        $._update_statement,
      ),
      ';',
    ),

    _select_statement: $ => seq(
      $.select,
      optional($.from),
      repeat(
        seq(
          choice(
            seq(
              $.keyword_union,
              optional($.keyword_all),
            ),
            $.keyword_except,
            $.keyword_intersect,
          ),
          $.select,
          optional($.from),
        ),
      ),
    ),

    select: $ => seq(
      $.keyword_select,
      choice(
        seq(
          optional($.keyword_distinct),
          $.select_expression,
        ),
        seq(
          $.keyword_distinct,
          '(',
          $.select_expression,
          ')',
        ),
      ),
    ),

    select_expression: $ => choice(
      seq(
        $._field,
        optional($._alias),
        repeat(
          seq(
            ',',
            $._field,
            optional($._alias),
          ),
        ),
      ),
    ),

    _delete_statement: $ => seq(
      $.delete,
      alias($._delete_from, $.from),
      optional($.returning),
    ),

    _delete_from: $ => seq(
      $.keyword_from,
      $.table_expression,
      optional($.where),
      optional($.order_by),
      optional($.limit),
    ),

    delete: $ => seq(
      $.keyword_delete,
      optional($.index_hint),
    ),

    _create_statement: $ => seq(
      choice(
        $.create_table,
        $.create_view,
        $.create_materialized_view,
        $.create_function,
        $.create_type,
        // TODO sequence
      ),
    ),

    create_table: $ => seq(
      $.keyword_create,
      optional($._temporary),
      $.keyword_table,
      optional($._if_not_exists),
      $.table_reference,
      $.column_definitions,
      optional($.table_options),
    ),

    create_view: $ => seq(
      $.keyword_create,
      optional($._or_replace),
      $.keyword_view,
      optional($._if_not_exists),
      $.table_reference,
      $.keyword_as,
      $._select_statement,
    ),

    create_materialized_view: $ => seq(
      $.keyword_create,
      optional($._or_replace),
      $.keyword_materialized,
      $.keyword_view,
      optional($._if_not_exists),
      $.table_reference,
      $.keyword_as,
      $._select_statement,
      optional(
        choice(
          seq(
            $.keyword_with,
            $.keyword_data,
          ),
          seq(
            $.keyword_with,
            $.keyword_no,
            $.keyword_data,
          )
        )
      )
    ),

    create_function: $ => seq(
      $.keyword_create,
      $.keyword_function,
      optional($._if_not_exists),
      $.function_reference,
      $.function_arg_definitions,
      $.function_returns,
      $.function_attributes,
    ),

    function_arg_definitions: $ => seq(
      '(',
      optional(
        $._function_arg_defintions,
      ),
      ')',
    ),

    _function_arg_defintions: $ => seq(
      $.function_arg_defintion,
      optional(
        repeat1(
          seq(
            ',',
            $.function_arg_defintion,
          ),
        ),
      ),
    ),

    function_arg_defintion: $ => seq(
      optional(field('name', $.identifier)),
      $.type,
      optional(seq(
        choice("=", $.keyword_default),
        $._expression,
      )),
    ),

    function_returns: $ => seq(
      $.keyword_returns,
      choice(
        $.type,
        $._function_returns_table,
      )
    ),

    _function_returns_table: $ => seq(
      $.keyword_table,
      $.column_definitions,
    ),

    function_attributes: $ => repeat1(choice(
      $.function_language,
      $._function_attributes_postgres,
      $._function_attributes_mysql,
      $.function_definition,
      $.function_body,
    )),

    function_language: $ => seq(
      $.keyword_language,
      field('language', $.identifier),
    ),

    _function_attributes_postgres: $ => choice(
      $._function_postgres_transfroms,
      alias($._function_postgres_window, $.function_window),
      alias($._function_postgres_behavior, $.function_behavior),
      alias($._function_postgres_leakproof, $.function_leakproof),
      alias($._function_postgres_null_inputs, $.function_null_inputs),
      alias($._function_postgres_security, $.function_security),
      alias($._function_postgres_parallel, $.function_parallel),
      alias($._function_postgres_cost, $.function_cost),
      alias($._function_postgres_rows, $.function_rows),
      alias($._function_postgres_support, $.function_support),
      alias($._function_postgres_set, $.function_set),
    ),

    _function_postgres_transfroms: $ => seq(
      alias($._function_postgres_transfrom, $.function_transfrom),
      optional(repeat1(seq(
        ',',
        alias($._function_postgres_transfrom, $.function_transfrom),
      ))),
    ),

    _function_postgres_transfrom: $ => seq(
      $.keyword_transform,
      optional(seq(
        $.keyword_for,
        $.keyword_type,
        $.type,
      )),
    ),

    _function_postgres_window: $ => seq(
      $.keyword_window,
    ),

    _function_postgres_behavior: $ => choice(
      $.keyword_immutable,
      $.keyword_stable,
      $.keyword_volatile,
    ),

    _function_postgres_leakproof: $ => seq(
      optional($.keyword_not),
      $.keyword_leakproof,
    ),

    _function_postgres_security: $ => seq(
      optional($.keyword_external),
      $.keyword_security,
      choice(
        $.keyword_invoker,
        $.keyword_definer,
      ),
    ),

    _function_postgres_null_inputs: $ => choice(
      $.keyword_strict,
      seq(
        $.keyword_called,
        $.keyword_on,
        $.keyword_null,
        $.keyword_input,
      ),
      seq(
        $.keyword_returns,
        $.keyword_null,
        $.keyword_on,
        $.keyword_null,
        $.keyword_input,
      ),
    ),

    _function_postgres_parallel: $ => seq(
      $.keyword_parallel,
      choice(
        $.keyword_unsafe,
        $.keyword_restricted,
        $.keyword_safe,
      ),
    ),

    _function_postgres_cost: $ => seq(
      $.keyword_cost,
      $.number,
    ),
    
    _function_postgres_rows: $ => seq(
      $.keyword_rows,
      $.number,
    ),
    
    _function_postgres_support: $ => seq(
      $.keyword_support,
      optional(
        seq(
          field('schema', $.identifier),
          '.',
        ),
      ),
      field('name', $.identifier),
    ),
    
    _function_postgres_set: $ => seq(
      $.keyword_set,
      $.identifier,
      optional(choice(
        seq(
          $.keyword_to,
          $._expression,
        ),
        seq(
          "=",
          $._expression,
        ),
        seq(
          $.keyword_from,
          $.keyword_current,
        ),
      )),
    ),

    _function_attributes_mysql: $ => choice(
      alias($._function_mysql_security, $.function_security),
      alias($._function_mysql_behavior, $.function_behavior),
      alias($._function_mysql_comment, $.function_comment),
      alias($._function_mysql_deterministic, $.function_deterministic),
    ),

    _function_mysql_security: $ => seq(
      $.keyword_sql,
      $.keyword_security,
      choice(
        $.keyword_invoker,
        $.keyword_definer,
      ),
    ),

    _function_mysql_behavior: $ => choice(
      seq($.keyword_contains, $.keyword_sql),
      seq($.keyword_no, $.keyword_sql),
      seq($.keyword_reads, $.keyword_sql, $.keyword_data),
      seq($.keyword_modifies, $.keyword_sql, $.keyword_data),
    ),

    _function_mysql_comment: $ => seq(
      $.keyword_comment,
      $.string
    ),
    
    _function_mysql_deterministic: $ => seq(
      optional($.keyword_not),
      $.keyword_deterministic,
    ),

    function_body: $ => choice(
      seq($.keyword_return, $._expression),
      $.function_block,
    ),

    function_block: $ => seq(
      $.keyword_begin,
      repeat1($.statement),
      $.keyword_end,
    ),

    function_definition: $ => seq(
      $.keyword_as,
      seq(
        alias($._function_definition, $.string),
        optional(seq(
          ",",
          $.string,
        ))
      ),
    ),

    _function_definition: $ =>
      alias($.string, $.raw_function_definition),

    create_type: $ => seq(
      $.keyword_create,
      $.keyword_type,
      $.identifier,
      $.keyword_as,
      choice(
        $.custom_fields,
        $._enum_type,
        $._range_type,
        // TODO: Postgres create type input/output
      )
    ),
    
    custom_fields: $ => seq(
      '(',
      optional(
        $._custom_fields,
      ),
      ')',
    ),

    _custom_fields: $ => seq(
      $.custom_field,
      optional(
        repeat1(
          seq(
            ',',
            $.custom_field,
          ),
        ),
      ),
    ),

    custom_field: $ => seq(
      $.identifier,
      $.type,
      optional(seq(
        $.keyword_collate,
        $.boolean,
      )),
    ),

    _enum_type: $ => seq(
      $.keyword_enum,
      $.enum_values,
    ),

    enum_values: $ => seq(
      '(',
      optional(
        $._enum_values,
      ),
      ')',
    ),

    _enum_values: $ => seq(
      alias($.string, $.enum_value),
      optional(
        repeat1(
          seq(
            ',',
            alias($.string, $.enum_value),
          ),
        ),
      ),
    ),

    _range_type: $ => seq(
      $.keyword_range,
      $.range_values,
    ),

    range_values: $ => seq(
      '(',
      optional(
        $._range_values,
      ),
      ')',
    ),

    _range_values: $ => seq(
      $.range_value,
      optional(
        repeat1(
          seq(
            ',',
            $.range_value,
          ),
        ),
      ),
    ),

    range_value: $ => choice(
      seq($.keyword_subtype, "=", $.type),
      seq($.keyword_subtype_opclass, "=", $.identifier),
      seq($.keyword_canonical, "=", $.identifier),
      seq($.keyword_collation, "=", $.boolean),
      seq($.keyword_subtype_diff, "=", $.identifier),
    ),

    _alter_statement: $ => seq(
      choice(
        $.alter_table,
        $.alter_view,
        $.alter_type,
      ),
    ),

    alter_table: $ => seq(
      $.keyword_alter,
      $.keyword_table,
      optional($._if_exists),
      $.table_reference,
      choice(
        seq(
          choice(
            $.add_column,
            $.alter_column,
            $.drop_column,
          ),
          repeat(
            seq(
              ",",
              choice(
                $.add_column,
                $.alter_column,
                $.drop_column,
              )
            )
          )
        ),
        // some operations may not be chained to others
        $.rename_object,
        $.rename_column,
        $.set_schema,
        $.change_ownership,
      ),
    ),

    add_column: $ => seq(
      $.keyword_add,
      $.keyword_column,
      optional($._if_not_exists),
      $.column_definition,
    ),

    alter_column: $ => seq(
      // TODO constraint management
      $.keyword_alter,
      $.keyword_column,
      field('name', $.identifier),
      choice(
        seq(
          choice(
            $.keyword_set,
            $.keyword_drop,
          ),
          $.keyword_not,
          $.keyword_null,
        ),
        seq(
          optional(
            seq(
              $.keyword_set,
              $.keyword_data,
            ),
          ),
          $.keyword_type,
          $.type,
        ),
        seq(
          $.keyword_set,
          $.keyword_default,
          $._expression,
        ),
        seq(
          $.keyword_drop,
          $.keyword_default,
        ),
      ),
    ),

    drop_column: $ => seq(
      $.keyword_drop,
      $.keyword_column,
      optional($._if_exists),
      field('name', $.identifier),
    ),

    rename_column: $ => seq(
      $.keyword_rename,
      optional(
        $.keyword_column,
      ),
      field('old_name', $.identifier),
      $.keyword_to,
      field('new_name', $.identifier),
    ),

    alter_view: $ => seq(
      $.keyword_alter,
      $.keyword_view,
      optional($._if_exists),
      $.table_reference,
      choice(
        // TODO Postgres allows a single "alter column" to set or drop default
        $.rename_object,
        $.rename_column,
        $.set_schema,
        $.change_ownership,
      ),
    ),

    alter_type: $ => seq(
      $.keyword_alter,
      $.keyword_type,
      $.type,
      choice(
        // OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
        seq(
          $.keyword_owner,
          $.keyword_to,
          choice(
            $.keyword_current_role,
            $.keyword_current_user,
            $.identifier,
          ),
        ),
        // RENAME
        seq(
          $.keyword_rename,
          choice(
            // TO new_name
            seq(
              $.keyword_to,
              $.type,
            ),
            // ATTRIBUTE attribute_name TO new_attribute_name [ CASCADE | RESTRICT ]
            seq(
              $.keyword_attribute,
              $.identifier,
              $.keyword_to,
              $.identifier,
              optional(choice(
                $.keyword_cascade,
                $.keyword_restrict,
              )),
            ),
            // VALUE existing_enum_value TO new_enum_value
            seq(
              $.keyword_value,
              $.string,
              $.keyword_to,
              $.string,
            ),
            // VALUE existing_enum_value TO new_enum_value
            seq(
              $.keyword_value,
              $.string,
              $.keyword_to,
              $.string,
            ),
          ),
        ),
        // SET
        seq(
          $.keyword_set,
          choice(
            // SCHEMA new_schema
            seq(
              $.keyword_schema,
              $.identifier,
            ),
            // ( property = value [, ... ] )
            param_list($.alter_type_property)
          ),
        ),
        // ADD VALUE [ IF NOT EXISTS ] new_enum_value [ { BEFORE | AFTER } neighbor_enum_value ]
        seq(
          $.keyword_add,
          $.keyword_value,
          optional(seq($.keyword_if, $.keyword_not, $.keyword_exists)),
          $.string,
          optional(seq(
            choice($.keyword_before, $.keyword_after),
            $.string
          )),
        ),
      ),
    ),

    alter_type_property: $ => choice(
      seq(
        $.keyword_storage,
        "=",
        choice(
          $.keyword_plain,
          $.keyword_extended,
          $.keyword_external,
        ),
      ),
      seq(
        choice(
          $.keyword_recieve,
          $.keyword_send,
          $.keyword_typmod_in,
          $.keyword_typmod_out,
          $.keyword_subscript,
        ),
        "=",
        choice($.keyword_none, $.identifier),
      ), 
    ), 

    _drop_statement: $ => seq(
      choice(
        $.drop_table,
        $.drop_view,
      ),
    ),

    drop_table: $ => seq(
      $.keyword_drop,
      $.keyword_table,
      optional($._if_exists),
      $.table_reference,
      optional(
        $.keyword_cascade,
      ),
    ),

    drop_view: $ => seq(
      $.keyword_drop,
      $.keyword_view,
      optional($._if_exists),
      $.table_reference,
      optional(
        $.keyword_cascade,
      ),
    ),

    rename_object: $ => seq(
      $.keyword_rename,
      $.keyword_to,
      $.table_reference,
    ),

    set_schema: $ => seq(
      $.keyword_set,
      $.keyword_schema,
      field('schema', $.identifier),
    ),

    change_ownership: $ => seq(
      $.keyword_owner,
      $.keyword_to,
      $.identifier,
    ),

    table_reference: $ => $._reference,

    function_reference: $ => $._reference,

    _reference: $ => seq(
      optional(
        seq(
          field('schema', $.identifier),
          '.',
        ),
      ),
      field('name', $.identifier),
    ),

    _insert_statement: $ => seq(
      $.insert,
      optional($.returning),
    ),

    insert: $ => seq(
      choice($.keyword_insert, $.keyword_replace),
      $.keyword_into,
      $.insert_expression,
    ),

    insert_expression: $ => seq(
      $.table_reference,
      optional(alias($._column_list_without_order, $.column_list)),
      choice(
        seq(
          $.keyword_values,
          $.list,
        ),
        $._select_statement,
      ),
    ),

    _column_list_without_order: $ => param_list(alias($._column_without_order, $.column)),
    _column_without_order: $ => field('name', $.identifier),

    _update_statement: $ => seq(
      $.update,
      optional($.returning),
    ),

    update: $ => seq(
      $.keyword_update,
      $.update_expression,
    ),

    update_expression: $ => choice(
      $._single_table_update,
      $._multi_table_update,
    ),

    _single_table_update: $ => seq(
      $.table_reference,
      $.keyword_set,
      $.assignment_list,
      optional($.where),
      optional($.order_by),
      optional($.limit),
    ),

    _multi_table_update: $ => seq(
      $._table_references,
      $.keyword_set,
      $.assignment_list,
      optional($.where),
    ),

    _table_references: $ => seq(
      $.table_reference,
      repeat1(
        seq(',', $.table_reference),
      ),
    ),

    assignment_list: $ => seq(
      $.predicate,
      repeat(
        seq(',', $.predicate),
      ),
    ),

    table_options: $ => repeat1($.table_option),
    table_option: $ => choice(
      field('name', alias($.keyword_default, $.identifier)),
      seq(
        field('name', $.identifier),
        '=',
        field('value', $.identifier),
      ),
    ),

    column_definitions: $ => seq(
      '(',
      $.column_definition,
      repeat(
        seq(',', $.column_definition),
      ),
      optional($.constraints),
      ')',
    ),

    column_definition: $ => seq(
      field('name', $.identifier),
      $.type,
      choice(
        optional($._not_null),
        optional($._default_null),
      ),
      optional($.keyword_auto_increment),
      optional($._primary_key),
      optional($.direction),
    ),

    constraints: $ => seq(
      ',',
      $.constraint,
      repeat(
        seq(',', $.constraint),
      ),
    ),

    constraint: $ => choice(
      $._constraint_literal,
      $._key_constraint,
      $._primary_key_constraint,
    ),

    _constraint_literal: $ => seq(
      $.keyword_constraint,
      field('name', $.identifier),
      $._primary_key,
      $.column_list,
    ),

    _primary_key_constraint: $ => seq(
      $._primary_key,
      $.column_list,
    ),

    _key_constraint: $ => seq(
      $.keyword_key,
      field('name', $.identifier),
      $.column_list,
    ),

    column_list: $ => param_list($.column),

    column: $ => seq(
      field('name', $.identifier),
      optional($.direction),
    ),

    _field: $ => seq(
      choice(
        $._expression,
        $.all_fields,
      ),
    ),

    all_fields: $ => seq(
      optional(
        seq(
          optional(
            seq(
              field('schema', $.identifier),
              '.',
            ),
          ),
          field('table_alias', $.identifier),
          '.',
        ),
      ),
      '*',
    ),

    case: $ => seq(
      $.keyword_case,
      choice(
        // simplified CASE x WHEN
        seq(
          $._expression,
          $.keyword_when,
          $._expression,
          $.keyword_then,
          $._expression,
          repeat(
            seq(
              $.keyword_when,
              $._expression,
              $.keyword_then,
              $._expression,
            )
          ),
        ),
        // standard CASE WHEN x, where x must be a predicate
        seq(
          $.keyword_when,
          $.predicate,
          $.keyword_then,
          $._expression,
          repeat(
            seq(
              $.keyword_when,
              $.predicate,
              $.keyword_then,
              $._expression,
            )
          ),
        ),
      ),
      optional(
        seq(
          $.keyword_else,
          $._expression,
        )
      ),
      $.keyword_end,
    ),

    field: $ => seq(
      optional(
        seq(
          optional(
            seq(
              field('schema', $.identifier),
              '.',
            ),
          ),
          field('table_alias', $.identifier),
          '.',
        ),
      ),
      field('name', $.identifier),
    ),

    function_call: $ => seq(
      choice(
        $._count_function,
        $.invocation,
      ),
    ),

    invocation: $ => seq(
      $.function_reference,
      '(',
      optional(
        $._function_params,
      ),
      ')',
    ),

    _count_function: $ => seq(
      field('name', alias($.keyword_count, $.identifier)),
      '(',
      choice(
        seq(
          optional($.keyword_distinct),
          field('parameter', $._function_param),
        ),
        seq(
          $.keyword_distinct,
          '(',
          field('parameter', $._function_param),
          ')',
        ),
      ),
      ')',
    ),

    _function_param: $ => choice(
      $.predicate,
      $.function_call,
      $.field,
      prec(2, $._literal),
    ),

    _function_params: $ => seq(
      field('parameter', $._function_param),
      optional(
        repeat1(
          seq(
            ',',
            field('parameter', $._function_param),
          ),
        ),
      ),
    ),

    _alias: $ => choice(
      field('alias', $.identifier),
      seq(
        $.keyword_as,
        field('alias', $.identifier),
      ),
    ),

    from: $ => seq(
      $.keyword_from,
      $.table_expression,
      optional($.index_hint),
      repeat(
        choice(
          $.join,
          $.lateral_join,
        ),
      ),
      optional($.where),
      optional($.group_by),
      optional($.order_by),
      optional($.limit),
    ),

    table_expression: $ => seq(
      optional(
        seq(
          field('schema', $.identifier),
          '.',
        ),
      ),
      field('name', $.identifier),
      optional(
        seq(
          optional($.keyword_as),
          field('table_alias', $.identifier),
        ),
      ),
    ),

    index_hint: $ => seq(
      choice(
        $.keyword_force,
        $.keyword_use,
      ),
      $.keyword_index,
      optional(
        seq(
          $.keyword_for,
          $.keyword_join,
        ),
      ),
      '(',
      field('index_name', $.identifier),
      ')',
    ),

    join: $ => seq(
      optional(
        choice(
          $.keyword_cross,
          $.keyword_left,
          seq($.keyword_left, $.keyword_outer),
          $.keyword_right,
          seq($.keyword_right, $.keyword_outer),
          $.keyword_inner,
        ),
      ),
      $.keyword_join,
      $.table_expression,
      optional($.index_hint),
      choice(
        seq(
          $.keyword_on,
          choice(
            $.predicate,
            $.boolean,
          ),
        ),
        seq(
          $.keyword_using,
          alias($._column_list_without_order, $.column_list),
        )
      )
    ),

    lateral_join: $ => seq(
      optional(
        choice(
          // lateral joins cannot be right!
          $.keyword_cross,
          $.keyword_left,
          seq($.keyword_left, $.keyword_outer),
          $.keyword_inner,
        ),
      ),
      $.keyword_join,
      $.keyword_lateral,
      choice(
        $.invocation,
        $.subquery,
      ),
      optional(
        choice(
          seq(
            $.keyword_as,
            field('alias', $.identifier),
          ),
          field('alias', $.identifier),
        ),
      ),
      $.keyword_on,
      choice(
        $.predicate,
        $.boolean,
      ),
    ),

    where: $ => seq(
      $.keyword_where,
      $.where_expression,
    ),

    group_by: $ => seq(
      $.keyword_group_by,
      $.identifier,
      optional($._having),
    ),

    _having: $ => seq(
      $.keyword_having,
      $.predicate,
    ),

    order_by: $ => seq(
      $.keyword_order_by,
      $.order_expression,
    ),

    order_expression: $ => seq(
      $._field,
      optional($.direction),
      repeat(
        seq(
          ',',
          $._field,
          optional($.direction),
        ),
      ),
    ),

    limit: $ => seq(
      $.keyword_limit,
      $._literal,
      optional($.offset),
    ),

    offset: $ => seq(
      $.keyword_offset,
      $._literal,
    ),

    returning: $ => seq(
      $.keyword_returning,
      seq(
        $._field,
        optional($._alias),
        repeat(
          seq(
            ',',
            $._field,
            optional($._alias),
          ),
        ),
      ),
    ),

    where_expression: $ => seq(
      $._expression,
    ),

    predicate: $ => choice(
      ...[
        ['+', 'binary_plus'],
        ['-', 'binary_plus'],
        ['*', 'binary_times'],
        ['/', 'binary_times'],
        ['%', 'binary_times'],
        ['^', 'binary_exp'],
        ['=', 'binary_relation'],
        ['<', 'binary_relation'],
        ['<=', 'binary_relation'],
        ['!=', 'binary_relation'],
        ['>=', 'binary_relation'],
        ['>', 'binary_relation'],
        [seq($.keyword_is, $.keyword_distinct, $.keyword_from), 'binary_relation'],
        [seq($.keyword_is, $.keyword_not, $.keyword_distinct, $.keyword_from), 'binary_relation'],
        [$.keyword_and, 'clause_connective'],
        [$.keyword_or, 'clause_connective'],
      ].map(([operator, precedence]) =>
        prec.left(precedence, seq(
          field('left', $._expression),
          field('operator', operator),
          field('right', $._expression)
        ))
      ),
      prec.left('binary_in', seq(
        field('left', $._expression),
        field('operator', $.keyword_in),
        field('right', $.list)
      )),
      seq(
        $._expression,
        $.keyword_is,
        choice(
          $.keyword_null,
          $._not_null,
          $.boolean,
        ),
      ),
      // TODO exists/not exists (subquery)
    ),

    _expression: $ => choice(
      $._literal,
      $.field,
      $.predicate,
      $.subquery,
      $.function_call,
      $.keyword_null,
      $.case,
    ),

    subquery: $ => seq(
      '(',
      $.select,
      optional($.from),
      ')',
    ),

    list: $ => param_list($._literal),

    _literal: $ => prec(2,
      choice(
        $.number,
        $.string,
        $.boolean,
        $.keyword_null,
      ),
    ),
    
    boolean: $ => choice(
      $._keyword_true,
      $._keyword_false,
    ),

    string: $ => choice(
      $._single_quote_literal_string,
      $._double_quote_literal_string,
      $._dollar_quote_literal_string,
    ),

    _single_quote_literal_string: $ => seq(
      "'",
      repeat(choice(
        alias($.unescaped_single_string_fragment, $.string_fragment),
        $.escape_sequence
      )),
      "'"
    ),

    _double_quote_literal_string: $ => seq(
      '"',
      repeat(choice(
        alias($.unescaped_double_string_fragment, $.string_fragment),
        $.escape_sequence
      )),
      '"'    
    ),

    _dollar_quote_literal_string: $ => seq(
      '$', optional(alias($._identifier, $.token)), '$',
      repeat(choice(
        alias($.unescaped_dollar_string_fragment, $.string_fragment),
        $.escape_sequence
      )),
      '$', optional(alias($._identifier, $.token)), '$',
    ),

    // Workaround to https://github.com/tree-sitter/tree-sitter/issues/1156
    // We give names to the token() constructs containing a regexp
    // so as to obtain a node in the CST.
    //
    unescaped_double_string_fragment: $ =>
      token.immediate(prec(1, /[^"\\]+/)),
    // same here
    unescaped_single_string_fragment: $ =>
      token.immediate(prec(1, /[^'\\]+/)),
    unescaped_dollar_string_fragment: $ =>
      token.immediate(prec(1, /[^$$\\]+/)),

    escape_sequence: $ => token.immediate(seq(
      choice('\\', "''"),
      choice(
        /[^xu0-7]/,
        /[0-7]{1,3}/,
        /x[0-9a-fA-F]{2}/,
        /u[0-9a-fA-F]{4}/,
        /u{[0-9a-fA-F]+}/
      )
    )),

    number: _ => /\d+/,

    identifier: $ => choice(
      $._identifier,
      seq('`', $._identifier, '`'),
      seq('"', $._identifier, '"'),
    ),
    _identifier: _ => /([a-zA-Z_][0-9a-zA-Z_]*)/,
  }

});

function parametric_type($, type, params = ['size']) {
  return choice(
    type,
    seq(
      type,
      '(',
      // first parameter is guaranteed, shift it out of the array
      field(params.shift(), $.number),
      // then, fill in the ", next" until done
      ...params.map(p => seq(',', field(p, $.number))),
      ')',
    ),
  )
}

function param_list(field) {
  return seq(
    '(',
    field,
    repeat(
      seq(',', field)
    ),
    ')',
  )
}

function make_keyword(word) {
  return new RegExp(word + "|" + word.toUpperCase());
}
