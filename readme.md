
##����
* Somnusʾ����Ŀ��һ����Eclipse Kepler������Struts2.3.x+Spring3.2.x+Hibernate4.2.x+CXF2.7.x+ExtJs4.2+Maven�ܹ���ʾ����Ŀ

### ���Ĺ���
* ͨ�õ�DAO��Service��Controller���󣬴�CRUD�н��
* �򵥵ķ�ҳ�����򡢲�ѯ���󣬸���Ŀ����ٶ�
* ����springʵ�ּ򵥵����ݰ󶨡�����ת������֤����ʽ��
* �ṩ�������û�����֯��������Դ�ȹ���
* �ṩ������Դ��ϸ������Ȩ������������Ȩģ��
* �ṩ���ù��ܵ�������ֱ�������ü��ɣ������������ƶ��б�����������ķ��ࣩ�����ӱ����༭�����ļ��ϴ�����������Excel���뵼���ȵ�
* ��ع��ܣ����绺������������ʡ�������Ƶȣ����������������JVM״̬�����ݿ⣨druid���ĺܺ��ˣ�ֱ�������ģ��ȵ�
* ά�����ܣ�����ͼ�������ǿ������߱༭���ܣ�ֱ�����߱༭JSP�����������з��������ϴ����صȵȣ�����̬��Դ�������Զ���ѹ�����汾��js/css������̬��ɾ�������
* վ���Ź��ܣ�֧��Ƕ��չʾ��
* ֪ͨϵͳ����ʱ�����첽������ɺ�ʹ��֪ͨϵͳ֪ͨ
* ͨ�õ��ļ��ϴ�/���ء�ͨ�õ���֤ģ�͵ȵ�
* ����

### ����ѡ��

#### ����
* maven��������Ŀ����
* git�汾����

#### ���
* IoC���� spring
* web��� struts2
* orm��� hibernate + spring data jpa
* ��ȫ��� shiro
* ��֤��� hibernate validator
* ������ȿ�� quartz
* ���� ehcache
* ����Դ druid
* ��־ slf4j+logback
* Json fastjson


#### ǰ��
* extjs4 
* jquery-cookie 
* jquery-fileupload �ļ��ϴ�
* bootstrap-datatimepicker ����ѡ��

#### ���ݿ�
 * Ŀǰ�Ѿ�������ͨ�������ݿ���MySql5��Oracle10g��SqlServer2005


###֧�ֵ������
 * chrome
 * firefox��Ŀǰʹ��firefox 19.0.2���ԣ�
 * opera 12
 * ie7�����ϣ�����ie9���ϣ���ȡ���õ����飩
 * �����������ʱδ����

##�������

####1����es/web/pom.xml�޸����ݿ����ã�
*  Ĭ���޸ģ�Somnus\src\main\resources\config.properties�µ�
*  jdbc.username
*  jdbc.password
*  ��������ݿ��У��½�һ���ֿ⣬���ֱ����jdbc.url�е�һ��

####2������Ŀ�ĸ���
* maven install.bat ��װjar�������زֿ⣨jdk6���ɣ�
* maven jetty run.bat ����webӦ�� Ĭ�϶˿�9999 ���Ե�Somnus/pom.xml���޸�