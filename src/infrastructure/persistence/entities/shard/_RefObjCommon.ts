import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class RefObjCommon extends Model{}

RefObjCommon.init({
    service:{
        type: DataTypes.INTEGER,
        field: 'Service',
        allowNull: false
    },
    id:{
        type: DataTypes.INTEGER,
        field: 'ID',
        allowNull: false,
        primaryKey: true
    },
    name_object:{
        type: DataTypes.STRING,
        field: 'CodeName128',
        allowNull: false,
    },
    org_obj_name:{
        type: DataTypes.STRING,
        field: 'ObjName128',
        allowNull: false,
    },
    org_obj_code_name:{
        type: DataTypes.STRING,
        field: 'OrgObjCodeName128',
        allowNull: false,
    },
    name_str_id:{
        type: DataTypes.STRING,
        field: 'NameStrID128',
        allowNull: false,
    },
    cash_item:{
        type: DataTypes.INTEGER,
        field: 'CashItem',
        allowNull: false,
    },
    bionic:{
        type: DataTypes.INTEGER,
        field: 'Bionic',
        allowNull: false,
    },
    type_d1:{
        type: DataTypes.INTEGER,
        field: 'TypeID1',
        allowNull: false,
    },
    type_d2:{
        type: DataTypes.INTEGER,
        field: 'TypeID2',
        allowNull: false,
    },
    type_d3:{
        type: DataTypes.INTEGER,
        field: 'TypeID3',
        allowNull: false,
    },
    type_d4:{
        type: DataTypes.INTEGER,
        field: 'TypeID4',
        allowNull: false,
    },
    decay_time:{
        type: DataTypes.INTEGER,
        field: 'DecayTime',
        allowNull: false,
    },
    country:{
        type: DataTypes.INTEGER,
        field: 'Country'
    },
    rarity:{
        type: DataTypes.INTEGER,
        field: 'Rarity'
    },
    allow_trade:{
        type: DataTypes.INTEGER,
        field: 'CanTrade'
    },
    allow_sell:{
        type: DataTypes.INTEGER,
        field: 'CanSell'
    },
    allow_buy:{
        type: DataTypes.INTEGER,
        field: 'CanBuy'
    },
    allow_borrow:{
        type: DataTypes.INTEGER,
        field: 'CanBorrow'
    },
    allow_drop:{
        type: DataTypes.INTEGER,
        field: 'CanDrop'
    },
    allow_pick:{
        type: DataTypes.INTEGER,
        field: 'CanPick'
    },
    allow_repair:{
        type: DataTypes.INTEGER,
        field: 'CanRepair'
    },
    allow_revive:{
        type: DataTypes.INTEGER,
        field: 'CanRevive'
    },
    allow_use:{
        type: DataTypes.INTEGER,
        field: 'CanUse'
    },
    allow_throw:{
        type: DataTypes.INTEGER,
        field: 'CanThrow'
    },
    price:{
        type: DataTypes.INTEGER,
        field: 'Price'
    },
    repair_amount:{
        type: DataTypes.INTEGER,
        field: 'CostRepair'
    },
    revive_amount:{
        type: DataTypes.INTEGER,
        field: 'CostRevive'
    },
    borrow_amount:{
        type: DataTypes.INTEGER,
        field: 'CostBorrow'
    },
    kee_ping_fee:{
        type: DataTypes.INTEGER,
        field: 'KeepingFee'
    },
    sell_price: {
        type: DataTypes.INTEGER,
        field: 'SellPrice'
    },
    req_level_type_1:{
        type: DataTypes.INTEGER,
        field: 'ReqLevelType1'
    },
    req_level_1:{
        type: DataTypes.INTEGER,
        field: 'ReqLevel1'
    },
    req_level_type_2:{
        type: DataTypes.INTEGER,
        field: 'ReqLevelType2'
    },
    req_level_2:{
        type: DataTypes.INTEGER,
        field: 'ReqLevel2'
    },
    req_level_type_3:{
        type: DataTypes.INTEGER,
        field: 'ReqLevelType3'
    },
    req_level_3:{
        type: DataTypes.INTEGER,
        field: 'ReqLevel3'
    },
    req_level_type_4:{
        type: DataTypes.INTEGER,
        field: 'ReqLevelType4'
    },
    req_level_4:{
        type: DataTypes.INTEGER,
        field: 'ReqLevel4'
    },
    max_contain:{
        type: DataTypes.INTEGER,
        field: 'MaxContain'
    },
    region_id:{
        type: DataTypes.INTEGER,
        field: 'RegionID'
    },
    dir: {
        type: DataTypes.INTEGER,
        field: 'Dir'
    },
    off_set_x:{
        type: DataTypes.INTEGER,
        field: 'OffsetX'
    },
    off_set_y:{
        type: DataTypes.INTEGER,
        field: 'OffsetY'
    },
    off_set_z:{
        type: DataTypes.INTEGER,
        field: 'OffsetZ'
    },
    speed_1:{
        type: DataTypes.INTEGER,
        field: 'Speed1'
    },
    speed_2:{
        type: DataTypes.INTEGER,
        field: 'Speed2'
    },
    scale:{
        type: DataTypes.INTEGER,
        field: 'Scale'
    },
    bc_height:{
        type: DataTypes.INTEGER,
        field: 'BCHeight'
    },
    bc_radius:{
        type: DataTypes.INTEGER,
        field: 'BCRadius'
    },
    event_id:{
        type: DataTypes.INTEGER,
        field: 'EventID'
    },
    assoc_file_obj_128:{
        type: DataTypes.STRING,
        field: 'AssocFileObj128'
    },
    assoc_file_drop_128:{
        type: DataTypes.STRING,
        field: 'AssocFileDrop128'
    },
    assoc_file_con_128:{
        type: DataTypes.STRING,
        field: 'AssocFileIcon128'
    },
    assoc_file1_128:{
        type: DataTypes.STRING,
        field: 'AssocFile1_128'
    },
    assoc_file2_128:{
        type: DataTypes.STRING,
        field: 'AssocFile2_128'
    },
    link:{
        type: DataTypes.STRING,
        field: 'Link'
    }
},{
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_RefObjCommon',
    createdAt: false,
    updatedAt: false
})

