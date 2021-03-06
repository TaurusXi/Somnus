Ext.define('somnus.view.management.UserOrgGrant', {
    extend: 'Ext.window.Window',
    alias: 'widget.userOrgGrant',
    title: '所属机构',
    modal: true,
    initComponent: function () {
        this.treePanel = Ext.create('Ext.tree.Panel', {
        	width:500,
        	height:500,
        	/*displayField:'name',*/
        	store: 'management.UserOrgTreeStore',
			rootVisible: false
        });
        this.grantBtn = Ext.create('Ext.button.Button', {
        	text: '修改',
        	action:'grant'
        });

        this.items = [this.treePanel];
        this.buttons = [this.grantBtn];
        this.callParent();
    }
});
