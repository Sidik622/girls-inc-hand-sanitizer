basic.forever(function () {
    serial.writeLine("" + (sparkbitI.irTransmitterIsReceived(SparkbitInPort.Input1, SparkbitInPort.Input2)))
    if (sparkbitI.irTransmitterIsReceived(SparkbitInPort.Input1, SparkbitInPort.Input2)) {
        sparkbitO.rotateMotorModule(SparkbitOutPort.Output1, SparkbitDirection.Counterclockwise, 100)
        sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Clockwise, 100)
    } else {
        sparkbitO.stopMotorModule(SparkbitOutPort.Output1)
        sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
    }
    basic.showIcon(IconNames.Heart)
})
